import React, { createContext, useContext, useState, ReactNode } from "react";

const LanguageContext = createContext({
  language: 'en',
  setLanguage: (lang: string) => {}
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

const translations = {
  'en': {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.portfolio': 'Portfolio',
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Choose a package that fits your needs',
    'pricing.cta.start': 'Get Started',
    'pricing.cta.contact': 'Contact Us',
    'contact.success': 'Your message has been sent successfully!',
    'portfolio.title': 'Our Portfolio',
    'portfolio.viewProject': 'View Project',
  },
  'pt-BR': {
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',
    'nav.portfolio': 'Portfólio',
    'pricing.title': 'Preços',
    'pricing.subtitle': 'Escolha um pacote que atenda às suas necessidades',
    'pricing.cta.start': 'Começar',
    'pricing.cta.contact': 'Entre em Contato',
    'contact.success': 'Sua mensagem foi enviada com sucesso!',
    'portfolio.title': 'Nosso Portfólio',
    'portfolio.viewProject': 'Ver Projeto',
  }
};

export const getTranslation = (key: string, lang: string) => {
  return translations[lang][key] || key;
};
