
import { motion } from "framer-motion";
import { Code, Rocket, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PortfolioHero = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Code, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "30+", label: "Happy Clients" },
    { icon: Rocket, value: "99%", label: "Success Rate" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary py-20">
      {/* Animated particles background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            My <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transforming ideas into powerful digital solutions. Explore my journey through 
            innovative projects, cutting-edge technologies, and successful client partnerships.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg"
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioHero;
