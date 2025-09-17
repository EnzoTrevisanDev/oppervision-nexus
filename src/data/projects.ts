
import { Mail, Activity, FileText, BarChart2, Server, Database, Shield, Code, Cloud, Monitor } from "lucide-react";

export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface Project {
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

export const projects: Project[] = [
  {
    id: 'email-automation',
    category: 'Automation',
    icon: Mail,
    titleKey: 'portfolio.projects.email.title',
    descriptionKey: 'portfolio.projects.email.description',
    image: "/placeholder.svg?height=200&width=300",
    technologies: [
      { name: "Python", icon: "🐍", color: "#3776ab" },
      { name: "SMTP", icon: "📧", color: "#ea4335" },
      { name: "Automation", icon: "⚡", color: "#fbbf24" }
    ],
    github: "https://github.com/example/email-automation",
    demo: null,
    caseStudy: "email-automation-case-study",
    progress: 100,
    completionDate: "December 2023",
    client: "TechCorp Solutions",
    testimonial: {
      quote: "The email automation system reduced our manual work by 80% and improved our response times significantly.",
      author: "Maria Silva",
      role: "Operations Manager at TechCorp"
    },
    challenges: [
      "Handle multiple SMTP providers",
      "Ensure email deliverability",
      "Create personalized content at scale"
    ],
    solutions: [
      "Implemented failover system for SMTP providers",
      "Added SPF/DKIM authentication",
      "Built template engine with variable injection"
    ],
    results: [
      "80% reduction in manual email tasks",
      "99.5% email delivery rate",
      "50% improvement in response times"
    ],
    metrics: [
      { label: "Time Saved", value: "80%" },
      { label: "Delivery Rate", value: "99.5%" },
      { label: "Response Time", value: "50%" },
      { label: "Emails/Month", value: "10k+" }
    ]
  },
  {
    id: 'kubernetes-monitoring',
    category: 'Monitoring',
    icon: Activity,
    titleKey: 'portfolio.projects.kubernetes.title',
    descriptionKey: 'portfolio.projects.kubernetes.description',
    image: "/placeholder.svg?height=200&width=300",
    technologies: [
      { name: "Kubernetes", icon: "☸️", color: "#326ce5" },
      { name: "Prometheus", icon: "📊", color: "#e6522c" },
      { name: "Grafana", icon: "📈", color: "#f46800" },
      { name: "Docker", icon: "🐳", color: "#2496ed" }
    ],
    github: "https://github.com/example/k8s-monitor",
    demo: "https://demo.k8s-monitor.com",
    caseStudy: "kubernetes-monitoring-case-study",
    progress: 100,
    completionDate: "January 2024",
    client: "CloudFirst Inc.",
    testimonial: {
      quote: "Our infrastructure visibility improved dramatically. We now catch issues before they impact users.",
      author: "Carlos Rodriguez",
      role: "DevOps Lead at CloudFirst"
    },
    challenges: [
      "Monitor complex microservices architecture",
      "Handle high-volume metrics data",
      "Provide real-time alerting"
    ],
    solutions: [
      "Implemented Prometheus federation",
      "Optimized metric collection and storage",
      "Built custom Grafana dashboards with alerting"
    ],
    results: [
      "95% reduction in MTTR",
      "100% infrastructure visibility",
      "Zero unplanned downtime in 6 months"
    ],
    metrics: [
      { label: "MTTR Reduction", value: "95%" },
      { label: "Uptime", value: "99.99%" },
      { label: "Alerts/Day", value: "0" },
      { label: "Services Monitored", value: "150+" }
    ]
  },
  {
    id: 'report-generation',
    category: 'Reporting',
    icon: FileText,
    titleKey: 'portfolio.projects.reports.title',
    descriptionKey: 'portfolio.projects.reports.description',
    image: "/placeholder.svg?height=200&width=300",
    technologies: [
      { name: "React", icon: "⚛️", color: "#61dafb" },
      { name: "Node.js", icon: "🟢", color: "#339933" },
      { name: "PDF", icon: "📄", color: "#dc3545" },
      { name: "Charts.js", icon: "📊", color: "#ff6384" }
    ],
    github: "https://github.com/example/reports",
    demo: null,
    caseStudy: "report-generation-case-study",
    progress: 100,
    completionDate: "November 2023",
    client: "DataInsights Corp",
    testimonial: {
      quote: "The automated reporting system saves us 20 hours per week and provides better insights than ever before.",
      author: "Ana Santos",
      role: "Business Analyst at DataInsights"
    },
    challenges: [
      "Generate complex PDF reports automatically",
      "Handle large datasets efficiently",
      "Provide real-time data visualization"
    ],
    solutions: [
      "Built PDF generation engine with templates",
      "Implemented data aggregation pipeline",
      "Created interactive dashboard with real-time updates"
    ],
    results: [
      "20 hours saved per week",
      "90% faster report generation",
      "Enhanced data accuracy and insights"
    ],
    metrics: [
      { label: "Time Saved", value: "20h/week" },
      { label: "Speed Improvement", value: "90%" },
      { label: "Reports Generated", value: "500+" },
      { label: "Data Accuracy", value: "99.9%" }
    ]
  }
];
