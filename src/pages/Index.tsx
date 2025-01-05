import { motion } from "framer-motion";
import { Server, Cloud, ChartBar, Briefcase } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialCard from "../components/TestimonialCard";
import PricingSection from "../components/PricingSection";
import ContactForm from "../components/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Server className="w-6 h-6" />,
      title: t('services.monitoring.title'),
      description: t('services.monitoring.description')
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: t('services.kubernetes.title'),
      description: t('services.kubernetes.description')
    },
    {
      icon: <ChartBar className="w-6 h-6" />,
      title: t('services.cloud.title'),
      description: t('services.cloud.description')
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description')
    }
  ];

  const testimonials = [
    {
      name: t('testimonials.1.name'),
      role: t('testimonials.1.role'),
      content: t('testimonials.1.content')
    },
    {
      name: t('testimonials.2.name'),
      role: t('testimonials.2.role'),
      content: t('testimonials.2.content')
    },
    {
      name: t('testimonials.3.name'),
      role: t('testimonials.3.role'),
      content: t('testimonials.3.content')
    }
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-[#2A3444] pt-32 pb-20 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90">
                  {t('home.cta.meeting')}
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  {t('home.cta.portfolio')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">{t('services.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">{t('testimonials.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">{t('contact.title')}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('contact.subtitle')}
            </p>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
