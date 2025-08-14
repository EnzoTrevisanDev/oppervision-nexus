
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, TrendingUp } from "lucide-react";
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

interface TimelineViewProps {
  projects: Project[];
  onCaseStudyClick?: (project: Project) => void;
}

const TimelineView = ({ projects, onCaseStudyClick }: TimelineViewProps) => {
  const { t } = useLanguage();

  // Sort projects by completion date
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.completionDate || '2024-01-01');
    const dateB = new Date(b.completionDate || '2024-01-01');
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>

      <div className="space-y-8">
        {sortedProjects.map((project, index) => {
          const IconComponent = project.icon;
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 transform -translate-x-1/2 z-10">
                <div className="w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Content */}
              <div className={`w-full ${isLeft ? 'pl-20' : 'pr-20'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg text-accent">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary">
                          {t(project.titleKey)}
                        </h3>
                        <Badge variant="outline" className="mt-1">{project.category}</Badge>
                      </div>
                    </div>
                    {project.completionDate && (
                      <div className="flex items-center text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.completionDate}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Image */}
                    <div className="lg:col-span-1">
                      <img
                        src={project.image}
                        alt={t(project.titleKey)}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-2">
                      <p className="text-gray-600 mb-4">{t(project.descriptionKey)}</p>

                      {project.client && (
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Users className="w-4 h-4 mr-1" />
                          Client: {project.client}
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
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
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>

                      {/* Metrics */}
                      {project.metrics && (
                        <div className="mb-4">
                          <div className="flex items-center text-sm font-medium text-gray-700 mb-2">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            Key Results
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            {project.metrics.slice(0, 3).map((metric, idx) => (
                              <div key={idx} className="text-center p-2 bg-gray-50 rounded">
                                <div className="text-lg font-bold text-accent">{metric.value}</div>
                                <div className="text-xs text-gray-600">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex gap-2">
                        {project.demo && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              View Demo
                            </a>
                          </Button>
                        )}
                        {project.caseStudy && (
                          <Button size="sm" onClick={() => onCaseStudyClick?.(project)}>
                            Case Study
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineView;
