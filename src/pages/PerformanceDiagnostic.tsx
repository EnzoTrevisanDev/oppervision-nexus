import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2, Clock, FileText, Users } from "lucide-react";
import SEO from "@/components/SEO";

const PerformanceDiagnostic = () => {
  const { t } = useLanguage();

  const diagnosticFeatures = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Análise Completa",
      description: "Auditoria detalhada de toda sua infraestrutura atual"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Entrega Rápida",
      description: "Relatório completo em até 48 horas"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Consultoria Especializada",
      description: "Análise feita por especialistas certificados"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Agendamento",
      description: "Preencha o formulário e agende uma conversa inicial"
    },
    {
      step: "02",
      title: "Análise",
      description: "Nossa equipe fará uma auditoria completa da sua infraestrutura"
    },
    {
      step: "03",
      title: "Relatório",
      description: "Você receberá um relatório detalhado com recomendações"
    },
    {
      step: "04",
      title: "Apresentação",
      description: "Reunião para apresentar os resultados e próximos passos"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={t('services.cta.diagnostic.title')}
        description={t('services.cta.diagnostic.description')}
      />
      <Header />
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-accent text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('services.cta.diagnostic.title')}
              </h1>
              <p className="text-xl mb-8 text-white/90">
                {t('services.cta.diagnostic.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {diagnosticFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Como Funciona</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Um processo simples e estruturado para analisar sua infraestrutura
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">O que está incluído</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Análise completa da infraestrutura atual",
                "Identificação de gargalos de performance", 
                "Avaliação de segurança e conformidade",
                "Recomendações de otimização",
                "Plano de implementação detalhado",
                "Estimativa de custos e ROI",
                "Sessão de apresentação dos resultados",
                "30 dias de suporte para dúvidas"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Agende seu Diagnóstico Gratuito
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Preencha o formulário ao lado e nossa equipe entrará em contato em até 24 horas 
                  para agendar uma conversa inicial e entender suas necessidades.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>Sem compromisso</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>Relatório detalhado gratuito</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>Consultoria especializada</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PerformanceDiagnostic;