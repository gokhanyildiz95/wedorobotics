import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import {
  PERINO_FLEX_GTK133,
  PERINO_FLEX_GTK134,
  PERINO_FLEX_GTK152,
  PERINO_FLEX_GTK155
} from './content/products';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PerinoFlexPage from './pages/PerinoFlexPage';
import ProductDetailPage from './pages/ProductDetailPage';
import InteractiveDemoPage from './pages/InteractiveDemoPage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="perinoflex" element={<PerinoFlexPage />} />
        <Route path="perinoflex/gtk155" element={<ProductDetailPage product={PERINO_FLEX_GTK155} />} />
        <Route path="perinoflex/gtk152" element={<ProductDetailPage product={PERINO_FLEX_GTK152} />} />
        <Route path="perinoflex/gtk134" element={<ProductDetailPage product={PERINO_FLEX_GTK134} />} />
        <Route path="perinoflex/gtk133" element={<ProductDetailPage product={PERINO_FLEX_GTK133} />} />
        <Route path="contact" element={<ContactPage />} />
        <Route
          path="perinoflex/interactive-demo/*"
          element={<InteractiveDemoPage />}
        />
        <Route path="products" element={<Navigate to="/perinoflex" replace />} />
        <Route path="products/*" element={<Navigate to="/perinoflex" replace />} />
        <Route path="compatibility" element={<Navigate to="/perinoflex" replace />} />
        <Route path="resources" element={<Navigate to="/perinoflex" replace />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}
