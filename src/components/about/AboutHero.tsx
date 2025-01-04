import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutHero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-primary mb-6">{t('about.title')}</h1>
          <p className="text-xl text-gray-600 mb-8">{t('about.description')}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;