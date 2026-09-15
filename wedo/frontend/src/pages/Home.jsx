import { Link } from "react-router-dom";
import {
  ArrowRight,
  FlaskConical,
  GraduationCap,
  BadgeCheck,
  ShieldCheck,
  Sparkles,
  Atom,
  Heart,
  Rocket,
  PartyPopper,
  Puzzle,
  MapPin,
} from "lucide-react";
import Seo from "../components/Seo";
import Section, { Eyebrow } from "../components/Section";
import Button from "../components/Button";
import Blob from "../components/Blob";
import ProgramCard from "../components/ProgramCard";
import TeamCard from "../components/TeamCard";
import StatCounter from "../components/StatCounter";
import TestimonialsSection from "../components/TestimonialsSection";
import { programs } from "../data/programs";
import { team, stats, whyUs } from "../data/team";
import { branches, partnerSchools, contact } from "../data/branches";

const WHY_ICONS = {
  arge: FlaskConical,
  akademik: GraduationCap,
  sertifikali: BadgeCheck,
  hijyen: ShieldCheck,
  icerik: Sparkles,
  stem: Atom,
};

const VALUES = [
  { id: "sevgi", icon: Heart, title: "Sevgi", text: "Bilimi soyut bir kavram olmaktan çıkarıp elle tutulur, heyecan verici bir araca dönüştürüyoruz." },
  { id: "ozguven", icon: Rocket, title: "Öz Güven", text: "Gerçek hayata dair problemler çözmelerini sağlayarak merak etmeyi ve soru sormayı teşvik ediyoruz." },
  { id: "heyecan", icon: PartyPopper, title: "Heyecan", text: "Mühendislik, teknoloji ve kodlamayı deneyimleyerek bilimden heyecan duymalarını sağlıyoruz." },
  { id: "butunsellik", icon: Puzzle, title: "Bütünsellik", text: "Fen, Teknoloji, Mühendislik ve Matematiği (STEM) birbirine bağlı tek bir deneyim olarak sunuyoruz." },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Çocuklar için Robotik, Kodlama ve STEM Eğitimi"
        description="WeDo Robotics; 4 yaştan itibaren çocuklara LEGO Education ile robotik, kodlama ve STEM eğitimi veren atölyeler sunar. Ücretsiz deneme dersi için hemen iletişime geçin."
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-blue">
        <Blob variant={0} color="rgba(255,255,255,0.08)" className="absolute -top-24 -left-24 w-96 h-96 animate-float-slow" />
        <Blob variant={1} color="rgba(255,201,60,0.15)" className="absolute -bottom-32 -right-16 w-[28rem] h-[28rem] animate-float-slower" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-20 sm:pt-20 sm:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 text-white font-display font-bold text-xs uppercase tracking-wide px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              LEGO Education Yetkili Eğitim Ortağı
            </span>
            <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] text-white">
              LEGO Education ile <span className="text-sun">yaparak</span> ve yaşayarak öğrenme
            </h1>
            <p className="mt-5 text-white/80 text-lg max-w-xl mx-auto lg:mx-0">
              4 yaşından itibaren çocuklar için robotik, kodlama ve STEM atölyeleri. Gerçek mühendisler ve sertifikalı
              eğitmenlerle her çocuğun içindeki mucidi keşfediyoruz.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button href={contact.whatsappHref} variant="coral" icon={ArrowRight}>
                Ücretsiz Deneme Dersi
              </Button>
              <Button to="/programlarimiz" variant="ghost">
                Programları Keşfet
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-white/70 text-sm">
              {branches.map((b) => (
                <span key={b.id} className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-sun" />
                  {b.city}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center px-4 sm:px-0">
            <div className="relative w-full max-w-sm sm:max-w-md rotate-2 rounded-[2rem] bg-white/10 p-2.5 shadow-2xl backdrop-blur-sm">
              <img
                src="/assets/photos/about-hero.webp"
                alt="WeDo Robotics öğrencileri robotik atölyesinde birlikte çalışıyor"
                className="h-64 sm:h-80 w-full rounded-[1.6rem] object-cover"
                width={900}
                height={900}
              />
            </div>
            <img
              src="/assets/logo-icon.png"
              alt="WeDo Robotics robot maskotu"
              className="absolute -bottom-6 -left-2 sm:-left-6 w-20 sm:w-28 h-auto animate-float-slow drop-shadow-2xl"
              width={531}
              height={538}
            />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <Section>
        <div className="text-center mb-12">
          <Eyebrow color="coral">Neden Biz?</Eyebrow>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-ink">
            Çocuklar ve Ebeveynleri Neden Bizi Seçiyor?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item) => {
            const Icon = WHY_ICONS[item.id];
            return (
              <div key={item.id} className="rounded-3xl bg-white p-6 shadow-card hover:-translate-y-1 transition-transform">
                <div className="h-12 w-12 rounded-2xl bg-coral-light flex items-center justify-center">
                  <Icon className="h-6 w-6 text-coral-dark" strokeWidth={2.2} />
                </div>
                <p className="mt-4 font-display font-bold text-lg text-ink">{item.title}</p>
                <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* VALUES */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow color="sun">Öz Değerlerimiz</Eyebrow>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-ink">Her Çocuk Mucit Doğar</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Misyonumuz; okul öncesinden liseye kadar çocukların Bilim, Teknoloji, Mühendislik ve Matematiğin (STEM)
              temel ilkelerini robotik aracılığıyla keşfetmeleri için eğlenceli, güvenli ve etkileşimli bir deneyim
              yaratmaktır. Atölyelerimizi gerçek mühendisler, bilim insanları ve sertifikalı eğitmenler yürütür.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div key={v.id} className="rounded-3xl bg-blue-light/60 p-5">
                <v.icon className="h-7 w-7 text-blue" strokeWidth={2.2} />
                <p className="mt-3 font-display font-bold text-ink">{v.title}</p>
                <p className="mt-1 text-sm text-ink-soft leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PROGRAMS */}
      <Section>
        <div className="text-center mb-12">
          <Eyebrow color="mint">Programlarımız</Eyebrow>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-ink">Yaş Grubuna Göre Öğrenme Yolculuğu</h2>
          <p className="mt-3 text-ink-soft max-w-2xl mx-auto">
            Okul öncesinden liseye kadar her yaş grubu için kademeli olarak tasarlanmış STEM ve robotik müfredatı.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/programlarimiz" variant="outline" icon={ArrowRight}>
            Tüm Programları İncele
          </Button>
        </div>
      </Section>

      {/* STATS */}
      <section className="bg-blue relative overflow-hidden">
        <Blob variant={0} color="rgba(255,255,255,0.06)" className="absolute -top-10 right-0 w-72 h-72" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 grid grid-cols-3 gap-6">
          {stats.map((s) => (
            <StatCounter key={s.id} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      {/* TEAM */}
      <Section>
        <div className="text-center mb-12">
          <Eyebrow color="grape">Ekibimizle Tanışın</Eyebrow>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-ink">Nitelikli Öğretmenler</h2>
          <p className="mt-3 text-ink-soft max-w-2xl mx-auto">
            Hem çocuklarla hem de ailelerle güvenilir ve saygılı ilişkiler kurmak için birlikte çalışıyoruz.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <TeamCard key={m.id} member={m} />
          ))}
        </div>
      </Section>

      {/* BRANCHES */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <Eyebrow color="blue">Merkezlerimiz</Eyebrow>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-ink">4 Şehirde Yanınızdayız</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {branches.map((b) => (
            <div key={b.id} className="rounded-2xl border-2 border-blue-light p-5 text-center">
              <MapPin className="mx-auto h-6 w-6 text-blue" />
              <p className="mt-2 font-display font-bold text-ink">{b.name}</p>
              <p className="text-sm text-ink-soft">{b.city}</p>
            </div>
          ))}
        </div>
        {partnerSchools.length > 0 ? (
          <p className="mt-6 text-center text-sm text-ink-soft">
            Ayrıca <strong>{partnerSchools.map((p) => p.name).join(", ")}</strong> iş birliğiyle atölyelerimiz devam etmektedir.
          </p>
        ) : null}
      </Section>

      <TestimonialsSection />

      {/* FINAL CTA */}
      <Section className="bg-coral relative overflow-hidden">
        <Blob variant={1} color="rgba(255,255,255,0.1)" className="absolute -top-16 -left-10 w-72 h-72" />
        <div className="relative text-center">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Çocuğunuzla birlikte ilk atölyeye ne dersiniz?
          </h2>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">
            Ücretsiz deneme dersi için hemen bizimle iletişime geçin, size en yakın merkezimizi önerelim.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href={contact.whatsappHref} variant="ghost">
              WhatsApp'tan Yazın
            </Button>
            <Button to="/iletisim" variant="blue">
              İletişim Formu
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
