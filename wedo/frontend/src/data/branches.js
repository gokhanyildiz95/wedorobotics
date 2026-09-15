// Tek doğruluk kaynağı: şube ve iş birliği bilgileri sitenin tamamında
// (header, footer, iletişim sayfası) buradan okunur. Eski sitede aynı bilgi
// sayfadan sayfaya farklı yazıyordu (ör. "Bilkent İDV" bir yerde şube,
// başka yerde eksikti) — bu dosya o tutarsızlığı ortadan kaldırır.

export const branches = [
  {
    id: "cayyolu",
    name: "Çayyolu - Ümitköy",
    city: "Ankara",
  },
  {
    id: "yildiz-oran",
    name: "Yıldız - Oran",
    city: "Ankara",
  },
  {
    id: "firat-teknokent",
    name: "Fırat Teknokent",
    city: "Elazığ",
  },
  {
    id: "dicle-teknokent",
    name: "Dicle Teknokent",
    city: "Diyarbakır",
  },
];

// Kendi merkezlerimizden ayrı olarak atölyelerimizin düzenlendiği
// okul / kurum iş birlikleri.
export const partnerSchools = [
  {
    id: "bilkent-idv",
    name: "Bilkent İDV",
    city: "Ankara",
  },
  {
    id: "elazig-doga",
    name: "İTÜ ETA Elazığ Doğa Koleji",
    city: "Elazığ",
  },
];

export const contact = {
  phoneDisplay: "0530 501 73 73",
  phoneHref: "+905305017373",
  whatsappHref: "https://wa.me/905305017373?text=Merhaba%2C%20kurslar%C4%B1n%C4%B1z%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
  email: "info@wedorobotics.com.tr",
  instagram: "https://www.instagram.com/wedorobotics/?hl=tr",
  facebook: "https://www.facebook.com/WeDoRobotics-466217073785154/",
};
