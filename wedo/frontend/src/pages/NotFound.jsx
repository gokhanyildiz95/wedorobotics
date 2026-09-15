import { Home } from "lucide-react";
import Seo from "../components/Seo";
import Section from "../components/Section";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <>
      <Seo title="Sayfa Bulunamadı" />
      <Section className="text-center">
        <img
          src="/assets/logo-icon.png"
          alt=""
          aria-hidden="true"
          className="mx-auto h-24 w-auto animate-wiggle mb-6"
        />
        <p className="font-display font-extrabold text-6xl text-blue">404</p>
        <h1 className="mt-3 font-display font-bold text-2xl text-ink">Bu sayfa robotlarımızca bulunamadı</h1>
        <p className="mt-2 text-ink-soft">Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.</p>
        <div className="mt-7">
          <Button to="/" variant="coral" icon={Home}>
            Anasayfaya Dön
          </Button>
        </div>
      </Section>
    </>
  );
}
