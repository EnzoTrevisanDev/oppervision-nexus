import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CoreValues = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-[#2A3444] text-white">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center p-6"
          >
            <Target className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t('about.mission.title')}</h3>
            <p>{t('about.mission.text')}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center p-6"
          >
            <Eye className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t('about.vision.title')}</h3>
            <p>{t('about.vision.text')}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center p-6"
          >
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t('about.values.title')}</h3>
            <p>{t('about.values.text')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;