
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const testimonials = [
  {
    quote: "Outstanding work on our infrastructure automation. Reduced deployment time by 99% and saved us thousands in operational costs.",
    author: "Pedro Lima",
    role: "CTO at ScaleUp Technologies",
    rating: 5,
    project: "Infrastructure Automation"
  },
  {
    quote: "The email automation system transformed our operations. 80% reduction in manual work and significant improvement in response times.",
    author: "Maria Silva",
    role: "Operations Manager at TechCorp",
    rating: 5,
    project: "Email Automation"
  },
  {
    quote: "Incredible expertise in Kubernetes monitoring. We now catch issues before they impact users. Zero unplanned downtime in 6 months!",
    author: "Carlos Rodriguez",
    role: "DevOps Lead at CloudFirst",
    rating: 5,
    project: "Kubernetes Monitoring"
  },
  {
    quote: "The cloud migration was seamless and resulted in 45% cost reduction with 300% performance improvement. Highly recommended!",
    author: "Roberto Silva",
    role: "IT Director at LegacyCorp",
    rating: 5,
    project: "Cloud Migration"
  }
];

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl font-bold text-primary mb-4">Client Testimonials</h3>
        <p className="text-gray-600">What my clients say about working with me</p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center mb-4">
            {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
          </div>
          
          <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed">
            "{currentTestimonial.quote}"
          </blockquote>
          
          <div className="mb-4">
            <div className="font-semibold text-primary text-lg">{currentTestimonial.author}</div>
            <div className="text-gray-600">{currentTestimonial.role}</div>
            <div className="text-sm text-accent font-medium mt-1">
              Project: {currentTestimonial.project}
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="rounded-full p-2"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-accent" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="rounded-full p-2"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
