import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  PERINO_FLEX_GTK133,
  PERINO_FLEX_GTK134,
  PERINO_FLEX_GTK152,
  PERINO_FLEX_GTK155
} from '../content/products';
import ScrollReveal from './ScrollReveal';

function CompatibilityRow({ product }) {
  const { content } = useLanguage();

  return (
    <tr>
      <td data-label={content.perinoFlex.referenceColumn}>
        <Link className="table-product-link" to={`/perinoflex/${product.slug}`}>
          {product.referenceCode}
        </Link>
      </td>
      <td data-label={content.perinoFlex.systemColumn}>{product.compatibilitySystemName}</td>
      <td data-label={content.perinoFlex.transducerColumn}>{product.compatibleTransducers}</td>
    </tr>
  );
}

export default function ProductCompatibilityTable() {
  const { content } = useLanguage();

  return (
    <>
      <ScrollReveal className="compatibility-table-wrapper">
        <table className="compatibility-table">
          <caption className="sr-only">{content.perinoFlex.compatibilityTitle}</caption>
          <thead>
            <tr>
              <th scope="col">{content.perinoFlex.referenceColumn}</th>
              <th scope="col">{content.perinoFlex.systemColumn}</th>
              <th scope="col">{content.perinoFlex.transducerColumn}</th>
            </tr>
          </thead>
          <tbody>
            <CompatibilityRow product={PERINO_FLEX_GTK155} />
            <CompatibilityRow product={PERINO_FLEX_GTK152} />
            <CompatibilityRow product={PERINO_FLEX_GTK134} />
            <CompatibilityRow product={PERINO_FLEX_GTK133} />
          </tbody>
        </table>
      </ScrollReveal>
      <p className="needle-compatibility-note">
        {content.perinoFlex.compatibilityDescription}
      </p>
    </>
  );
}
