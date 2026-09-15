import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Section, { Eyebrow } from "../components/Section";
import ContactForm from "../components/ContactForm";
import { branches, partnerSchools, contact } from "../data/branches";

export default function Contact() {
  return (
    <>
      <Seo
        title="İletişim"
        description="WeDo Robotics merkezlerimizle iletişime geçin: telefon, WhatsApp, e-posta veya iletişim formu ile bize ulaşın."
      />
      <PageHero
        eyebrow="İletişim"
        title="Sizden Duymak İsteriz"
        subtitle="Sorularınız için bize telefon, WhatsApp veya aşağıdaki formdan ulaşabilirsiniz."
      />

      <Section>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl bg-white p-7 shadow-card">
              <Eyebrow color="mint">Bize Ulaşın</Eyebrow>
              <div className="mt-5 space-y-4">
                <a href={`tel:${contact.phoneHref}`} className="flex items-center gap-3 group">
                  <span className="h-11 w-11 rounded-full bg-blue-light flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-blue" strokeWidth={2.2} />
                  </span>
                  <span>
                    <span className="block text-xs text-ink-soft">Bizi Arayın</span>
                    <span className="font-display font-bold text-ink group-hover:text-blue">{contact.phoneDisplay}</span>
                  </span>
                </a>
                <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <span className="h-11 w-11 rounded-full bg-mint-light flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-mint-dark" strokeWidth={2.2} />
                  </span>
                  <span>
                    <span className="block text-xs text-ink-soft">WhatsApp</span>
                    <span className="font-display font-bold text-ink group-hover:text-mint-dark">{contact.phoneDisplay}</span>
                  </span>
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 group">
                  <span className="h-11 w-11 rounded-full bg-coral-light flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-coral-dark" strokeWidth={2.2} />
                  </span>
                  <span>
                    <span className="block text-xs text-ink-soft">E-posta</span>
                    <span className="font-display font-bold text-ink group-hover:text-coral-dark">{contact.email}</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-card">
              <Eyebrow color="blue">Merkezlerimiz</Eyebrow>
              <ul className="mt-5 space-y-3">
                {branches.map((b) => (
                  <li key={b.id} className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-ink">
                      <span className="font-semibold">{b.name}</span>
                      <span className="text-ink-soft"> · {b.city}</span>
                    </span>
                  </li>
                ))}
              </ul>
              {partnerSchools.length > 0 ? (
                <p className="mt-4 pt-4 border-t border-blue-light text-xs text-ink-soft leading-relaxed">
                  Atölye iş birliklerimiz: {partnerSchools.map((p) => `${p.name} (${p.city})`).join(", ")}
                </p>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-7 sm:p-9 shadow-card">
              <Eyebrow color="coral">Mesaj Gönderin</Eyebrow>
              <h2 className="mt-3 font-display font-extrabold text-2xl text-ink">Size nasıl yardımcı olabiliriz?</h2>
              <p className="mt-2 text-sm text-ink-soft">
                Formu doldurun, en yakın merkezimizdeki eğitmen ekibimiz sizinle iletişime geçsin.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
