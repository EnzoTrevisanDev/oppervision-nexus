import React, { createContext, useContext, useState, ReactNode } from "react";

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const translations = {
  'en': {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.portfolio': 'Portfolio',
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Choose a package that fits your needs',
    'pricing.basicmonitoring.title': 'Basic Monitoring',
    'pricing.advancedinfrastructure.title': 'Advanced Infrastructure',
    'pricing.enterprisesolutions.title': 'Enterprise Solutions',
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
    'pricing.basicmonitoring.title': 'Monitoramento Básico',
    'pricing.advancedinfrastructure.title': 'Infraestrutura Avançada',
    'pricing.enterprisesolutions.title': 'Soluções Empresariais',
    'pricing.cta.start': 'Começar',
    'pricing.cta.contact': 'Entre em Contato',
    'contact.success': 'Sua mensagem foi enviada com sucesso!',
    'portfolio.title': 'Nosso Portfólio',
    'portfolio.viewProject': 'Ver Projeto',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};