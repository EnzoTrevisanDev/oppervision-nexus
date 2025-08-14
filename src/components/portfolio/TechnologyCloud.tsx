
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const technologies = [
  { name: "Python", size: "text-2xl", color: "bg-blue-500", count: 8 },
  { name: "React", size: "text-xl", color: "bg-cyan-500", count: 6 },
  { name: "Kubernetes", size: "text-2xl", color: "bg-purple-500", count: 7 },
  { name: "Docker", size: "text-lg", color: "bg-blue-600", count: 5 },
  { name: "AWS", size: "text-xl", color: "bg-orange-500", count: 6 },
  { name: "Node.js", size: "text-lg", color: "bg-green-500", count: 4 },
  { name: "Terraform", size: "text-xl", color: "bg-purple-600", count: 5 },
  { name: "PostgreSQL", size: "text-lg", color: "bg-blue-700", count: 4 },
  { name: "Grafana", size: "text-base", color: "bg-orange-600", count: 3 },
  { name: "Prometheus", size: "text-base", color: "bg-red-500", count: 3 },
  { name: "Ansible", size: "text-lg", color: "bg-red-600", count: 4 },
  { name: "MongoDB", size: "text-base", color: "bg-green-600", count: 3 },
];

interface TechnologyCloudProps {
  onTechnologyClick?: (technology: string) => void;
  selectedTechnologies?: string[];
}

const TechnologyCloud = ({ onTechnologyClick, selectedTechnologies = [] }: TechnologyCloudProps) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-primary mb-6 text-center">
        Technology Expertise
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.2, y: -5 }}
            onHoverStart={() => setHoveredTech(tech.name)}
            onHoverEnd={() => setHoveredTech(null)}
            className="relative"
          >
            <Badge
              variant={selectedTechnologies.includes(tech.name) ? "default" : "outline"}
              className={`${tech.size} px-4 py-2 cursor-pointer transition-all duration-300 ${
                hoveredTech === tech.name ? "shadow-lg" : ""
              }`}
              style={{
                backgroundColor: selectedTechnologies.includes(tech.name) ? undefined : 
                  hoveredTech === tech.name ? tech.color : undefined,
                color: hoveredTech === tech.name ? "white" : undefined,
              }}
              onClick={() => onTechnologyClick?.(tech.name)}
            >
              {tech.name}
            </Badge>
            {hoveredTech === tech.name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm whitespace-nowrap"
              >
                {tech.count} projects
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyCloud;
