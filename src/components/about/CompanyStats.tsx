import { motion } from "framer-motion";
import { History, Users, Award, BarChart, Handshake, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CompanyStats = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <History className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{t('about.history.title')}</h3>
              <p className="text-gray-600">{t('about.history.text')}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{t('about.team.title')}</h3>
              <p className="text-gray-600">{t('about.team.text')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-6">{t('about.differentials.title')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {['customized', 'modern', 'experienced'].map((key) => (
                <div key={key} className="p-4 bg-white rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2">{t(`about.differentials.${key}.title`)}</h4>
                  <p className="text-gray-600">{t(`about.differentials.${key}.text`)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CompanyStats;