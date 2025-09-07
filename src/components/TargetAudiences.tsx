import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Rocket, ShoppingCart, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TargetAudiences = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const audiences = [
    {
      icon: <Rocket className="w-8 h-8" />,
      titleKey: 'target.startup.title',
      descriptionKey: 'target.startup.description',
      benefitsKey: 'target.startup.benefits',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      titleKey: 'target.ecommerce.title',
      descriptionKey: 'target.ecommerce.description',
      benefitsKey: 'target.ecommerce.benefits',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      titleKey: 'target.enterprise.title',
      descriptionKey: 'target.enterprise.description',
      benefitsKey: 'target.enterprise.benefits',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-secondary via-background to-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">{t('target.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('target.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-white border border-border hover:border-accent transition-all duration-300 hover:shadow-xl"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${audience.color} text-white`}>
                    {audience.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">
                      {t(audience.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t(audience.descriptionKey)}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[1, 2, 3, 4].map((benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">
                        {t(`${audience.benefitsKey}.${benefitIndex}`)}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full"
                  onClick={() => navigate("/diagnostic")}
                >
                  {t('services.cta.button')}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudiences;