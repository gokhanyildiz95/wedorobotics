import { Outlet } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import RouteScrollTop from './RouteScrollTop';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export default function SiteLayout() {
  const { content } = useLanguage();

  return (
    <>
      <RouteScrollTop />
      <a className="skip-link" href="#main-content">
        {content.common.skipToContent}
      </a>
      <SiteHeader />
      <main id="main-content">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
