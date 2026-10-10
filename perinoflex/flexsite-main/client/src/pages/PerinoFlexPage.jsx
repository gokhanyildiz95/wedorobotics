import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro';
import ProductAdvantages from '../components/ProductAdvantages';
import ProductCompatibilityTable from '../components/ProductCompatibilityTable';
import ProductGrid from '../components/ProductGrid';
import ProductResources from '../components/ProductResources';
import ProductVideo from '../components/ProductVideo';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../context/LanguageContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function PerinoFlexPage() {
  const { content } = useLanguage();
  const perinoFlex = content.perinoFlex;

  useDocumentMeta('Perino-Flex · Adjustable Freehand Needle Guide', perinoFlex.description);

  return (
    <>
<PageIntro
  eyebrow={perinoFlex.eyebrow}
  title={perinoFlex.title}
  description={perinoFlex.description}
  actions={(
    <>
      <Link className="button button-primary" to="/contact">
        {content.common.requestQuote} <ArrowRight size={17} />
      </Link>

      <Link className="button button-secondary" to="/perinoflex/interactive-demo">
        {content.common.liveDemo} <ArrowRight size={17} />
      </Link>
    </>
  )}
/>

      <section className="section-block product-overview-section">
        <div className="site-container product-overview-layout">
          <ScrollReveal className="product-overview-copy">
            <p className="section-eyebrow">{content.home.heroEyebrow}</p>
            <h2>{content.home.perinoFlexTitle}</h2>
            <p>{content.home.heroDescription}</p>
          </ScrollReveal>
          <ScrollReveal className="product-overview-image" delay={80}>
            <img src="/assets/images/perino-flex-hero.png" alt="Perino-Flex adjustable needle guide" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="site-container">
          <SectionTitle eyebrow={perinoFlex.advantagesEyebrow} title={perinoFlex.advantagesTitle} description={perinoFlex.advantagesDescription} />
          <ProductAdvantages />
        </div>
      </section>

      <section className="section-block section-dark">
        <div className="site-container">
          <SectionTitle eyebrow={perinoFlex.videoEyebrow} title={perinoFlex.videoTitle} light />
          <ScrollReveal><ProductVideo /></ScrollReveal>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container">
          <SectionTitle eyebrow={perinoFlex.modelsEyebrow} title={perinoFlex.modelsTitle} description={perinoFlex.modelsDescription} />
          <ProductGrid />
        </div>
      </section>
      <section className="section-block section-soft">
        <div className="site-container">
          <SectionTitle eyebrow={perinoFlex.compatibilityEyebrow} title={perinoFlex.compatibilityTitle} description={perinoFlex.compatibilityDescription} />
          <ProductCompatibilityTable />
        </div>
      </section>

      <section className="section-block">
        <div className="site-container">
          <SectionTitle eyebrow={perinoFlex.resourcesEyebrow} title={perinoFlex.resourcesTitle} />
          <ProductResources />
        </div>
      </section>

      <section className="contact-callout">
        <div className="site-container contact-callout-layout">
          <div>
            <p className="section-eyebrow">{content.contact.eyebrow}</p>
            <h2>{content.contact.title}</h2>
            <p>{content.contact.description}</p>
          </div>
          <Link className="button button-primary" to="/contact">
            {content.common.requestQuote} <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
