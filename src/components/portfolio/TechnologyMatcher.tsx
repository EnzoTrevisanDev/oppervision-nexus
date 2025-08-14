
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "What type of project are you looking for?",
    options: [
      { value: "automation", label: "Process Automation", tags: ["python", "automation"] },
      { value: "monitoring", label: "System Monitoring", tags: ["kubernetes", "grafana", "prometheus"] },
      { value: "cloud", label: "Cloud Infrastructure", tags: ["aws", "terraform", "kubernetes"] },
      { value: "dashboard", label: "Data Dashboard", tags: ["react", "charts", "analytics"] }
    ]
  },
  {
    id: 2,
    question: "What's your primary technology preference?",
    options: [
      { value: "python", label: "Python Ecosystem", tags: ["python", "automation", "api"] },
      { value: "javascript", label: "JavaScript/React", tags: ["react", "node", "api"] },
      { value: "devops", label: "DevOps/Cloud", tags: ["kubernetes", "docker", "aws"] },
      { value: "database", label: "Database Solutions", tags: ["postgresql", "mongodb", "analytics"] }
    ]
  },
  {
    id: 3,
    question: "What's your project scale?",
    options: [
      { value: "small", label: "Small Business", tags: ["automation", "dashboard"] },
      { value: "medium", label: "Growing Company", tags: ["cloud", "monitoring", "automation"] },
      { value: "enterprise", label: "Enterprise", tags: ["kubernetes", "cloud", "monitoring", "security"] },
      { value: "startup", label: "Startup", tags: ["react", "api", "cloud"] }
    ]
  }
];

const serviceRecommendations = {
  automation: {
    title: "Process Automation Services",
    description: "Streamline your workflows with intelligent automation solutions",
    technologies: ["Python", "SMTP", "APIs", "Webhooks"],
    benefits: ["80% time savings", "Reduced errors", "24/7 operation"]
  },
  monitoring: {
    title: "Infrastructure Monitoring",
    description: "Complete visibility into your systems and applications",
    technologies: ["Kubernetes", "Prometheus", "Grafana", "Zabbix"],
    benefits: ["99.99% uptime", "Proactive alerts", "Performance optimization"]
  },
  cloud: {
    title: "Cloud Infrastructure",
    description: "Scalable, secure cloud solutions tailored to your needs",
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes"],
    benefits: ["45% cost reduction", "Auto-scaling", "High availability"]
  },
  dashboard: {
    title: "Data Visualization",
    description: "Transform your data into actionable insights",
    technologies: ["React", "Charts.js", "D3.js", "Real-time APIs"],
    benefits: ["Real-time insights", "Interactive reports", "Mobile responsive"]
  }
};

const TechnologyMatcher = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const getRecommendation = () => {
    const allTags: string[] = [];
    answers.forEach((answer, index) => {
      const question = questions[index];
      const option = question.options.find(opt => opt.value === answer);
      if (option) {
        allTags.push(...option.tags);
      }
    });

    // Count tag frequency
    const tagCounts: { [key: string]: number } = {};
    allTags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });

    // Determine primary service based on most common tags
    if (tagCounts.python || tagCounts.automation) return serviceRecommendations.automation;
    if (tagCounts.kubernetes || tagCounts.monitoring) return serviceRecommendations.monitoring;
    if (tagCounts.aws || tagCounts.cloud) return serviceRecommendations.cloud;
    if (tagCounts.react || tagCounts.dashboard) return serviceRecommendations.dashboard;

    return serviceRecommendations.automation; // default
  };

  if (showResults) {
    const recommendation = getRecommendation();
    
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          </motion.div>
          <CardTitle className="text-2xl text-primary">Perfect Match Found!</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-3">{recommendation.title}</h3>
            <p className="text-gray-600 mb-6">{recommendation.description}</p>
            
            <div className="mb-6">
              <h4 className="font-medium mb-3">Recommended Technologies:</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {recommendation.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline">{tech}</Badge>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-3">Expected Benefits:</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {recommendation.benefits.map((benefit, index) => (
                  <Badge key={index} className="bg-green-100 text-green-800">{benefit}</Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button>Get Quote</Button>
              <Button variant="outline" onClick={resetQuiz}>
                Take Quiz Again
              </Button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <div className="w-32 h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-accent rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
        <CardTitle className="text-xl">{question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.div
              key={option.value}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant="outline"
                className="w-full p-4 h-auto text-left justify-between hover:bg-accent/10"
                onClick={() => handleAnswer(option.value)}
              >
                <span>{option.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechnologyMatcher;
