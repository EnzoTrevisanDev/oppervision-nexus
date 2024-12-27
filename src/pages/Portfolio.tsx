import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Monitor, Cloud, Container, Star } from "lucide-react";

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      category: "Monitoring Automation",
      icon: <Monitor className="w-6 h-6" />,
      title: "StartupBR Monitoring Implementation",
      description: "Zabbix and Grafana implementation, reducing false alerts by 30%",
      impact: "30% reduction in false alerts",
      testimonial: {
        content: "The monitoring solution implemented by Oppervision has significantly improved our operational efficiency.",
        author: "John Doe",
        role: "CTO, StartupBR"
      }
    },
    {
      category: "Cloud Computing",
      icon: <Cloud className="w-6 h-6" />,
      title: "TechCorp AWS Migration",
      description: "Complete AWS infrastructure setup and migration",
      impact: "40% reduction in infrastructure costs",
      testimonial: {
        content: "Oppervision's expertise in AWS helped us achieve substantial cost savings while improving performance.",
        author: "Jane Smith",
        role: "IT Director, TechCorp"
      }
    },
    {
      category: "Kubernetes Infrastructure",
      icon: <Container className="w-6 h-6" />,
      title: "InnovaTech API Scaling",
      description: "Development of an API in a Kubernetes environment",
      impact: "200% improvement in scalability",
      testimonial: {
        content: "The Kubernetes implementation has transformed how we handle our services scaling.",
        author: "Mike Johnson",
        role: "Lead Developer, InnovaTech"
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
              Oppervision delivers exceptional results for companies of all sizes. Check out our latest projects.
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
                  <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="bg-secondary p-3 rounded-lg mb-4">
                    <p className="text-sm font-medium text-primary">Impact:</p>
                    <p className="text-accent">{project.impact}</p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-600 text-sm italic">{project.testimonial.content}</p>
                        <p className="text-sm font-medium text-primary mt-2">{project.testimonial.author}</p>
                        <p className="text-sm text-gray-500">{project.testimonial.role}</p>
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
            <h2 className="text-2xl font-bold text-primary mb-4">Want to see your project here?</h2>
            <a
              href="/contact"
              className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;