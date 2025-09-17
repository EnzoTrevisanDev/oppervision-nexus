
import { useState } from "react";
import { Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface PortfolioFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

const PortfolioFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange
}: PortfolioFiltersProps) => {
  const { t } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);

  const sortOptions = [
    { value: 'date', label: 'Date' },
    { value: 'category', label: 'Category' },
    { value: 'progress', label: 'Progress' }
  ];

  const handleDownloadCV = () => {
    // In a real implementation, this would download an actual CV file
    const link = document.createElement('a');
    link.href = '/cv-oppervision.pdf'; // Add your CV file to public folder
    link.download = 'Oppervision-CV.pdf';
    link.click();
  };

  return (
    <div className="mb-8">
      {/* Download CV and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1"></div>
        <Button onClick={() => setShowFilters(!showFilters)} variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
        <Button onClick={handleDownloadCV} variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </Button>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Categories */}
            <div>
              <h4 className="font-semibold mb-3">Categories</h4>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => onCategoryChange('all')}
                >
                  All
                </Badge>
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => onCategoryChange(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <h4 className="font-semibold mb-3">Sort By</h4>
              <div className="flex flex-wrap gap-2">
                {sortOptions.map((option) => (
                  <Badge
                    key={option.value}
                    variant={sortBy === option.value ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => onSortChange(option.value)}
                  >
                    {option.label}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioFilters;
