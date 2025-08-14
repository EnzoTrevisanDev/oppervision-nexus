
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import ProjectCard from "@/components/portfolio/ProjectCard";
import EnhancedProjectCard from "@/components/portfolio/EnhancedProjectCard";
import PortfolioFilters from "@/components/portfolio/PortfolioFilters";
import ProjectModal from "@/components/portfolio/ProjectModal";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import TechnologyCloud from "@/components/portfolio/TechnologyCloud";
import ProcessShowcase from "@/components/portfolio/ProcessShowcase";
import ClientTestimonials from "@/components/portfolio/ClientTestimonials";
import TechnologyMatcher from "@/components/portfolio/TechnologyMatcher";
import TimelineView from "@/components/portfolio/TimelineView";
import { projects, Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Grid, Clock, Zap } from "lucide-react";

const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [showTechMatcher, setShowTechMatcher] = useState(false);
  const projectsPerPage = 6;

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(projects.map(project => project.category)));
    return uniqueCategories;
  }, []);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filter by selected technologies
    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter(project =>
        project.technologies.some(tech =>
          selectedTechnologies.includes(tech.name)
        )
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(project => 
        t(project.titleKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(project.descriptionKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return (b.completionDate || '').localeCompare(a.completionDate || '');
        case 'category':
          return a.category.localeCompare(b.category);
        case 'progress':
          return b.progress - a.progress;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, selectedTechnologies, searchQuery, sortBy, t]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProjects.length / projectsPerPage);
  const currentProjects = viewMode === 'timeline' 
    ? filteredAndSortedProjects 
    : filteredAndSortedProjects.slice(
        (currentPage - 1) * projectsPerPage,
        currentPage * projectsPerPage
      );

  const handleCaseStudyClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleTechnologyClick = (technology: string) => {
    setSelectedTechnologies(prev => 
      prev.includes(technology)
        ? prev.filter(t => t !== technology)
        : [...prev, technology]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": t('portfolio.title'),
    "description": t('portfolio.subtitle'),
    "url": window.location.href,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "CreativeWork",
        "position": index + 1,
        "name": t(project.titleKey),
        "description": t(project.descriptionKey),
        "creator": {
          "@type": "Organization",
          "name": "Oppervision"
        }
      }))
    }
  };

  return (
    <>
      <SEO 
        title={t('portfolio.title')}
        description={t('portfolio.subtitle')}
        canonical={`${window.location.origin}/portfolio`}
      />
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="min-h-screen bg-secondary">
        <Header />
        
        {/* Hero Section */}
        <PortfolioHero />
        
        <main className="pb-16">
          <div className="container mx-auto px-4">
            
            {/* Client Testimonials */}
            <ClientTestimonials />
            
            {/* Process Showcase */}
            <ProcessShowcase />
            
            {/* Technology Cloud */}
            <TechnologyCloud 
              onTechnologyClick={handleTechnologyClick}
              selectedTechnologies={selectedTechnologies}
            />

            {/* Technology Matcher Toggle */}
            <div className="text-center mb-8">
              <Button
                onClick={() => setShowTechMatcher(!showTechMatcher)}
                className="mb-4"
              >
                <Zap className="w-4 h-4 mr-2" />
                {showTechMatcher ? 'Hide' : 'Find'} Your Perfect Service Match
              </Button>
            </div>

            {/* Technology Matcher */}
            {showTechMatcher && (
              <div className="mb-12">
                <TechnologyMatcher />
              </div>
            )}

            {/* View Mode Toggle */}
            <div className="flex justify-center gap-2 mb-8">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                onClick={() => setViewMode('grid')}
                size="sm"
              >
                <Grid className="w-4 h-4 mr-2" />
                Grid View
              </Button>
              <Button
                variant={viewMode === 'timeline' ? 'default' : 'outline'}
                onClick={() => setViewMode('timeline')}
                size="sm"
              >
                <Clock className="w-4 h-4 mr-2" />
                Timeline View
              </Button>
            </div>

            {/* Filters */}
            <PortfolioFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            {/* Projects Display */}
            {currentProjects.length > 0 ? (
              viewMode === 'timeline' ? (
                <TimelineView
                  projects={currentProjects}
                  onCaseStudyClick={handleCaseStudyClick}
                />
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                >
                  {currentProjects.map((project, index) => (
                    <EnhancedProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      onCaseStudyClick={handleCaseStudyClick}
                    />
                  ))}
                </motion.div>
              )
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg mb-4">No projects found matching your criteria.</p>
                <Button onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setSelectedTechnologies([]);
                }}>
                  Reset Filters
                </Button>
              </div>
            )}

            {/* Pagination - only show for grid view */}
            {viewMode === 'grid' && totalPages > 1 && (
              <div className="flex justify-center gap-2">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </Button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <Button
                    key={i + 1}
                    variant={currentPage === i + 1 ? "default" : "outline"}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </main>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProject(null);
          }}
        />

        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
