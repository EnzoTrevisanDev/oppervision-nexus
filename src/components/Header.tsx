import { Menu } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/placeholder.svg" alt="Oppervision Logo" className="h-8 w-8"/>
            <a href="/"><span className="text-2xl font-bold text-primary">Oppervision</span></a>
          </div>
          
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-8">
              <a href="/about" className="text-primary hover:text-accent transition-colors">
                {t('nav.about')}
              </a>
              <a href="#services" className="text-primary hover:text-accent transition-colors">
                {t('nav.services')}
              </a>
              <a href="/contact" className="text-primary hover:text-accent transition-colors">
                {t('nav.contact')}
              </a>
              <a href="/portfolio" className="text-primary hover:text-accent transition-colors">
                {t('nav.portfolio')}
              </a>
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
              <a href="/about" className="text-primary hover:text-accent transition-colors">
                {t('nav.about')}
              </a>
              <a href="#services" className="text-primary hover:text-accent transition-colors">
                {t('nav.services')}
              </a>
              <a href="/contact" className="text-primary hover:text-accent transition-colors">
                {t('nav.contact')}
              </a>
              <a href="/portfolio" className="text-primary hover:text-accent transition-colors">
                {t('nav.portfolio')}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;