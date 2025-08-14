import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Users, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

interface Technology {
  name: string;
  icon: string;
  color: string;
}

interface Project {
  id: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  titleKey: string;
  descriptionKey: string;
  image: string;
  technologies: Technology[];
  github?: string;
  demo?: string;
  caseStudy?: string;
  inDevelopment?: boolean;
  progress: number;
  completionDate?: string;
  client?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

interface EnhancedProjectCardProps {
  project: Project;
  index: number;
  onCaseStudyClick?: (project: Project) => void;
}

const EnhancedProjectCard = ({ project, index, onCaseStudyClick }: EnhancedProjectCardProps) => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1
      }
    }
  };

  const IconComponent = project.icon;

  return (
    <motion.div
      variants={cardVariants}
      className="group relative"
      style={{
        perspective: "1000px",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
          z: isHovered ? 50 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Project Image with Video Preview */}
        <div className="relative overflow-hidden h-48">
          <img 
            src={project.image} 
            alt={t(project.titleKey)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Video overlay on hover */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/70 flex items-center justify-center"
            >
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/20"
                onClick={() => setVideoPlaying(true)}
              >
                <Play className="w-8 h-8 mr-2" />
                Preview Demo
              </Button>
            </motion.div>
          )}

          {/* Status Badge */}
          {project.inDevelopment && (
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                {t('portfolio.inDevelopment')}
              </Badge>
            </div>
          )}

          {/* Live Status */}
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Live
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div 
                animate={{
                  rotateY: isHovered ? 180 : 0,
                }}
                transition={{ duration: 0.6 }}
                className="p-2 bg-accent/10 rounded-lg text-accent transition-colors group-hover:bg-accent group-hover:text-white"
              >
                <IconComponent className="w-6 h-6" />
              </motion.div>
              <Badge variant="outline">{project.category}</Badge>
            </div>
            {project.completionDate && (
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {project.completionDate}
              </div>
            )}
          </div>
          
          <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
            {t(project.titleKey)}
          </h3>
          
          <p className="text-gray-600 mb-4">
            {t(project.descriptionKey)}
          </p>

          {/* Client Info */}
          {project.client && (
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Users className="w-4 h-4 mr-1" />
              {project.client}
            </div>
          )}

          {/* Progress indicator for projects in development */}
          {project.inDevelopment && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm text-accent font-semibold">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>
          )}

          {/* Technologies used */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <Badge 
                key={techIndex} 
                variant="outline" 
                className="text-xs flex items-center gap-1"
                style={{ borderColor: tech.color, color: tech.color }}
              >
                <span>{tech.icon}</span>
                {tech.name}
              </Badge>
            ))}
          </div>

          {/* Case Study button (only if available) */}
          {project.caseStudy && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                y: isHovered ? 0 : 20 
              }}
              className="border-t pt-4"
            >
              <Button 
                size="sm" 
                onClick={() => onCaseStudyClick?.(project)}
                className="w-full"
              >
                View Case Study
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EnhancedProjectCard;
