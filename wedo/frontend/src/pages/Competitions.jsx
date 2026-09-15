import { Trophy } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import { competitions } from "../data/competitions";

const COLOR_MAP = {
  blue: "bg-blue-light text-blue",
  sun: "bg-sun-light text-sun-dark",
  mint: "bg-mint-light text-mint-dark",
  grape: "bg-grape-light text-grape",
  coral: "bg-coral-light text-coral-dark",
};

export default function Competitions() {
  return (
    <>
      <Seo
        title="Yarışmalarımız"
        description="WRO, FIRST LEGO League ve Teknofest gibi ulusal ve uluslararası robotik yarışmalarına öğrencilerimizi hazırlıyoruz."
      />
      <PageHero
        eyebrow="Yarışmalarımız"
        title="Öğrendiklerini Yarışarak Kanıtla"
        subtitle="Öğrencilerimizi ulusal ve uluslararası robotik yarışmalarına hazırlayarak takım çalışması ve mühendislik becerilerini pekiştiriyoruz."
        image="/assets/photos/competitions-hero.webp"
      />

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((c) => (
            <div key={c.id} className="rounded-3xl bg-white p-7 shadow-card">
              <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${COLOR_MAP[c.color]}`}>
                <Trophy className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <p className="mt-4 font-display font-bold text-xs uppercase tracking-wide text-ink-soft">{c.short}</p>
              <h3 className="mt-1 font-display font-extrabold text-xl text-ink">{c.name}</h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
