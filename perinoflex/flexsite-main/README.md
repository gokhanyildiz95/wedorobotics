# Perino-Flex React + Node.js

Bu proje, sağlanan Perino-Flex HTML içeriğinin kurumsal görsel dili korunarak React + Node.js mimarisinde yeniden düzenlenmiş sürümüdür.

## Node sürümü

Proje **Node.js 20** için hazırlanmıştır.

```bash
node -v
```

Çıktının `v20.x.x` olması yeterlidir.

## Local çalıştırma

Proje kökünde:

```bash
npm install
npm run dev
```

- React/Vite: `http://localhost:5173`
- Node.js API: `http://localhost:3000`
- Health endpoint: `http://localhost:3000/api/health`

Production build:

```bash
npm run build
npm start
```

## Sayfa yapısı

Gerçek route yapısı şöyledir:

```text
/                       Ana Sayfa
/about                  Hakkımızda
/perinoflex              Perino-Flex
/perinoflex/gtk155       GTK155 ürün detayı
/perinoflex/gtk152       GTK152 ürün detayı
/perinoflex/gtk134       GTK134 ürün detayı
/perinoflex/gtk133       GTK133 ürün detayı
/contact                 İletişim
```

Üst menüde yalnızca dört route vardır:

```text
Ana Sayfa · Hakkımızda · Perino-Flex · İletişim
```

**Menüyü değiştireceğiniz dosya:**

```text
client/src/components/SiteHeader.jsx
```

Menüde `#why`, `#models`, `#compatibility`, `#resources` gibi sayfa içi linkler kullanılmaz.

## Logo

Perino-Flex logosu PNG asset olarak:

```text
client/public/assets/images/perino-flex-logo.png
```

Header ve footer aynı dosyayı kullanır.

## İçerik dosyaları

TR içerik:

```text
client/src/content/turkishContent.js
```

EN içerik:

```text
client/src/content/englishContent.js
```

Ürün ve uyumluluk verileri:

```text
client/src/content/products.js
```

Ürün verilerinde kaynakta bulunmayan teknik değer eklenmemiştir.

## İletişim formu / SMTP

`.env.example` dosyasını `.env` olarak kopyalayın:

```bash
cp .env.example .env
```

Doldurulabilecek alanlar:

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

SMTP tanımlı değilse API hata döndürür ve frontend kullanıcıya e-posta uygulaması fallback bağlantısını gösterir.

## Hostinger

1. ZIP içeriğini sunucuya aktarın.
2. Node.js sürümünü 20 seçin.
3. Proje kökünde `npm install` çalıştırın.
4. `npm run build` çalıştırın.
5. `.env` değerlerini tanımlayın.
6. Uygulamayı `npm start` ile başlatın.

Daha ayrıntılı notlar `docs/HOSTINGER_DEPLOYMENT.md` dosyasındadır.
