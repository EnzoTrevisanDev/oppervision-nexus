
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Github, ExternalLink, Calendar, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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

interface ProjectCardProps {
  project: Project;
  index: number;
  onCaseStudyClick?: (project: Project) => void;
}

const ProjectCard = ({ project, index, onCaseStudyClick }: ProjectCardProps) => {
  const { t } = useLanguage();

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
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={t(project.titleKey)}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status Badge */}
        {project.inDevelopment && (
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              {t('portfolio.inDevelopment')}
            </Badge>
          </div>
        )}
        
        {/* Action buttons on hover */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <Button
              size="sm"
              variant="secondary"
              className="p-2 bg-white/90 hover:bg-white"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}
          {project.demo && (
            <Button
              size="sm"
              variant="secondary"
              className="p-2 bg-white/90 hover:bg-white"
              asChild
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/10 rounded-lg text-accent transition-colors group-hover:bg-accent group-hover:text-white">
              <IconComponent className="w-6 h-6" />
            </div>
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

        {/* Performance Metrics */}
        {project.metrics && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <TrendingUp className="w-4 h-4 mr-1" />
              Key Metrics
            </div>
            <div className="grid grid-cols-2 gap-2">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-lg font-bold text-accent">{metric.value}</div>
                  <div className="text-xs text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
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

        {/* Enhanced hover content */}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="border-t pt-4">
            <div className="flex justify-between items-center gap-2">
              <div className="flex gap-2">
                {project.github && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
              {project.caseStudy && (
                <Button 
                  size="sm" 
                  onClick={() => onCaseStudyClick?.(project)}
                >
                  Case Study
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
