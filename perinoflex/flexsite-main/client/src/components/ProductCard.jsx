import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function ProductCard({ product, revealDelay = 0 }) {
  const { content } = useLanguage();

  return (
    <ScrollReveal className="product-card" delay={revealDelay}>
      <Link to={`/perinoflex/${product.slug}`} className="product-card-link">
        <div className="product-card-image">
          <span className="product-reference-badge">{product.referenceCode}</span>
          <img src={product.productImage} alt={product.productName} loading="lazy" decoding="async" />
        </div>
        <div className="product-card-content">
          <p className="product-system-name">{product.cardSystemName}</p>
          <h3>{product.productName}</h3>
          <p className="product-transducer-name">{product.compatibleTransducers}</p>
          <span className="product-card-action">
            {content.common.viewDetails} <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </ScrollReveal>
  );
}
