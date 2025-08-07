
import { motion } from "framer-motion";
import { X, Github, ExternalLink, Calendar, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
  id: string;
  category: string;
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  image: string;
  technologies: any[];
  github?: string;
  demo?: string;
  caseStudy?: string;
  inDevelopment?: boolean;
  progress: number;
  completionDate?: string;
  client?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const { t } = useLanguage();

  if (!project || !isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-accent/10 rounded-lg text-accent">
              {project.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">{t(project.titleKey)}</h2>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline">{project.category}</Badge>
                {project.completionDate && (
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.completionDate}
                  </div>
                )}
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Project Image */}
          <div className="mb-8">
            <img
              src={project.image}
              alt={t(project.titleKey)}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Description & Client */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
              <p className="text-gray-600 mb-4">{t(project.descriptionKey)}</p>
              
              {project.client && (
                <div className="flex items-center text-gray-600 mb-4">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Client: {project.client}</span>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="flex items-center gap-1">
                    <span>{tech.icon}</span>
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          {project.metrics && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Key Results
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-accent">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Case Study Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {project.challenges && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Challenges</h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.solutions && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Solutions</h3>
                <ul className="space-y-2">
                  {project.solutions.map((solution, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.results && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Results</h3>
                <ul className="space-y-2">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Client Testimonial */}
          {project.testimonial && (
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Client Testimonial</h3>
              <blockquote className="text-gray-600 italic mb-4">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="text-sm">
                <div className="font-semibold text-primary">{project.testimonial.author}</div>
                <div className="text-gray-500">{project.testimonial.role}</div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            {project.github && (
              <Button variant="outline" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
            {project.demo && (
              <Button asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
