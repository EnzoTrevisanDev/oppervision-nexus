
import { motion } from "framer-motion";
import { Server, FileCode, Network, Briefcase, BarChart } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TargetAudiences from "../components/TargetAudiences";
import TechnologyShowcase from "../components/TechnologyShowcase";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const services = [
    {
      icon: <Server className="w-6 h-6" />,
      title: t('services.monitoring.title'),
      description: t('services.monitoring.description')
    },
    {
      icon: <FileCode className="w-6 h-6" />,
      title: t('services.automation.title'),
      description: t('services.automation.description')
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: t('services.infrastructure.title'),
      description: t('services.infrastructure.description')
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: t('services.projects.title'),
      description: t('services.projects.description')
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: t('services.dashboards.title'),
      description: t('services.dashboards.description')
    }
  ];

  const handleLinkedInMessage = () => {
    window.open('https://www.linkedin.com/messaging/compose/?recipient=oppervision-consulting-50748b337', '_blank');
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-[#2A3444] pt-32 pb-20 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleLinkedInMessage} className="bg-accent hover:bg-accent/90">
                {t('home.cta.linkedin')}
              </Button>
              <Button
                onClick={() => navigate("/diagnostic")}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                {t('services.cta.button')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">{t('services.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences Section */}
      <TargetAudiences />

      {/* Technology Showcase */}
      <TechnologyShowcase />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center bg-gradient-to-br from-primary to-accent text-white p-12 rounded-2xl max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">{t('services.cta.title')}</h2>
            <p className="text-xl mb-8 text-white/90">
              {t('services.cta.diagnostic.description')}
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/diagnostic")}
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              {t('services.cta.button')}
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
