import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Activity, Terminal, Network, Briefcase, BarChart3, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const services = [
    {
      icon: <Activity className="w-8 h-8" />,
      titleKey: 'services.monitoring.title',
      descriptionKey: 'services.monitoring.description',
      benefitsKey: 'services.monitoring.benefits'
    },
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
                  <h3 className="text-xl font-semibold text-primary">{t(service.titleKey)}</h3>
                </div>
                <p className="text-gray-600 mb-4">{t(service.descriptionKey)}</p>
                <div className="space-y-2">
                  {[1, 2, 3].map((benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span>{t(`${service.benefitsKey}.${benefitIndex}`)}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">{t('services.cta.title')}</h2>
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="bg-accent hover:bg-accent/90"
            >
              {t('services.cta.button')}
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;