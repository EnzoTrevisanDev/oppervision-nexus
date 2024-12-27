import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Telescope } from "lucide-react";

const Portfolio = () => {
    const { t } = useLanguage();
    
    const portfolio = [
        {
            icon: <Telescope className="w-6 h-6"/>,
            title: "API Grafana Dashboard Monitoring",
            description: "API Grafana Dashboard Monitoring",
            linkRepo: "https://github.com/spaceNottis123/-GenerateReportsApi"
        }
    ];
    
    return (
        <div className="min-h-screen bg-secondary">
            <Header />
            <section className="py-12 sm:py-16 md:py-20 bg-secondary mt-16">
                <div className="container px-4 sm:px-6 mx-auto">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary">
                        {t('portfolio.title')}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {portfolio.map((project, index) => (
                            <motion.a
                                key={index}
                                href={project.linkRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
                            >
                                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                    <div className="p-2 bg-accent/10 rounded-lg text-accent flex-shrink-0">
                                        {project.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-primary line-clamp-2">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm sm:text-base flex-grow">
                                    {project.description}
                                </p>
                                <div className="mt-4 pt-2 border-t border-gray-100">
                                    <span className="text-accent text-sm font-medium hover:underline">
                                        {t('portfolio.viewProject')}
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Portfolio;