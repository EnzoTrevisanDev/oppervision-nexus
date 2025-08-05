
import { useLanguage } from "@/contexts/LanguageContext";
import NavigationLink from "./NavigationLink";

const DesktopNavigation = () => {
  const { t } = useLanguage();
  
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <NavigationLink to="/about">{t('nav.about')}</NavigationLink>
      <NavigationLink to="/services">{t('nav.services')}</NavigationLink>
      <NavigationLink to="/blog">{t('nav.blog')}</NavigationLink>
      <NavigationLink to="/contact">{t('nav.contact')}</NavigationLink>
      <NavigationLink to="/portfolio">{t('nav.portfolio')}</NavigationLink>
    </nav>
  );
};

export default DesktopNavigation;
