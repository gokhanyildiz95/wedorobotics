import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";
import { navLinks } from "../data/nav";
import { branches, contact } from "../data/branches";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <img src="/assets/logo-icon.png" alt="" aria-hidden="true" className="h-12 w-auto mb-3" />
          <p className="font-display font-bold text-white text-lg">WeDo Robotics</p>
          <p className="mt-2 text-sm leading-relaxed">
            LEGO Education ile yaparak ve yaşayarak öğrenme. Çocuklar için robotik, kodlama ve STEM atölyeleri.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-coral transition-colors"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-coral transition-colors"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-display font-semibold text-white mb-3">Hızlı Bağlantılar</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-sun transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-semibold text-white mb-3">Merkezlerimiz</p>
          <ul className="space-y-2 text-sm">
            {branches.map((b) => (
              <li key={b.id} className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-sun" />
                <span>
                  {b.name} <span className="text-white/50">· {b.city}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-semibold text-white mb-3">İletişim</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`tel:${contact.phoneHref}`} className="flex items-center gap-2 hover:text-sun transition-colors">
                <Phone className="h-4 w-4 text-sun" />
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-sun transition-colors">
                <Mail className="h-4 w-4 text-sun" />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-white/50 flex flex-col sm:flex-row gap-2 justify-between">
          <p>© {year} WeDo Robotics. Tüm hakları saklıdır.</p>
          <p>LEGO® ve LEGO Education®, LEGO Group'un tescilli markalarıdır.</p>
        </div>
      </div>
    </footer>
  );
}
