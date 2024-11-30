import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Telescope } from "lucide-react";

const Portifolio = () => {
    
    const portifolio = [
        {
            icon: <Telescope className="w-6 h-6"/>,
            title: "API Grafana Dashboard Monitoring",
            description: "API Grafana Dashboard Monitoring",
            linkRepo:"https://github.com/spaceNottis123/-GenerateReportsApi"
        }
    ]
    
    return(
        <div className="min-h-screen bg-secondary">
            <Header />
            <section id="services" className="py-20 bg-secondary">
                <div className="container">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary">Nossos Serviços</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portifolio.map((service, index) => (
                    <motion.a
                        key={index}
                        href={service.linkRepo}
                        target="_blank"
                        rel="noopener noreferrer"
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
                    </motion.a>
                    ))}
                </div>
                </div>
            </section>
             <Footer />
        </div>
    );
}
export default Portifolio;