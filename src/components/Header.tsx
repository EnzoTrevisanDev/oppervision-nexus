import { Menu } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-white border-b border-gray-100 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <img 
              src="/lovable-uploads/ae0c9ab8-14e8-47d7-abff-65cdffa50371.png" 
              alt="Oppervision Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Oppervision
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-accent font-medium transition-colors"
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/services" 
                className="text-gray-600 hover:text-accent font-medium transition-colors"
              >
                {t('nav.services')}
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-accent font-medium transition-colors"
              >
                {t('nav.contact')}
              </Link>
              <Link 
                to="/portfolio" 
                className="text-gray-600 hover:text-accent font-medium transition-colors"
              >
                {t('nav.portfolio')}
              </Link>
            </nav>
            
            <LanguageSwitcher />
            
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t mt-3">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-accent font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/services" 
                className="text-gray-600 hover:text-accent font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-accent font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <Link 
                to="/portfolio" 
                className="text-gray-600 hover:text-accent font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
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