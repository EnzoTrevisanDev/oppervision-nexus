import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import AboutHero from "@/components/about/AboutHero";
import CoreValues from "@/components/about/CoreValues";
import CompanyStats from "@/components/about/CompanyStats";

const About = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <AboutHero />
      <CoreValues />
      <CompanyStats />
      
      {/* Technology Showcase */}
      <TechnologyShowcase />
      
      <section className="py-16 bg-gradient-to-r from-primary to-[#2A3444] text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              {t('services.cta.title')}
            </h3>
            <p className="text-lg mb-6 text-white/90">
              {t('services.cta.diagnostic.description')}
            </p>
            <Button
              onClick={() => navigate("/diagnostic")}
              className="bg-white text-primary hover:bg-gray-100 font-semibold"
            >
              {t('services.cta.button')}
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;