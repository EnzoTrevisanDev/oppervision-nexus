import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TargetAudiences from "@/components/TargetAudiences";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Activity, Terminal, Network, Briefcase, BarChart3, CheckCircle2, Monitor, Server, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const monitoringServices = [
    {
      icon: <Monitor className="w-8 h-8" />,
      titleKey: 'services.monitoring.apm.title',
      descriptionKey: 'services.monitoring.apm.description',
      benefitsKey: 'services.monitoring.apm.benefits'
    },
    {
      icon: <Server className="w-8 h-8" />,
      titleKey: 'services.monitoring.infrastructure.title',
      descriptionKey: 'services.monitoring.infrastructure.description',
      benefitsKey: 'services.monitoring.infrastructure.benefits'
    },
    {
      icon: <FileSearch className="w-8 h-8" />,
      titleKey: 'services.monitoring.logs.title',
      descriptionKey: 'services.monitoring.logs.description',
      benefitsKey: 'services.monitoring.logs.benefits'
    }
  ];

  const otherServices = [
    {
      icon: <Terminal className="w-8 h-8" />,
      titleKey: 'services.automation.title',
      descriptionKey: 'services.automation.description',
      benefitsKey: 'services.automation.benefits'
    },
    {
      icon: <Network className="w-8 h-8" />,
      titleKey: 'services.infrastructure.title',
      descriptionKey: 'services.infrastructure.description',
      benefitsKey: 'services.infrastructure.benefits'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      titleKey: 'services.projects.title',
      descriptionKey: 'services.projects.description',
      benefitsKey: 'services.projects.benefits'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      titleKey: 'services.dashboards.title',
      descriptionKey: 'services.dashboards.description',
      benefitsKey: 'services.dashboards.benefits'
    }
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <main className="pt-20 pb-16">
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-primary mb-4">{t('services.title')}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>

          {/* Monitoring Services - Detailed Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                {t('services.monitoring.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t('services.monitoring.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {monitoringServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg text-accent">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{t(service.titleKey)}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t(service.descriptionKey)}</p>
                  <div className="space-y-2">
                    {[1, 2, 3].map((benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        <span className="text-sm">{t(`${service.benefitsKey}.${benefitIndex}`)}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Outros Serviços
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {otherServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{t(service.titleKey)}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{t(service.descriptionKey)}</p>
                  <div className="space-y-2">
                    {[1, 2, 3].map((benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        <span className="text-sm">{t(`${service.benefitsKey}.${benefitIndex}`)}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center bg-gradient-to-br from-primary to-accent text-white p-12 rounded-2xl mb-16"
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
        </section>

        {/* Target Audiences Section */}
        <TargetAudiences />

        {/* Technology Showcase */}
        <TechnologyShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Services;