# Hostinger Deployment

## Node.js

Bu proje Node.js 20 için hazırlanmıştır.

## Build

Sunucuda proje kökünde:

```bash
npm install
npm run build
```

Ardından:

```bash
npm start
```

Node sunucusu `client/dist` klasörünü servis eder ve React Router sayfaları için SPA fallback uygular.

## Environment variables

Hostinger environment alanına veya `.env` dosyasına:

```env
NODE_ENV=production
PORT=3000
CONTACT_TO=info@perinoflex.com
CONTACT_FROM=
SMTP_HOST=
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=
SMTP_PASS=
```

Hostinger kendi `PORT` değerini veriyorsa uygulama otomatik olarak `process.env.PORT` kullanır.

## Start command

```bash
npm start
```

## Kontrol

Deployment sonrasında:

```text
/api/health
```

endpoint'i JSON `{ status: "ok" }` döndürmelidir.
