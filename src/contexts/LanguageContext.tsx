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
    'services.subtitle': 'Oppervision offers tailored solutions using cutting-edge technologies',
    'services.monitoring.title': 'Monitoring Automation',
    'services.monitoring.description': 'Implementation and configuration of tools such as Zabbix, Prometheus and Grafana.',
    'services.monitoring.benefits.1': 'Rapid problem identification',
    'services.monitoring.benefits.2': 'Reduced downtime',
    'services.monitoring.benefits.3': 'Visual and actionable data',
    'services.kubernetes.title': 'Kubernetes Infrastructure',
    'services.kubernetes.description': 'Container orchestration with Kubernetes for scalability and efficiency.',
    'services.kubernetes.benefits.1': 'Automated deployment',
    'services.kubernetes.benefits.2': 'High availability',
    'services.kubernetes.benefits.3': 'Reduced operational costs',
    'services.cloud.title': 'Cloud Computing Solutions',
    'services.cloud.description': 'Configuration and optimization of environments in AWS, Azure and GCP.',
    'services.cloud.benefits.1': 'Cost reduction',
    'services.cloud.benefits.2': 'Scalability and flexibility',
    'services.cloud.benefits.3': 'Enhanced security',
    'services.consulting.title': 'Customized Consulting',
    'services.consulting.description': 'Detailed analysis of your company\'s needs with tailored solutions.',
    'services.consulting.benefits.1': 'Complete infrastructure diagnosis',
    'services.consulting.benefits.2': 'Tailored solutions',
    'services.consulting.benefits.3': 'Ongoing technical support',
    'services.cta.title': 'Need customized solutions?',
    'services.cta.button': 'Contact Us Now',

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
    'about.description': 'Oppervision is a consulting company specialized in information technology and automation, dedicated to offering intelligent and scalable solutions for companies of all sizes.',
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
    'contact.form.submitting': 'Sending...',
    'contact.success.title': 'Message Sent!',
    'contact.success.description': 'Thank you for contacting us! We will respond as soon as possible.',
    
    // Portfolio
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'See how we have helped businesses transform their IT infrastructure',
    'portfolio.viewProject': 'View Project',
    'portfolio.cta': 'Want to see your project here?',
    'portfolio.cta.button': 'Get in Touch',
    'portfolio.categories.monitoring': 'Monitoring Automation',
    'portfolio.categories.cloud': 'Cloud Computing',
    'portfolio.categories.kubernetes': 'Kubernetes Infrastructure',
    'portfolio.impact': 'Impact',
    'portfolio.projects.startupbr.title': 'StartupBR Monitoring Implementation',
    'portfolio.projects.startupbr.description': 'Zabbix and Grafana implementation, reducing false alerts by 30%',
    'portfolio.projects.startupbr.impact': '30% reduction in false alerts',
    'portfolio.projects.startupbr.testimonial.content': 'The monitoring solution implemented by Oppervision has significantly improved our operational efficiency.',
    'portfolio.projects.startupbr.testimonial.author': 'John Doe',
    'portfolio.projects.startupbr.testimonial.role': 'CTO, StartupBR',
    'portfolio.projects.techcorp.title': 'TechCorp AWS Migration',
    'portfolio.projects.techcorp.description': 'Complete AWS infrastructure setup and migration',
    'portfolio.projects.techcorp.impact': '40% reduction in infrastructure costs',
    'portfolio.projects.techcorp.testimonial.content': "Oppervision's expertise in AWS helped us achieve substantial cost savings while improving performance.",
    'portfolio.projects.techcorp.testimonial.author': 'Jane Smith',
    'portfolio.projects.techcorp.testimonial.role': 'IT Director, TechCorp',
    'portfolio.projects.innovatech.title': 'InnovaTech API Scaling',
    'portfolio.projects.innovatech.description': 'Development of an API in a Kubernetes environment',
    'portfolio.projects.innovatech.impact': '200% improvement in scalability',
    'portfolio.projects.innovatech.testimonial.content': 'The Kubernetes implementation has transformed how we handle our services scaling.',
    'portfolio.projects.innovatech.testimonial.author': 'Mike Johnson',
    'portfolio.projects.innovatech.testimonial.role': 'Lead Developer, InnovaTech',
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
    'services.subtitle': 'A Oppervision oferece soluções personalizadas usando tecnologias de ponta',
    'services.monitoring.title': 'Automação de Monitoramento',
    'services.monitoring.description': 'Implementação e configuração de ferramentas como Zabbix, Prometheus e Grafana.',
    'services.monitoring.benefits.1': 'Identificação rápida de problemas',
    'services.monitoring.benefits.2': 'Redução de tempo de inatividade',
    'services.monitoring.benefits.3': 'Dados visuais e acionáveis',
    'services.kubernetes.title': 'Infraestrutura Kubernetes',
    'services.kubernetes.description': 'Orquestração de containers com Kubernetes para escalabilidade e eficiência.',
    'services.kubernetes.benefits.1': 'Implantação automatizada',
    'services.kubernetes.benefits.2': 'Alta disponibilidade',
    'services.kubernetes.benefits.3': 'Custos operacionais reduzidos',
    'services.cloud.title': 'Soluções em Cloud Computing',
    'services.cloud.description': 'Configuração e otimização de ambientes em AWS, Azure e GCP.',
    'services.cloud.benefits.1': 'Redução de custos',
    'services.cloud.benefits.2': 'Escalabilidade e flexibilidade',
    'services.cloud.benefits.3': 'Segurança aprimorada',
    'services.consulting.title': 'Consultoria Personalizada',
    'services.consulting.description': 'Análise detalhada das necessidades da sua empresa com soluções sob medida.',
    'services.consulting.benefits.1': 'Diagnóstico completo da infraestrutura',
    'services.consulting.benefits.2': 'Soluções sob medida',
    'services.consulting.benefits.3': 'Suporte técnico contínuo',
    'services.cta.title': 'Precisa de soluções personalizadas?',
    'services.cta.button': 'Entre em Contato Agora',

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
    'about.description': 'A Oppervision é uma empresa de consultoria especializada em tecnologia da informação e automação, dedicada a oferecer soluções inteligentes e escaláveis para empresas de todos os portes.',
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
    'contact.form.submitting': 'Enviando...',
    'contact.success.title': 'Mensagem Enviada!',
    'contact.success.description': 'Obrigado por entrar em contato! Responderemos o mais breve possível.',
    
    // Portfolio
    'portfolio.title': 'Nosso Portfólio',
    'portfolio.subtitle': 'Veja como ajudamos empresas a transformar sua infraestrutura de TI',
    'portfolio.viewProject': 'Ver Projeto',
    'portfolio.cta': 'Quer ver seu projeto aqui?',
    'portfolio.cta.button': 'Entre em Contato',
    'portfolio.categories.monitoring': 'Automação de Monitoramento',
    'portfolio.categories.cloud': 'Computação em Nuvem',
    'portfolio.categories.kubernetes': 'Infraestrutura Kubernetes',
    'portfolio.impact': 'Impacto',
    'portfolio.projects.startupbr.title': 'Implementação de Monitoramento StartupBR',
    'portfolio.projects.startupbr.description': 'Implementação de Zabbix e Grafana, reduzindo alertas falsos em 30%',
    'portfolio.projects.startupbr.impact': '30% de redução em alertas falsos',
    'portfolio.projects.startupbr.testimonial.content': 'A solução de monitoramento implementada pela Oppervision melhorou significativamente nossa eficiência operacional.',
    'portfolio.projects.startupbr.testimonial.author': 'João Silva',
    'portfolio.projects.startupbr.testimonial.role': 'CTO, StartupBR',
    'portfolio.projects.techcorp.title': 'Migração AWS TechCorp',
    'portfolio.projects.techcorp.description': 'Configuração completa e migração de infraestrutura AWS',
    'portfolio.projects.techcorp.impact': '40% de redução nos custos de infraestrutura',
    'portfolio.projects.techcorp.testimonial.content': 'A expertise da Oppervision em AWS nos ajudou a alcançar economias substanciais enquanto melhoramos o desempenho.',
    'portfolio.projects.techcorp.testimonial.author': 'Maria Santos',
    'portfolio.projects.techcorp.testimonial.role': 'Diretora de TI, TechCorp',
    'portfolio.projects.innovatech.title': 'Escalabilidade de API InnovaTech',
    'portfolio.projects.innovatech.description': 'Desenvolvimento de API em ambiente Kubernetes',
    'portfolio.projects.innovatech.impact': '200% de melhoria na escalabilidade',
    'portfolio.projects.innovatech.testimonial.content': 'A implementação do Kubernetes transformou a forma como lidamos com a escalabilidade de nossos serviços.',
    'portfolio.projects.innovatech.testimonial.author': 'Pedro Oliveira',
    'portfolio.projects.innovatech.testimonial.role': 'Desenvolvedor Líder, InnovaTech',
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
