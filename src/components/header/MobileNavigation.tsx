
import { useLanguage } from "@/contexts/LanguageContext";
import NavigationLink from "./NavigationLink";

interface MobileNavigationProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

const MobileNavigation = ({ isOpen, onLinkClick }: MobileNavigationProps) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <nav className="md:hidden py-4 border-t border-white/10 mt-3">
      <div className="flex flex-col space-y-4">
        <NavigationLink to="/about" onClick={onLinkClick}>
          {t('nav.about')}
        </NavigationLink>
        <NavigationLink to="/services" onClick={onLinkClick}>
          {t('nav.services')}
        </NavigationLink>
        <NavigationLink to="/blog" onClick={onLinkClick}>
          {t('nav.blog')}
        </NavigationLink>
        <NavigationLink to="/contact" onClick={onLinkClick}>
          {t('nav.contact')}
        </NavigationLink>
        <NavigationLink to="/portfolio" onClick={onLinkClick}>
          {t('nav.portfolio')}
        </NavigationLink>
      </div>
    </nav>
  );
};

export default MobileNavigation;
