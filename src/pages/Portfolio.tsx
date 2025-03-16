import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Activity, FileText, BarChart2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      category: t('portfolio.categories.automation'),
      icon: <Mail className="w-6 h-6" />,
      titleKey: 'portfolio.projects.email.title',
      descriptionKey: 'portfolio.projects.email.description',
    },
    {
      category: t('portfolio.categories.monitoring'),
      icon: <Activity className="w-6 h-6" />,
      titleKey: 'portfolio.projects.kubernetes.title',
      descriptionKey: 'portfolio.projects.kubernetes.description',
    },
    {
      category: t('portfolio.categories.reporting'),
      icon: <FileText className="w-6 h-6" />,
      titleKey: 'portfolio.projects.reports.title',
      descriptionKey: 'portfolio.projects.reports.description',
    },
    {
      category: t('portfolio.categories.dashboard'),
      icon: <BarChart2 className="w-6 h-6" />,
      titleKey: 'portfolio.projects.traffic.title',
      descriptionKey: 'portfolio.projects.traffic.description',
      inDevelopment: true
    }
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-primary mb-4">{t('portfolio.title')}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg text-accent">
                        {project.icon}
                      </div>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    {project.inDevelopment && (
                      <Badge variant="outline" className="ml-2">
                        {t('portfolio.inDevelopment')}
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {t(project.titleKey)}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {t(project.descriptionKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;