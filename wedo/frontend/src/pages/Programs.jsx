import { ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Button from "../components/Button";
import ProgramCard from "../components/ProgramCard";
import { programs } from "../data/programs";
import { contact } from "../data/branches";

export default function Programs() {
  return (
    <>
      <Seo
        title="Programlarımız"
        description="RoboMini, RoboArı ve RoboKid: 4 yaştan liseye kadar yaş grubuna özel LEGO Education tabanlı robotik ve kodlama programları."
      />
      <PageHero
        eyebrow="Programlarımız"
        title="Yaş Grubuna Göre Öğrenme Yolculuğu"
        subtitle="Okul öncesinden liseye kadar her yaş için kademeli olarak tasarlanmış STEM ve robotik müfredatı."
      />

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="rounded-3xl bg-blue p-8 sm:p-12 text-center relative overflow-hidden">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
            Çocuğunuz hangi programa uygun, birlikte bulalım
          </h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">
            Ücretsiz deneme dersine katılarak çocuğunuz için en uygun programı ekibimizle değerlendirebilirsiniz.
          </p>
          <div className="mt-6">
            <Button href={contact.whatsappHref} variant="coral" icon={ArrowRight}>
              Deneme Dersi İçin Yazın
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
