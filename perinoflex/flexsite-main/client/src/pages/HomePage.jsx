import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductVideo from '../components/ProductVideo';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../context/LanguageContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function HomePage() {
  const { content } = useLanguage();
  const home = content.home;

  useDocumentMeta("Perino-Flex® · The Peri'ference of Professionals", home.metaDescription);

  return (
    <>
      <section className="home-hero">
        <div className="hero-rings" aria-hidden="true">
          <svg viewBox="0 0 800 800">
            <circle cx="400" cy="400" r="120" />
            <circle cx="400" cy="400" r="190" />
            <circle cx="400" cy="400" r="260" />
            <circle cx="400" cy="400" r="330" />
          </svg>
        </div>
        <div className="hero-glow" aria-hidden="true" />

        <div className="site-container hero-layout">
          <ScrollReveal className="hero-copy">
            <p className="hero-eyebrow"><span />{home.heroEyebrow}</p>
            <h1>{home.heroTitleStart} <em>{home.heroTitleHighlight}</em></h1>
            <p className="hero-slogan">{home.heroSlogan}</p>
            <p className="hero-description">{home.heroDescription}</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contact">
                {content.common.requestQuote} <ArrowRight size={17} />
              </Link>
              <Link className="button button-dark-outline" to="/perinoflex">
                {content.common.explorePerinoFlex}
              </Link>
            </div>
            <div className="manufacturer-row">
              <span>{home.manufacturerLabel}</span>
              <i />
              <img src="/assets/images/geotek-logo.png" alt="GEOTEK Healthcare Products" />
            </div>
          </ScrollReveal>

          <ScrollReveal className="hero-product hero-product-video" delay={100}>
            <ProductVideo showCaption={false} />
            <div className="hero-chip hero-chip-top"><span /> <strong>{home.angleLabel}</strong> · {home.heightLabel} · {home.distanceLabel}</div>
            <div className="hero-chip hero-chip-bottom"><span /> {home.techniqueLabel}</div>
          </ScrollReveal>
        </div>
      </section>

      <div className="compatible-systems-bar">
        <div className="site-container compatible-systems-layout">
          <strong>{home.compatibleSystemsLabel}</strong>
          <div className="compatible-system-list">
            <span>BK Medical</span><i />
            <span>GE</span><i />
            <span>Sonoscape</span><i />
            <span>Terason</span><i />
            <span>Esaote</span><i />
            <span>Hitachi</span>
          </div>
        </div>
      </div>

      <section className="section-block">
        <div className="site-container">
          <SectionTitle eyebrow={home.comparisonEyebrow} title={home.comparisonTitle} description={home.comparisonDescription} />

          <div className="comparison-grid">
            <ScrollReveal className="comparison-card">
  <p className="comparison-tag">{home.traditionalTag}</p>
  <h3>{home.traditionalTitle}</h3>

  <div className="cmp-diagram" aria-hidden="true">
    <svg viewBox="0 0 320 158" width="100%" height="100%">
      <g transform="translate(49, 0)">
        <rect
          x="36"
          y="34"
          width="150"
          height="90"
          rx="6"
          fill="none"
          stroke="#9AA6A0"
          strokeWidth="2"
        />

        <g fill="#9AA6A0">
          <circle cx="60" cy="58" r="3" />
          <circle cx="86" cy="58" r="3" />
          <circle cx="112" cy="58" r="3" />
          <circle cx="138" cy="58" r="3" />
          <circle cx="162" cy="58" r="3" />

          <circle cx="60" cy="80" r="3" />
          <circle cx="86" cy="80" r="3" />
          <circle cx="112" cy="80" r="3" />
          <circle cx="138" cy="80" r="3" />
          <circle cx="162" cy="80" r="3" />

          <circle cx="60" cy="102" r="3" />
          <circle cx="86" cy="102" r="3" />
          <circle cx="112" cy="102" r="3" />
          <circle cx="138" cy="102" r="3" />
          <circle cx="162" cy="102" r="3" />
        </g>
      </g>
    </svg>
  </div>

  <ul className="comparison-list">
    <li><XCircle /><span>{home.traditionalPointOne}</span></li>
    <li><XCircle /><span>{home.traditionalPointTwo}</span></li>
    <li><XCircle /><span>{home.traditionalPointThree}</span></li>
    <li><XCircle /><span>{home.traditionalPointFour}</span></li>
  </ul>
</ScrollReveal>

            <ScrollReveal className="comparison-card comparison-card-highlight" delay={80}>
              <p className="comparison-tag">{home.perinoFlexTag}</p>
              <h3>{home.perinoFlexTitle}</h3>
<div className="cmp-diagram" aria-hidden="true">
  <svg viewBox="0 0 320 158" width="100%" height="100%">
    <circle
      cx="64"
      cy="79"
      r="14"
      fill="none"
      stroke="#8BE585"
      strokeWidth="2.4"
    />

    <line
      x1="78"
      y1="79"
      x2="296"
      y2="30"
      stroke="#8BE585"
      strokeWidth="2"
      strokeDasharray="6 5"
    />

    <line
      x1="78"
      y1="79"
      x2="300"
      y2="60"
      stroke="#8BE585"
      strokeWidth="2"
      strokeDasharray="6 5"
    />

    <line
      x1="78"
      y1="79"
      x2="300"
      y2="98"
      stroke="#8BE585"
      strokeWidth="2"
      strokeDasharray="6 5"
    />

    <line
      x1="78"
      y1="79"
      x2="296"
      y2="128"
      stroke="#8BE585"
      strokeWidth="2"
      strokeDasharray="6 5"
    />

    <path
      d="M150 57 A 92 92 0 0 1 150 101"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.3"
      opacity="0.8"
    />

    <text
      x="158"
      y="83"
      fontFamily="IBM Plex Mono"
      fontSize="12"
      fill="#ffffff"
    >
      β
    </text>
  </svg>
</div>              <ul className="comparison-list">
                <li><CheckCircle2 /><span>{home.perinoFlexPointOne}</span></li>
                <li><CheckCircle2 /><span>{home.perinoFlexPointTwo}</span></li>
                <li><CheckCircle2 /><span>{home.perinoFlexPointThree}</span></li>
                <li><CheckCircle2 /><span>{home.perinoFlexPointFour}</span></li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="site-container product-teaser-layout">
          <ScrollReveal className="product-teaser-copy">
            <p className="section-eyebrow">{home.closingEyebrow}</p>
            <h2>{home.closingTitle}</h2>
            <p>{home.closingDescription}</p>
            <Link className="button button-primary" to="/perinoflex">
              {content.common.explorePerinoFlex} <ArrowRight size={17} />
            </Link>
          </ScrollReveal>
          <ScrollReveal className="product-teaser-image" delay={80}>
            <img src="/assets/images/perino-flex-hero.png" alt="Perino-Flex" loading="lazy" />
          </ScrollReveal>
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
            {content.common.contactUs} <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
