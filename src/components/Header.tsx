import { Menu } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/ae0c9ab8-14e8-47d7-abff-65cdffa50371.png" 
                alt="Oppervision Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-2xl font-bold text-primary">Oppervision</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-8">
              <Link to="/about" className="text-primary hover:text-accent transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/services" className="text-primary hover:text-accent transition-colors">
                {t('nav.services')}
              </Link>
              <Link to="/contact" className="text-primary hover:text-accent transition-colors">
                {t('nav.contact')}
              </Link>
              <Link to="/portfolio" className="text-primary hover:text-accent transition-colors">
                {t('nav.portfolio')}
              </Link>
            </nav>
            
            <LanguageSwitcher />
            
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <Link to="/about" className="text-primary hover:text-accent transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/services" className="text-primary hover:text-accent transition-colors">
                {t('nav.services')}
              </Link>
              <Link to="/contact" className="text-primary hover:text-accent transition-colors">
                {t('nav.contact')}
              </Link>
              <Link to="/portfolio" className="text-primary hover:text-accent transition-colors">
                {t('nav.portfolio')}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;