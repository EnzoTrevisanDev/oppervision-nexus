import React, { createContext, useContext, useState, ReactNode } from "react";

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const translations = {
  'en': {
    'meta.title': 'Oppervision - IT Infrastructure & Automation Solutions',
    'meta.description': 'Expert IT consulting, infrastructure automation, and monitoring solutions for businesses of all sizes.',
    
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.portfolio': 'Portfolio',
    
    // Home Page
    'home.hero.title': 'IT Consulting & Automation',
    'home.hero.subtitle': 'We simplify your infrastructure with scalable solutions and intelligent monitoring',
    'home.cta.meeting': 'Schedule a Free Meeting',
    'home.cta.portfolio': 'Explore Our Portfolio',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Tailored solutions using cutting-edge technologies',
    'services.monitoring.title': 'Monitoring Automation',
    'services.monitoring.description': 'Implementation of Zabbix, Prometheus and Grafana for proactive monitoring.',
    'services.kubernetes.title': 'Kubernetes Infrastructure',
    'services.kubernetes.description': 'Container orchestration for greater scalability and efficiency.',
    'services.cloud.title': 'Cloud Computing Solutions',
    'services.cloud.description': 'Configuration and optimization of AWS, Azure and GCP environments.',
    'services.consulting.title': 'Custom Consulting',
    'services.consulting.description': 'Diagnosis and planning for IT infrastructure improvement.',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.1.name': 'John Smith',
    'testimonials.1.role': 'CTO, TechCorp',
    'testimonials.1.content': 'Oppervision completely transformed our IT infrastructure. Efficiency increased by 200% since we started working together.',
    'testimonials.2.name': 'Sarah Johnson',
    'testimonials.2.role': 'Operations Director, InnovaTech',
    'testimonials.2.content': 'Excellent support and customized solutions that really meet our business needs.',
    'testimonials.3.name': 'Michael Brown',
    'testimonials.3.role': 'CEO, StartupX',
    'testimonials.3.content': 'The team expertise in cloud computing helped us scale our services safely and efficiently.',

    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Choose a package that fits your needs',
    'pricing.basicmonitoring.title': 'Basic Monitoring',
    'pricing.advancedinfrastructure.title': 'Advanced Infrastructure',
    'pricing.enterprisesolutions.title': 'Enterprise Solutions',
    'pricing.cta.start': 'Get Started',
    'pricing.cta.contact': 'Contact Us',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Transforming IT environments into strategic assets',
    'about.mission.title': 'Mission',
    'about.mission.text': 'Simplify IT infrastructure with customized and efficient solutions.',
    'about.vision.title': 'Vision',
    'about.vision.text': 'To be a global reference in IT consulting and automation.',
    'about.values.title': 'Values',
    'about.values.text': 'Commitment, innovation, transparency and results-focused.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to transform your IT? Get in touch with us.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone (optional)',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.success': 'Your message has been sent successfully!',
    
    // Portfolio
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'See how we have helped businesses transform their IT infrastructure',
    'portfolio.viewProject': 'View Project',
    'portfolio.cta': 'Want to see your project here?',

  },
  'pt-BR': {
    'meta.title': 'Oppervision - Soluções em Infraestrutura de TI e Automação',
    'meta.description': 'Consultoria especializada em TI, automação de infraestrutura e soluções de monitoramento para empresas.',
    
    // Navigation
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',
    'nav.portfolio': 'Portfólio',
    
    // Home Page
    'home.hero.title': 'Consultoria em TI e Automação',
    'home.hero.subtitle': 'Simplificamos sua infraestrutura com soluções escaláveis e monitoramento inteligente',
    'home.cta.meeting': 'Agende uma Reunião Gratuita',
    'home.cta.portfolio': 'Explore Nosso Portfólio',
    
    // Services
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Soluções personalizadas usando tecnologias de ponta',
    'services.monitoring.title': 'Automação de Monitoramento',
    'services.monitoring.description': 'Implementação de Zabbix, Prometheus e Grafana para monitoramento proativo.',
    'services.kubernetes.title': 'Infraestrutura Kubernetes',
    'services.kubernetes.description': 'Orquestração de containers para maior escalabilidade e eficiência.',
    'services.cloud.title': 'Soluções em Cloud Computing',
    'services.cloud.description': 'Configuração e otimização de ambientes AWS, Azure e GCP.',
    'services.consulting.title': 'Consultoria Personalizada',
    'services.consulting.description': 'Diagnóstico e planejamento para melhoria da infraestrutura de TI.',
    
    // Testimonials
    'testimonials.title': 'O Que Nossos Clientes Dizem',
    'testimonials.1.name': 'João Silva',
    'testimonials.1.role': 'CTO, TechCorp',
    'testimonials.1.content': 'A Oppervision transformou completamente nossa infraestrutura de TI. A eficiência aumentou em 200% desde que começamos a trabalhar juntos.',
    'testimonials.2.name': 'Maria Santos',
    'testimonials.2.role': 'Diretora de Operações, InnovaTech',
    'testimonials.2.content': 'Excelente suporte e soluções personalizadas que realmente atendem às necessidades do nosso negócio.',
    'testimonials.3.name': 'Pedro Oliveira',
    'testimonials.3.role': 'CEO, StartupBR',
    'testimonials.3.content': 'A expertise da equipe em cloud computing nos ajudou a escalar nossos serviços de forma segura e eficiente.',

    'pricing.title': 'Preços',
    'pricing.subtitle': 'Escolha um pacote que atenda às suas necessidades',
    'pricing.basicmonitoring.title': 'Monitoramento Básico',
    'pricing.advancedinfrastructure.title': 'Infraestrutura Avançada',
    'pricing.enterprisesolutions.title': 'Soluções Empresariais',
    'pricing.cta.start': 'Começar',
    'pricing.cta.contact': 'Entre em Contato',
    
    // About
    'about.title': 'Sobre Nós',
    'about.subtitle': 'Transformando ambientes de TI em ativos estratégicos',
    'about.mission.title': 'Missão',
    'about.mission.text': 'Simplificar a infraestrutura de TI com soluções personalizadas e eficientes.',
    'about.vision.title': 'Visão',
    'about.vision.text': 'Ser referência global em consultoria de TI e automação.',
    'about.values.title': 'Valores',
    'about.values.text': 'Comprometimento, inovação, transparência e foco em resultados.',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Pronto para transformar sua TI? Fale conosco.',
    'contact.form.name': 'Nome Completo',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Telefone (opcional)',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar Mensagem',
    'contact.success': 'Sua mensagem foi enviada com sucesso!',
    
    // Portfolio
    'portfolio.title': 'Nosso Portfólio',
    'portfolio.subtitle': 'Veja como ajudamos empresas a transformar sua infraestrutura de TI',
    'portfolio.viewProject': 'Ver Projeto',
    'portfolio.cta': 'Quer ver seu projeto aqui?',
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
