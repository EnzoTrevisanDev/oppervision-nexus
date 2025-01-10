import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Activity, FileText, BarChart2, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      category: t('portfolio.categories.automation'),
      icon: <Mail className="w-6 h-6" />,
      titleKey: 'portfolio.projects.email.title',
      descriptionKey: 'portfolio.projects.email.description',
      impacts: [
        'portfolio.projects.email.impact.1',
        'portfolio.projects.email.impact.2'
      ],
      github: "https://github.com/yourusername/email-automation"
    },
    {
      category: t('portfolio.categories.monitoring'),
      icon: <Activity className="w-6 h-6" />,
      titleKey: 'portfolio.projects.kubernetes.title',
      descriptionKey: 'portfolio.projects.kubernetes.description',
      impacts: [
        'portfolio.projects.kubernetes.impact.1',
        'portfolio.projects.kubernetes.impact.2'
      ],
      github: "https://github.com/yourusername/kubernetes-monitoring"
    },
    {
      category: t('portfolio.categories.reporting'),
      icon: <FileText className="w-6 h-6" />,
      titleKey: 'portfolio.projects.reports.title',
      descriptionKey: 'portfolio.projects.reports.description',
      impacts: [
        'portfolio.projects.reports.impact.1',
        'portfolio.projects.reports.impact.2'
      ],
      github: "https://github.com/yourusername/automated-reports"
    },
    {
      category: t('portfolio.categories.dashboard'),
      icon: <BarChart2 className="w-6 h-6" />,
      titleKey: 'portfolio.projects.traffic.title',
      descriptionKey: 'portfolio.projects.traffic.description',
      impacts: [
        'portfolio.projects.traffic.impact.1',
        'portfolio.projects.traffic.impact.2'
      ],
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

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-primary mb-2">{t('portfolio.impact')}:</h4>
                      <ul className="space-y-2">
                        {project.impacts.map((impact, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <span className="text-green-500 mt-1">✔</span>
                            {t(impact)}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.github && (
                      <div className="pt-4 border-t">
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          {t('portfolio.repository')}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    )}
                  </div>
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