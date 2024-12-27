import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Monitor, Cloud, Container, Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Monitoring Automation",
      description: "Implementation and configuration of tools such as Zabbix, Prometheus and Grafana.",
      benefits: [
        "Rapid identification of problems",
        "Reduced downtime",
        "Visual and actionable data"
      ]
    },
    {
      icon: <Container className="w-8 h-8" />,
      title: "Kubernetes Infrastructure",
      description: "Container orchestration with Kubernetes for scalability and efficiency.",
      benefits: [
        "Automated deployment",
        "High availability",
        "Reduced operational costs"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Computing Solutions",
      description: "Configuration and optimization of environments in AWS, Azure and GCP.",
      benefits: [
        "Reduced costs",
        "Scalability and flexibility",
        "Increased security"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Customized Consulting",
      description: "Detailed analysis of your company's needs with tailored solutions.",
      benefits: [
        "Complete infrastructure diagnosis",
        "Tailor-made solutions",
        "Ongoing technical support"
      ]
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
            <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oppervision offers tailored solutions to meet your company's needs, using cutting-edge technologies and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                  <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span>{benefit}</span>
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
            <h2 className="text-2xl font-bold text-primary mb-4">Need customized solutions?</h2>
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="bg-accent hover:bg-accent/90"
            >
              Contact Us Now
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;