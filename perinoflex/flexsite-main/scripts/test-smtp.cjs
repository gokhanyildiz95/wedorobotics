const path = require('path');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpSecure = String(process.env.SMTP_SECURE || 'true').toLowerCase() === 'true';
const smtpUser = process.env.SMTP_USER || 'info@perinoflex.com';
const smtpPassword = process.env.SMTP_PASS;

if (!smtpPassword || smtpPassword === 'YOUR_HOSTINGER_MAILBOX_PASSWORD') {
  console.error('SMTP_PASS is not configured. Add the info@perinoflex.com mailbox password to .env or Hostinger environment variables.');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: smtpUser,
    pass: smtpPassword
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000
});

transporter.verify()
  .then(() => {
    console.log(`SMTP connection verified for ${smtpUser} via ${smtpHost}:${smtpPort}.`);
    process.exit(0);
  })
  .catch((error) => {
    console.error('SMTP verification failed:', error.message);
    process.exit(1);
  });