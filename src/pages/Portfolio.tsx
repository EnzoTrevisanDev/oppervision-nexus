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
            <section className="py-20 bg-secondary mt-16">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12 text-primary">{t('portfolio.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {portfolio.map((project, index) => (
                            <motion.a
                                key={index}
                                href={project.linkRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                                        {project.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                                </div>
                                <p className="text-gray-600">{project.description}</p>
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