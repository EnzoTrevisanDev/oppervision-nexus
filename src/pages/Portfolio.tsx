import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Monitor, Cloud, Container, Star } from "lucide-react";

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      category: t('portfolio.categories.monitoring'),
      icon: <Monitor className="w-6 h-6" />,
      titleKey: 'portfolio.projects.startupbr.title',
      descriptionKey: 'portfolio.projects.startupbr.description',
      impactKey: 'portfolio.projects.startupbr.impact',
      testimonial: {
        contentKey: 'portfolio.projects.startupbr.testimonial.content',
        authorKey: 'portfolio.projects.startupbr.testimonial.author',
        roleKey: 'portfolio.projects.startupbr.testimonial.role'
      }
    },
    {
      category: t('portfolio.categories.cloud'),
      icon: <Cloud className="w-6 h-6" />,
      titleKey: 'portfolio.projects.techcorp.title',
      descriptionKey: 'portfolio.projects.techcorp.description',
      impactKey: 'portfolio.projects.techcorp.impact',
      testimonial: {
        contentKey: 'portfolio.projects.techcorp.testimonial.content',
        authorKey: 'portfolio.projects.techcorp.testimonial.author',
        roleKey: 'portfolio.projects.techcorp.testimonial.role'
      }
    },
    {
      category: t('portfolio.categories.kubernetes'),
      icon: <Container className="w-6 h-6" />,
      titleKey: 'portfolio.projects.innovatech.title',
      descriptionKey: 'portfolio.projects.innovatech.description',
      impactKey: 'portfolio.projects.innovatech.impact',
      testimonial: {
        contentKey: 'portfolio.projects.innovatech.testimonial.content',
        authorKey: 'portfolio.projects.innovatech.testimonial.author',
        roleKey: 'portfolio.projects.innovatech.testimonial.role'
      }
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                      {project.icon}
                    </div>
                    <span className="text-sm font-medium text-accent">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t(project.titleKey)}</h3>
                  <p className="text-gray-600 mb-4">{t(project.descriptionKey)}</p>
                  <div className="bg-secondary p-3 rounded-lg mb-4">
                    <p className="text-sm font-medium text-primary">{t('portfolio.impact')}:</p>
                    <p className="text-accent">{t(project.impactKey)}</p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-600 text-sm italic">{t(project.testimonial.contentKey)}</p>
                        <p className="text-sm font-medium text-primary mt-2">{t(project.testimonial.authorKey)}</p>
                        <p className="text-sm text-gray-500">{t(project.testimonial.roleKey)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-16"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">{t('portfolio.cta')}</h2>
            <a
              href="/contact"
              className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              {t('portfolio.cta.button')}
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;