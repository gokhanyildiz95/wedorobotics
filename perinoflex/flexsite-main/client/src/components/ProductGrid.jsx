import {
  PERINO_FLEX_GTK133,
  PERINO_FLEX_GTK134,
  PERINO_FLEX_GTK152,
  PERINO_FLEX_GTK155
} from '../content/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  return (
    <div className="product-grid">
      <ProductCard product={PERINO_FLEX_GTK155} />
      <ProductCard product={PERINO_FLEX_GTK152} revealDelay={60} />
      <ProductCard product={PERINO_FLEX_GTK134} revealDelay={120} />
      <ProductCard product={PERINO_FLEX_GTK133} revealDelay={180} />
    </div>
  );
}
