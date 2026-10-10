import { ArrowLeft, ArrowRight, CheckCircle2, Crosshair, Grid2X2, SlidersHorizontal, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NEEDLE_COMPATIBILITY } from '../content/products';
import { useLanguage } from '../context/LanguageContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';

function CompatibilityCard({ label, value }) {
  return (
    <ScrollReveal className="compatibility-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </ScrollReveal>
  );
}

function SharedFeatureCard({ Icon, title, description, delay = 0 }) {
  return (
    <ScrollReveal className="shared-feature-card" delay={delay}>
      <div className="shared-feature-icon"><Icon /></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <CheckCircle2 className="shared-feature-check" />
    </ScrollReveal>
  );
}

export default function ProductDetailPage({ product }) {
  const { language, content } = useLanguage();
  const productDetail = content.productDetail;
  const pageDescription = language === 'tr'
    ? `${product.productName}; ${product.compatibilitySystemName} sistemi için ${product.compatibleTransducers} transduser uyumluluğuna sahip Perino-Flex referansıdır.`
    : `${product.productName} is the Perino-Flex reference for ${product.compatibilitySystemName} with ${product.compatibleTransducers} transducer compatibility.`;

  useDocumentMeta(`${product.productName} · Perino-Flex`, pageDescription);

  const contactPrefill = encodeURIComponent(`${product.compatibilitySystemName} / ${product.compatibleTransducers}`);

  return (
    <>
      <section className="product-detail-hero">
        <div className="site-container product-detail-layout">
          <ScrollReveal className="product-detail-copy">
            <Link className="back-link" to="/perinoflex">
              <ArrowLeft size={16} /> {content.common.backToPerinoFlex}
            </Link>
            <p className="section-eyebrow">{productDetail.eyebrow}</p>
            <span className="product-detail-reference">{product.referenceCode}</span>
            <h1>{product.productName}</h1>
            <p>{pageDescription}</p>
            <Link className="button button-primary" to={`/contact?system=${contactPrefill}`}>
              {productDetail.requestModel} <ArrowRight size={17} />
            </Link>
          </ScrollReveal>

          <ScrollReveal className="product-detail-image-card" delay={80}>
            <img src={product.productImage} alt={product.productName} />
            <span>{product.referenceCode}</span>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="site-container">
          <SectionTitle eyebrow={productDetail.compatibilityTitle} title={product.productName} />
          <div className="compatibility-card-grid">
            <CompatibilityCard label={productDetail.systemLabel} value={product.compatibilitySystemName} />
            <CompatibilityCard label={productDetail.transducerLabel} value={product.compatibleTransducers} />
            <CompatibilityCard label={productDetail.coaxialLabel} value={NEEDLE_COMPATIBILITY.coaxialNeedles} />
            <CompatibilityCard label={productDetail.biopsyLabel} value={NEEDLE_COMPATIBILITY.biopsyNeedles} />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container">
          <SectionTitle eyebrow={productDetail.sharedFeaturesEyebrow} title={productDetail.sharedFeaturesTitle} description={productDetail.sharedFeaturesDescription} />
          <div className="shared-feature-grid">
            <SharedFeatureCard Icon={SlidersHorizontal} title={productDetail.featureOneTitle} description={productDetail.featureOneText} />
            <SharedFeatureCard Icon={Crosshair} title={productDetail.featureTwoTitle} description={productDetail.featureTwoText} delay={60} />
            <SharedFeatureCard Icon={Grid2X2} title={productDetail.featureThreeTitle} description={productDetail.featureThreeText} delay={120} />
            <SharedFeatureCard Icon={Workflow} title={productDetail.featureFourTitle} description={productDetail.featureFourText} delay={180} />
          </div>
          <div className="centered-action">
            <Link className="button button-primary" to={`/contact?system=${contactPrefill}`}>
              {productDetail.requestModel} <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
