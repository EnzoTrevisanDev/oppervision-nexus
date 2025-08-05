
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Activity, FileText, BarChart2, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      category: t('portfolio.categories.automation'),
      icon: <Mail className="w-6 h-6" />,
      titleKey: 'portfolio.projects.email.title',
      descriptionKey: 'portfolio.projects.email.description',
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "SMTP", "Automation"],
      github: "https://github.com/example/email-automation",
      demo: null,
      progress: 100
    },
    {
      category: t('portfolio.categories.monitoring'),
      icon: <Activity className="w-6 h-6" />,
      titleKey: 'portfolio.projects.kubernetes.title',
      descriptionKey: 'portfolio.projects.kubernetes.description',
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Kubernetes", "Docker", "Monitoring"],
      github: "https://github.com/example/k8s-monitor",
      demo: "https://demo.k8s-monitor.com",
      progress: 100
    },
    {
      category: t('portfolio.categories.reporting'),
      icon: <FileText className="w-6 h-6" />,
      titleKey: 'portfolio.projects.reports.title',
      descriptionKey: 'portfolio.projects.reports.description',
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "PDF", "Charts"],
      github: "https://github.com/example/reports",
      demo: null,
      progress: 100
    },
    {
      category: t('portfolio.categories.dashboard'),
      icon: <BarChart2 className="w-6 h-6" />,
      titleKey: 'portfolio.projects.traffic.title',
      descriptionKey: 'portfolio.projects.traffic.description',
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "Analytics", "Dashboard"],
      github: "https://github.com/example/traffic-dashboard",
      demo: null,
      inDevelopment: true,
      progress: 75
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action buttons on hover */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      >
                        <Github className="w-4 h-4 text-gray-700" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-700" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg text-accent transition-colors group-hover:bg-accent group-hover:text-white">
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
                  
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                    {t(project.titleKey)}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {t(project.descriptionKey)}
                  </p>

                  {/* Progress indicator for projects in development */}
                  {project.inDevelopment && (
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm text-accent font-semibold">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                  )}

                  {/* Technologies used */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Enhanced hover content */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {project.inDevelopment ? 'In Development' : 'Completed'}
                        </span>
                        <div className="flex gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                            >
                              <Github className="w-3 h-3" />
                              Code
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                            >
                              <ExternalLink className="w-3 h-3" />
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
