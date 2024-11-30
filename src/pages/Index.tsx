import { motion } from "framer-motion";
import { Server, Cloud, ChartBar, Briefcase } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialCard from "../components/TestimonialCard";


const Index = () => {

  const services = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Automação de Monitoramento",
      description: "Implementação de Zabbix, Prometheus e Grafana para monitoramento proativo."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Infraestrutura em Kubernetes",
      description: "Orquestração de containers para maior escalabilidade e eficiência."
    },
    {
      icon: <ChartBar className="w-6 h-6" />,
      title: "Soluções em Cloud Computing",
      description: "Configuração e otimização de ambientes na AWS, Azure e GCP."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Consultoria Personalizada",
      description: "Diagnóstico e planejamento para melhoria da infraestrutura de TI."
    }
  ];

  const testimonials = [
    {
      name: "João Silva",
      role: "CTO, TechCorp",
      content: "A Oppervision transformou completamente nossa infraestrutura de TI. A eficiência aumentou em 200% desde que começamos a trabalhar juntos."
    },
    {
      name: "Maria Santos",
      role: "Diretora de Operações, InnovaTech",
      content: "Excelente suporte e soluções personalizadas que realmente atendem às necessidades do nosso negócio."
    },
    {
      name: "Pedro Oliveira",
      role: "CEO, StartupBR",
      content: "A expertise da equipe em cloud computing nos ajudou a escalar nossos serviços de forma segura e eficiente."
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
              Consultoria em TI e Automação
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Simplificamos sua infraestrutura com soluções escaláveis e monitoramento inteligente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"><button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Agende uma reunião gratuita
              </button></a>
              <a href="/portifolio"><button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Explore nosso portfólio
              </button></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Nossos Serviços</h2>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">O Que Nossos Clientes Dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
