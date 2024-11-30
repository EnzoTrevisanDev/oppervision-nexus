import { useState } from "react";
import { motion } from "framer-motion";
import { Server, Cloud, ChartBar, Briefcase } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialCard from "../components/TestimonialCard";

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1000);
  };

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
              <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Agende uma reunião gratuita
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Explore nosso portfólio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">Sobre Nós</h2>
            <p className="text-gray-600 mb-8">
              Somos especialistas em tecnologia, automação e monitoramento, ajudando empresas a 
              otimizar suas operações e melhorar a escalabilidade de seus sistemas. Nossa missão 
              é entregar soluções rápidas, práticas e eficientes que impulsionam o crescimento 
              do seu negócio.
            </p>
          </div>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Entre em Contato</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
