import { Menu } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-[#213347] border-b border-white/10 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <img 
              src="/lovable-uploads/ae0c9ab8-14e8-47d7-abff-65cdffa50371.png" 
              alt="Oppervision Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold text-white">
              Oppervision
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/about" 
                className="text-white/80 hover:text-white font-medium transition-colors"
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/services" 
                className="text-white/80 hover:text-white font-medium transition-colors"
              >
                {t('nav.services')}
              </Link>
              <Link 
                to="/contact" 
                className="text-white/80 hover:text-white font-medium transition-colors"
              >
                {t('nav.contact')}
              </Link>
              <Link 
                to="/portfolio" 
                className="text-white/80 hover:text-white font-medium transition-colors"
              >
                {t('nav.portfolio')}
              </Link>
            </nav>
            
            <LanguageSwitcher />
            
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10 mt-3">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/about" 
                className="text-white/80 hover:text-white font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/services" 
                className="text-white/80 hover:text-white font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link 
                to="/contact" 
                className="text-white/80 hover:text-white font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <Link 
                to="/portfolio" 
                className="text-white/80 hover:text-white font-medium transition-colors px-2 py-1"
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