import { Menu } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./header/Logo";
import DesktopNavigation from "./header/DesktopNavigation";
import MobileNavigation from "./header/MobileNavigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#213347] border-b border-white/10 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="flex items-center gap-6">
            <DesktopNavigation />
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

        <MobileNavigation 
          isOpen={isMenuOpen} 
          onLinkClick={() => setIsMenuOpen(false)} 
        />
      </div>
    </header>
  );
};

export default Header;