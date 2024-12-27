import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'pt-BR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  'en': {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.portfolio': 'Portfolio',
    'hero.title': 'IT Consulting and Automation',
    'hero.subtitle': 'We simplify your infrastructure with scalable solutions and intelligent monitoring',
    'hero.cta.meeting': 'Schedule a Free Meeting',
    'hero.cta.portfolio': 'Explore Our Portfolio',
    'pricing.title': 'Our Solutions',
    'pricing.subtitle': 'Choose the perfect plan for your business needs',
    'pricing.basic.title': 'Basic Monitoring',
    'pricing.advanced.title': 'Advanced Infrastructure',
    'pricing.enterprise.title': 'Enterprise Solutions',
    'pricing.cta.contact': 'Contact Sales',
    'pricing.cta.start': 'Request Quote',
    'contact.success': 'Thank you! Our team will contact you shortly.',
    'portfolio.title': 'Our Portfolio'
  },
  'pt-BR': {
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',
    'nav.portfolio': 'Portfólio',
    'hero.title': 'Consultoria e Automação em TI',
    'hero.subtitle': 'Simplificamos sua infraestrutura com soluções escaláveis e monitoramento inteligente',
    'hero.cta.meeting': 'Agende uma Reunião Gratuita',
    'hero.cta.portfolio': 'Explore Nosso Portfólio',
    'pricing.title': 'Nossas Soluções',
    'pricing.subtitle': 'Escolha o plano perfeito para sua empresa',
    'pricing.basic.title': 'Monitoramento Básico',
    'pricing.advanced.title': 'Infraestrutura Avançada',
    'pricing.enterprise.title': 'Soluções Empresariais',
    'pricing.cta.contact': 'Fale com Vendas',
    'pricing.cta.start': 'Solicitar Orçamento',
    'contact.success': 'Obrigado! Nossa equipe entrará em contato em breve.',
    'portfolio.title': 'Nosso Portfólio'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};