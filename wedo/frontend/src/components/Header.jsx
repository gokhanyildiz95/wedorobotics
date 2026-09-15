import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { navLinks } from "../data/nav";
import { branches, contact } from "../data/branches";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const branchTicker = branches.map((b) => `${b.name} · ${b.city}`).join("   ★   ");

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden md:block bg-ink text-white/80 text-xs">
        <div className="mx-auto max-w-7xl px-6 py-1.5 overflow-hidden whitespace-nowrap">
          <span>{branchTicker}</span>
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur border-b-4 border-sun">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between gap-4 py-2.5">
          <NavLink to="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
            <img
              src="/assets/logo.png"
              alt="WeDo Robotics logo"
              className="h-10 sm:h-12 w-auto"
              width={531}
              height={90}
            />
          </NavLink>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `font-display font-semibold text-sm px-3 py-2 rounded-full transition-colors ${
                    isActive ? "bg-blue-light text-blue" : "text-ink-soft hover:bg-blue-light hover:text-blue"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href={`tel:${contact.phoneHref}`}
              className="flex items-center gap-1.5 text-sm font-bold text-blue hover:text-blue-dark"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              {contact.phoneDisplay}
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-mint text-white text-sm font-display font-semibold px-4 py-2 shadow-pop hover:bg-mint-dark active:translate-y-1 active:shadow-none transition-all"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-full text-ink hover:bg-blue-light"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden bg-white border-b-4 border-sun shadow-card">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-display font-semibold text-base px-4 py-3 rounded-2xl ${
                    isActive ? "bg-blue-light text-blue" : "text-ink-soft hover:bg-blue-light"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex gap-2 mt-2 px-4">
              <a
                href={`tel:${contact.phoneHref}`}
                className="flex-1 flex items-center justify-center gap-1.5 rounded-full border-2 border-blue text-blue text-sm font-display font-semibold py-2.5"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                Ara
              </a>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 rounded-full bg-mint text-white text-sm font-display font-semibold py-2.5"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
