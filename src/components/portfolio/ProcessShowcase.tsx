
import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket } from "lucide-react";

const ProcessShowcase = () => {
  const processes = [
    {
      icon: Search,
      title: "Discovery",
      description: "Understanding your needs, goals, and technical requirements",
      color: "bg-blue-500"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating user-centric designs and system architecture",
      color: "bg-purple-500"
    },
    {
      icon: Code,
      title: "Development",
      description: "Building robust, scalable solutions with best practices",
      color: "bg-green-500"
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "Launching, monitoring, and maintaining your solution",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-secondary to-accent/10 rounded-xl p-8 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl font-bold text-primary mb-4">My Process</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A proven methodology that ensures successful project delivery from concept to completion
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {processes.map((process, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="relative text-center"
          >
            <div className={`${process.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
              <process.icon className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-primary mb-2">{process.title}</h4>
            <p className="text-gray-600 text-sm">{process.description}</p>
            
            {index < processes.length - 1 && (
              <div className="hidden md:block absolute top-8 left-full w-full">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="h-0.5 bg-accent/30 transform origin-left"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessShowcase;
