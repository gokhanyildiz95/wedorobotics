import { ArrowRight, Factory, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function AboutPage() {
  const { content } = useLanguage();
  const about = content.about;

  useDocumentMeta(`${content.navigation.about} · Perino-Flex`, about.description);

  return (
    <>
      <PageIntro eyebrow={about.eyebrow} title={about.title} description={about.description} />

      <section className="section-block">
        <div className="site-container about-layout">
          <ScrollReveal className="about-copy">
            <p className="section-eyebrow">Perino-Flex</p>
            <h2>{about.sectionTitle}</h2>
            <p>{about.productText}</p>
            <p>{about.brandText}</p>
            <div className="inline-actions">
              <Link className="button button-primary" to="/perinoflex">
                {content.common.explorePerinoFlex} <ArrowRight size={17} />
              </Link>
              <a className="button button-outline" href="https://www.geotekmedical.com" target="_blank" rel="noreferrer">
                {content.footer.visitGeotek}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal className="about-information-card" delay={80}>
            <img src="/assets/images/geotek-logo.png" alt="GEOTEK Healthcare Products" />
            <div className="about-information-row">
              <Factory />
              <div><span>{about.manufacturer}</span><strong>GEOTEK Healthcare Products</strong></div>
            </div>
            <div className="about-information-row">
              <MapPin />
              <div><span>{about.address}</span><strong>Eskişehir Yolu 42. Km, ASO 2. OSB, 2014 Cad. No:11, Sincan / Ankara, Türkiye</strong></div>
            </div>
            <div className="about-information-row">
              <Mail />
              <div><span>{about.email}</span><strong><a href="mailto:info@perinoflex.com">info@perinoflex.com</a></strong></div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
