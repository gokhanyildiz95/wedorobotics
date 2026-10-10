import { Factory, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function ContactDetail({ Icon, label, children }) {
  return (
    <div className="contact-detail">
      <div className="contact-detail-icon"><Icon /></div>
      <div>
        <span className="contact-detail-label">{label}</span>
        <div className="contact-detail-value">{children}</div>
      </div>
    </div>
  );
}

export default function ContactDetails() {
  const { content } = useLanguage();

  return (
    <div className="contact-details">
      <ContactDetail Icon={Phone} label={content.contact.phone}>
        <a href="tel:+903123959852">+90 (312) 395 98 52</a><br />
        <a href="tel:+903125146404">+90 (312) 514 64 04</a>
      </ContactDetail>

      <ContactDetail Icon={Mail} label={content.contact.email}>
        <a href="mailto:info@perinoflex.com">info@perinoflex.com</a>
      </ContactDetail>

      <ContactDetail Icon={MapPin} label={content.contact.address}>
        Eskişehir Yolu 42. Km, ASO 2. OSB,<br />
        2014 Cad. No:11, Sincan / Ankara, Türkiye
      </ContactDetail>

      <ContactDetail Icon={Factory} label={content.contact.manufacturer}>
        GEOTEK Healthcare Products
      </ContactDetail>
    </div>
  );
}
