# Perino-Flex Kod Mimarisi

## 1. Temel yaklaşım

Frontend React Router ile gerçek sayfalara ayrılmıştır. Header navigasyonu yalnızca route değiştirir; sayfa içi hash/anchor navigasyonu kullanılmaz.

Menü doğrudan `client/src/components/SiteHeader.jsx` içindedir. Menü için ayrı bir config array veya `.map()` kullanılmamıştır. Dört link JSX içinde açık şekilde görünür:

- `/`
- `/about`
- `/perinoflex`
- `/contact`

## 2. Route tanımları

Route'lar `client/src/App.jsx` dosyasındadır.

Ürün detay route'ları da açık şekilde tanımlıdır:

- `/perinoflex/gtk155`
- `/perinoflex/gtk152`
- `/perinoflex/gtk134`
- `/perinoflex/gtk133`

Dinamik `find()` / ürün route mapping yaklaşımı kullanılmamıştır. Her route ilgili ürün nesnesini `ProductDetailPage` component'ine açıkça geçirir.

## 3. Component yapısı

```text
components/
  SiteHeader.jsx
  SiteFooter.jsx
  SiteLayout.jsx
  RouteScrollTop.jsx
  ScrollReveal.jsx
  PageIntro.jsx
  SectionTitle.jsx
  ProductCard.jsx
  ProductGrid.jsx
  ProductAdvantages.jsx
  ProductVideo.jsx
  ProductCompatibilityTable.jsx
  ProductResources.jsx
  ContactDetails.jsx
  ContactForm.jsx
```

Reusable yapı component seviyesindedir. İçerik akışını belirsiz dizilerden üretmek yerine sayfaların JSX sırası açık tutulmuştur.

## 4. Sayfalar

### HomePage.jsx

Ana sayfa sırası:

1. Hero
2. Uyumlu sistem şeridi
3. Grid/template ve Perino-Flex karşılaştırması
4. Perino-Flex sayfasına yönlendiren ürün tanıtımı
5. İletişim CTA

### AboutPage.jsx

Yalnızca kaynakta doğrulanmış bilgiler kullanılır:

- Perino-Flex
- GEOTEK Healthcare Products
- Ankara adresi
- info@perinoflex.com

Kaynakta bulunmayan şirket tarihçesi, kuruluş yılı veya benzeri bilgiler eklenmez.

### PerinoFlexPage.jsx

İçerik sırası:

1. Ürün girişi
2. Ürün görseli / kısa açıklama
3. Klinik avantajlar
4. Mekanizma videosu
5. Dört ürün modeli
6. Transduser uyumluluk tablosu
7. Doküman alanı
8. İletişim CTA

Bu alanlar header menüsüne eklenmez.

### ProductDetailPage.jsx

Aynı reusable detay component'i dört ürün için kullanılır. Sayfada:

- ürün görseli
- referans kodu
- ultrason sistemi
- uyumlu transduser
- kaynakta verilen iğne uyumluluğu
- ortak Perino-Flex özellikleri
- teklif CTA

bulunur.

## 5. Ürün verileri

`client/src/content/products.js`

Her ürün açık bir constant olarak tanımlanmıştır:

```js
PERINO_FLEX_GTK155
PERINO_FLEX_GTK152
PERINO_FLEX_GTK134
PERINO_FLEX_GTK133
```

Kaynak uyumlulukları:

```text
GTK155 -> BK -> 8848-9048
GTK152 -> BK -> 8818-E14C4t (9018)
GTK134 -> GE · Sonoscape · Terason · Esaote -> ERB7 · BCL10-5 · 8BP4 · TRT33
GTK133 -> Hitachi -> C41L47RP-U533
```

İğne uyumluluğu:

```text
Koaksiyel: 15G–17G
Biyopsi: 16G–18G
```

## 6. Dil yapısı

String key hesaplayan `t('adv' + index)` mantığı kaldırılmıştır.

İçerik doğrudan anlamlı property isimleriyle tutulur:

```text
content.home.heroDescription
content.perinoFlex.advantageOneTitle
content.contact.ultrasoundSystem
```

Dosyalar:

```text
client/src/content/turkishContent.js
client/src/content/englishContent.js
```

## 7. CSS

Tüm ana stil:

```text
client/src/styles.css
```

CSS mobile-first davranışı destekler; header, hero, gridler, uyumluluk tablosu, ürün detayları ve form responsive'dir.

Ayrıca:

- `:focus-visible`
- minimum touch alanları
- skip link
- `prefers-reduced-motion`
- mobil menü scroll lock
- responsive tablo

uygulanmıştır.

## 8. Backend

`server/app.js` Express sunucusudur.

Görevleri:

- `POST /api/contact`
- input temizleme
- e-posta doğrulama
- rate limit
- SMTP/Nodemailer
- Helmet güvenlik başlıkları
- production React build servis etme
- BrowserRouter fallback

Değişken isimleri işlevi açıkça ifade edecek şekilde yazılmıştır (`contactFormRateLimiter`, `sanitizeSingleLineText`, `recipientAddress`, `clientBuildDirectory` vb.).
