import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Building2, 
  Target, 
  Eye, 
  Heart, 
  History, 
  Users, 
  Award, 
  BarChart, 
  Handshake 
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      
      {/* Introduction Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-primary mb-6">Sobre Nós</h1>
            <p className="text-xl text-gray-600 mb-8">
              A Oppervision é uma empresa de consultoria especializada em tecnologia da informação e automação, 
              dedicada a oferecer soluções inteligentes e escaláveis para empresas de todos os portes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
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
              <h3 className="text-xl font-semibold mb-3">Missão</h3>
              <p>Simplificar a infraestrutura de TI com soluções personalizadas e eficientes, garantindo o crescimento sustentável de nossos clientes.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center p-6"
            >
              <Eye className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Visão</h3>
              <p>Ser referência global em consultoria de TI e automação, reconhecida pela inovação e excelência.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center p-6"
            >
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Valores</h3>
              <p>Comprometimento, inovação, transparência e foco em resultados.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History and Team Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <History className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Nossa História</h3>
              <p className="text-gray-600">
                Fundada em 2024, a Oppervision surgiu da paixão por transformar ambientes tecnológicos 
                em ativos estratégicos para empresas.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Nossa Equipe</h3>
              <p className="text-gray-600">
                Nossa equipe é formada por especialistas com experiência em infraestrutura, 
                computação em nuvem, DevOps e monitoramento inteligente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-6">Nossos Diferenciais</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="font-semibold mb-2">Soluções Personalizadas</h4>
                <p className="text-gray-600">Adaptadas às suas necessidades específicas</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="font-semibold mb-2">Tecnologias Modernas</h4>
                <p className="text-gray-600">Utilizamos as ferramentas mais avançadas do mercado</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="font-semibold mb-2">Experiência Comprovada</h4>
                <p className="text-gray-600">Em diversas plataformas e ferramentas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact and Partners Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <BarChart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Impacto e Resultados</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Redução de custos em até 40% com automação de monitoramento</li>
                <li>Implementação de soluções em nuvem para mais de 50 clientes satisfeitos</li>
                <li>Aumento médio de 60% na eficiência operacional</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Handshake className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Clientes e Parceiros</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-500" />
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-500" />
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-500" />
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-[#2A3444] text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Descubra como podemos transformar sua infraestrutura de TI
            </h3>
            <Button
              onClick={() => navigate("/contact")}
              className="bg-white text-primary hover:bg-gray-100"
            >
              Entre em Contato
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;