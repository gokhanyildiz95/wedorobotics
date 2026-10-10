const fs = require('fs');
const path = require('path');
const compression = require('compression');
const dotenv = require('dotenv');
const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const nodemailer = require('nodemailer');

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const server = express();
const serverPort = Number(process.env.PORT || 3000);
const isProductionEnvironment = process.env.NODE_ENV === 'production';
const clientBuildDirectory = path.resolve(__dirname, '..', 'client', 'dist');

server.set('trust proxy', 1);
server.disable('x-powered-by');

server.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
        imgSrc: ["'self'", 'data:', 'https://img.youtube.com'],
        frameSrc: ["'self'", 'https://www.youtube.com', 'https://www.youtube-nocookie.com'],
        connectSrc: ["'self'"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"]
      }
    },
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: 'cross-origin' }
  })
);

server.use(compression());
server.use(express.json({ limit: '64kb' }));

server.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
    service: 'perino-flex',
    timestamp: new Date().toISOString()
  });
});

const contactFormRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 8,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    ok: false,
    code: 'RATE_LIMIT',
    message: 'Too many requests. Please try again later.'
  }
});

function sanitizeMultilineText(value, maximumLength = 2000) {
  return String(value || '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()
    .slice(0, maximumLength);
}

function sanitizeSingleLineText(value, maximumLength = 180) {
  return sanitizeMultilineText(value, maximumLength).replace(/[\r\n]+/g, ' ');
}

function isValidEmailAddress(emailAddress) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
}

function hasSmtpConfiguration() {
  return Boolean(
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.SMTP_PASS !== 'YOUR_HOSTINGER_MAILBOX_PASSWORD'
  );
}

function createMailTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE || 'true').toLowerCase() === 'true',
    auth: {
      user: process.env.SMTP_USER || 'info@perinoflex.com',
      pass: process.env.SMTP_PASS
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000
  });
}

server.post('/api/contact', contactFormRateLimiter, async (request, response) => {
  const fullName = sanitizeSingleLineText(request.body?.name, 120);
  const organization = sanitizeSingleLineText(request.body?.organization, 160);
  const emailAddress = sanitizeSingleLineText(request.body?.email, 180);
  const country = sanitizeSingleLineText(request.body?.country, 100);
  const ultrasoundSystem = sanitizeSingleLineText(request.body?.system, 240);
  const message = sanitizeMultilineText(request.body?.message, 4000);
  const language = request.body?.lang === 'tr' ? 'tr' : 'en';
  const website = sanitizeSingleLineText(request.body?.website, 200);

  // Honeypot: real users never see or fill this field.
  if (website) {
    return response.json({ ok: true });
  }

  if (!fullName || !emailAddress || !ultrasoundSystem) {
    return response.status(400).json({
      ok: false,
      code: 'VALIDATION_ERROR',
      message: language === 'tr'
        ? 'Ad soyad, e-posta ve ultrason sistemi/prob alanları zorunludur.'
        : 'Full name, email and ultrasound system/probe are required.'
    });
  }

  if (!isValidEmailAddress(emailAddress)) {
    return response.status(400).json({
      ok: false,
      code: 'INVALID_EMAIL',
      message: language === 'tr'
        ? 'Geçerli bir e-posta adresi girin.'
        : 'Please enter a valid email address.'
    });
  }

  const recipientAddress = process.env.CONTACT_TO || 'info@perinoflex.com';
  const senderAddress = process.env.CONTACT_FROM || process.env.SMTP_USER || 'info@perinoflex.com';
  const subjectPrefix = language === 'tr' ? 'Perino-Flex Teklif Talebi' : 'Perino-Flex Quote Request';
  const emailSubject = `${subjectPrefix}: ${organization || fullName}`;
  const emailBody = [
    `Name / Ad Soyad: ${fullName}`,
    `Organization / Kurum: ${organization || '-'}`,
    `Email / E-posta: ${emailAddress}`,
    `Country / Ülke: ${country || '-'}`,
    `Ultrasound / Probe: ${ultrasoundSystem}`,
    '',
    'Message / Mesaj:',
    message || '-'
  ].join('\n');

  if (!hasSmtpConfiguration()) {
    return response.status(503).json({
      ok: false,
      code: 'SMTP_NOT_CONFIGURED',
      message: language === 'tr'
        ? 'Sunucu e-posta ayarları henüz yapılandırılmamış.'
        : 'Server email settings are not configured yet.',
      fallback: {
        to: recipientAddress,
        subject: emailSubject,
        text: emailBody
      }
    });
  }

  try {
    const mailTransport = createMailTransport();

    await mailTransport.sendMail({
      from: `Perino-Flex Website <${senderAddress}>`,
      to: recipientAddress,
      replyTo: emailAddress,
      subject: emailSubject,
      text: emailBody
    });

    return response.json({
      ok: true,
      message: language === 'tr'
        ? 'Talebiniz başarıyla gönderildi.'
        : 'Your request has been sent successfully.'
    });
  } catch (error) {
    console.error('Contact form email error:', error?.message || error);

    return response.status(502).json({
      ok: false,
      code: 'MAIL_SEND_FAILED',
      message: language === 'tr'
        ? 'E-posta gönderilemedi. Lütfen doğrudan e-posta ile iletişime geçin.'
        : 'The email could not be sent. Please contact us directly by email.',
      fallback: {
        to: recipientAddress,
        subject: emailSubject,
        text: emailBody
      }
    });
  }
});

if (fs.existsSync(clientBuildDirectory)) {
  server.use(express.static(clientBuildDirectory, {
    maxAge: isProductionEnvironment ? '7d' : 0,
    index: false
  }));

  server.get('*', (request, response, next) => {
    if (request.path.startsWith('/api/')) return next();
    if (path.extname(request.path)) return response.status(404).end();
    return response.sendFile(path.join(clientBuildDirectory, 'index.html'));
  });
} else if (isProductionEnvironment) {
  console.warn('client/dist was not found. Run `npm run build` before starting production.');
}

server.use((request, response) => {
  if (request.path.startsWith('/api/')) {
    return response.status(404).json({
      ok: false,
      code: 'NOT_FOUND',
      message: 'API route not found.'
    });
  }

  return response.status(404).send('Not found');
});

server.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({
    ok: false,
    code: 'SERVER_ERROR',
    message: 'Unexpected server error.'
  });
});

server.listen(serverPort, '0.0.0.0', () => {
  console.log(`Perino-Flex server listening on port ${serverPort}`);
});
