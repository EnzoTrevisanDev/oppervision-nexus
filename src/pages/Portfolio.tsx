import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import EnhancedProjectCard from "@/components/portfolio/EnhancedProjectCard";
import PortfolioFilters from "@/components/portfolio/PortfolioFilters";
import ProjectModal from "@/components/portfolio/ProjectModal";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ProcessShowcase from "@/components/portfolio/ProcessShowcase";
import { projects, Project } from "@/data/projects";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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
  }, [selectedCategory, sortBy, t]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProjects.length / projectsPerPage);
  const currentProjects = filteredAndSortedProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handleCaseStudyClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
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
            
            {/* Process Showcase */}
            <ProcessShowcase />

            {/* Filters */}
            <PortfolioFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            {/* Projects Display */}
            {currentProjects.length > 0 ? (
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
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg mb-4">No projects found matching your criteria.</p>
                <Button onClick={() => {
                  setSelectedCategory('all');
                }}>
                  Reset Filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
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
