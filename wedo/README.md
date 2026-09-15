# WeDo Robotics — Yeni Web Sitesi

React (Vite) ön yüz + Node.js/Express backend ile yeniden tasarlanan WeDo Robotics web sitesi.

## Proje Yapısı

```
wedo/
  frontend/   React + Vite + Tailwind CSS v4
  backend/    Node.js + Express API
```

## Çalıştırma

**Backend** (http://localhost:4000)

```bash
cd backend
npm install
npm run dev
```

**Frontend** (http://localhost:5173)

```bash
cd frontend
npm install
npm run dev
```

Frontend, `frontend/.env` içindeki `VITE_API_URL` üzerinden backend'e bağlanır.

## Neler Yapıldı

Eski sitenin analizinde tespit edilen sorunlar giderildi:

- **Performans**: Eski site ~7,5 sn yükleme / ~4,2 MB. Yeni site production build'de ~100 KB (gzip) JS.
- **SEO**: Her sayfada `H1`, meta description, Open Graph etiketleri eklendi (`src/components/Seo.jsx`).
- **Erişilebilirlik**: Tüm görsellere `alt` metni eklendi.
- **Tutarsız şube bilgisi**: Tek doğruluk kaynağı `frontend/src/data/branches.js` — header, footer ve iletişim sayfası artık aynı veriyi kullanıyor.
- **Boş adres alanı**: İletişim sayfası artık gerçek şube/bölge bilgilerini gösteriyor.
- **Şablon kalıntıları**: Sahte telefon linki ve örnek ekip fotoğrafı gibi kalıntılar temizlendi.
- **Mobil deneyim**: Header mobilde çok daha kompakt; kullanıcı menüye ulaşmadan önce uzun uzun scroll yapmıyor.

## Görseller

`frontend/public/assets/photos/` altındaki tüm fotoğraflar WebP'ye çevrilip sıkıştırıldı (15 görsel, toplam ~700 KB) — performansı bozmadan görsel zenginlik eklendi. Kaynaklar:

- **Gerçek WeDo Robotics fotoğrafları** (mevcut siteden alındı): anasayfa/hakkımızda kahraman görseli, RoboMini/RoboArı/RoboKid program fotoğrafları, 4 ekip üyesinin gerçek portre fotoğrafları, LEGO Innovation Studio görseli (eski logo filigranı kırpılarak temizlendi).
- **Unsplash'ten ücretsiz/telifsiz stok fotoğraflar** (Unsplash Lisansı — ticari kullanım serbest): Kurumsal Çözümler sayfasındaki öğretmen eğitimi görseli, Yarışmalar sayfasının kahraman görseli, blog yazılarının kapak görselleri.

## Bilerek Boş / Yer Tutucu Bırakılanlar

- **Yorumlar (testimonials)**: `backend/src/data/testimonials.json` şu an boş `[]`. Uydurma yorum eklemedim — gerçek veli/öğrenci yorumları geldiğinde bu dosyaya eklenmesi yeterli, bölüm otomatik olarak görünür hale gelir.
- **Blog yazıları**: `backend/src/data/blog.json` içindeki 3 yazı, sitenin blog altyapısını göstermek için tarafımca yazılmış genel STEM/robotik içerikleridir. Gerçek kurumsal blog yazılarınızla değiştirilebilir.
- **Açık adres (sokak/bina)**: Eski sitede hiç girilmemişti; ben de olmayan bir adres uydurmadım. Şube adları ve şehir bilgisi gösteriliyor — tam adresleri iletirseniz `branches.js` dosyasına eklerim.

## İletişim Formu

`POST /api/contact` gelen mesajları `backend/src/data/messages.json` dosyasına kaydeder. Gerçek e-posta bildirimi (SMTP/nodemailer vb.) istenirse kolayca eklenebilir.
