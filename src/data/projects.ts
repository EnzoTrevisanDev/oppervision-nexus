
import { Mail, Activity, FileText, BarChart2, Server, Database, Shield, Code, Cloud, Monitor } from "lucide-react";

export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface Project {
  id: string;
  category: string;
  icon: React.ReactNode;
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
    icon: <Mail className="w-6 h-6" />,
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
    icon: <Activity className="w-6 h-6" />,
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
    icon: <FileText className="w-6 h-6" />,
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
  },
  {
    id: 'traffic-dashboard',
    category: 'Dashboard',
    icon: <BarChart2 className="w-6 h-6" />,
    titleKey: 'portfolio.projects.traffic.title',
    descriptionKey: 'portfolio.projects.traffic.description',
    image: "/placeholder.svg?height=200&width=300",
    technologies: [
      { name: "Python", icon: "🐍", color: "#3776ab" },
      { name: "Streamlit", icon: "🚀", color: "#ff4b4b" },
      { name: "Analytics", icon: "📈", color: "#4ade80" },
      { name: "Real-time", icon: "⚡", color: "#fbbf24" }
    ],
    github: "https://github.com/example/traffic-dashboard",
    demo: null,
    inDevelopment: true,
    progress: 75,
    completionDate: "March 2024 (Expected)",
    client: "NetworkPro Solutions",
    challenges: [
      "Process high-volume network traffic data",
      "Provide real-time visualization",
      "Ensure scalable architecture"
    ],
    solutions: [
      "Implemented data streaming with Apache Kafka",
      "Built real-time dashboard with Streamlit",
      "Designed microservices architecture"
    ]
  },
  {
    id: 'infrastructure-automation',
    category: 'Automation',
    icon: <Server className="w-6 h-6" />,
    titleKey: 'portfolio.projects.infrastructure.title',
    descriptionKey: 'portfolio.projects.infrastructure.description',
    image: "/placeholder.svg?height=200&width=300",
    technologies: [
      { name: "Terraform", icon: "🏗️", color: "#7b42bc" },
      { name: "Ansible", icon: "🔧", color: "#ee0000" },
      { name: "AWS", icon: "☁️", color: "#ff9900" },
      { name: "CI/CD", icon: "🔄", color: "#2196f3" }
    ],
    github: "https://github.com/example/infrastructure-automation",
    demo: null,
    caseStudy: "infrastructure-automation-case-study",
    progress: 100,
    completionDate: "October 2023",
    client: "ScaleUp Technologies",
    testimonial: {
      quote: "Infrastructure deployment time reduced from days to minutes. This automation transformed our operations.",
      author: "Pedro Lima",
      role: "CTO at ScaleUp Technologies"
    },
    metrics: [
      { label: "Deployment Time", value: "99%" },
      { label: "Error Reduction", value: "95%" },
      { label: "Cost Savings", value: "40%" },
      { label: "Environments", value: "50+" }
    ]
  },
  {
    id: 'database-monitoring',
    category: 'Monitoring',
    icon: <Database className="w-6 h-6" />,
    titleKey: 'portfolio.projects.database.title',
    descriptionKey: 'portfolio.projects.database.description',
    image: "/placeholder.svg?height=200&width=300",
    technologies: [
      { name: "PostgreSQL", icon: "🐘", color: "#336791" },
      { name: "Zabbix", icon: "📊", color: "#d40000" },
      { name: "Python", icon: "🐍", color: "#3776ab" },
      { name: "SQL", icon: "🗃️", color: "#4479a1" }
    ],
    github: "https://github.com/example/database-monitoring",
    demo: "https://demo.db-monitor.com",
    progress: 100,
    completionDate: "September 2023",
    client: "DataFlow Systems",
    metrics: [
      { label: "Query Performance", value: "60%" },
      { label: "Downtime Reduction", value: "85%" },
      { label: "Databases Monitored", value: "25+" },
      { label: "Alerts Accuracy", value: "98%" }
    ]
  },
  {
    id: 'security-automation',
    category: 'Security',
    icon: <Shield className="w-6 h-6" />,
    titleKey: 'portfolio.projects.security.title',
    descriptionKey: 'portfolio.projects.security.description',
    image: "/placeholder.svg?height=200&width=300",
    technologies: [
      { name: "Python", icon: "🐍", color: "#3776ab" },
      { name: "OpenVAS", icon: "🛡️", color: "#4caf50" },
      { name: "SIEM", icon: "🔍", color: "#ff5722" },
      { name: "Automation", icon: "⚡", color: "#ffc107" }
    ],
    github: "https://github.com/example/security-automation",
    demo: null,
    inDevelopment: true,
    progress: 60,
    completionDate: "April 2024 (Expected)",
    client: "SecureTech Corp"
  },
  {
    id: 'api-gateway',
    category: 'Infrastructure',
    icon: <Code className="w-6 h-6" />,
    titleKey: 'portfolio.projects.api.title',
    descriptionKey: 'portfolio.projects.api.description',
    image: "/placeholder.svg?height=200&width=300",
    technologies: [
      { name: "Node.js", icon: "🟢", color: "#339933" },
      { name: "Redis", icon: "🔴", color: "#dc382d" },
      { name: "Docker", icon: "🐳", color: "#2496ed" },
      { name: "Kong", icon: "🦍", color: "#003459" }
    ],
    github: "https://github.com/example/api-gateway",
    demo: "https://api.example.com",
    progress: 100,
    completionDate: "August 2023",
    client: "MicroServices Ltd",
    metrics: [
      { label: "API Response Time", value: "50ms" },
      { label: "Throughput", value: "10k/s" },
      { label: "Uptime", value: "99.99%" },
      { label: "Services Connected", value: "100+" }
    ]
  },
  {
    id: 'cloud-migration',
    category: 'Cloud',
    icon: <Cloud className="w-6 h-6" />,
    titleKey: 'portfolio.projects.cloud.title',
    descriptionKey: 'portfolio.projects.cloud.description',
    image: "/placeholder.svg?height=200&width=300",
    technologies: [
      { name: "AWS", icon: "☁️", color: "#ff9900" },
      { name: "Terraform", icon: "🏗️", color: "#7b42bc" },
      { name: "Kubernetes", icon: "☸️", color: "#326ce5" },
      { name: "Migration", icon: "🚀", color: "#4caf50" }
    ],
    github: "https://github.com/example/cloud-migration",
    demo: null,
    caseStudy: "cloud-migration-case-study",
    progress: 100,
    completionDate: "July 2023",
    client: "LegacyCorp Industries",
    testimonial: {
      quote: "The cloud migration was seamless and resulted in significant cost savings and performance improvements.",
      author: "Roberto Silva",
      role: "IT Director at LegacyCorp"
    },
    metrics: [
      { label: "Cost Reduction", value: "45%" },
      { label: "Performance Gain", value: "300%" },
      { label: "Migration Time", value: "30 days" },
      { label: "Zero Downtime", value: "✓" }
    ]
  },
  {
    id: 'log-analytics',
    category: 'Analytics',
    icon: <Monitor className="w-6 h-6" />,
    titleKey: 'portfolio.projects.logs.title',
    descriptionKey: 'portfolio.projects.logs.description',
    image: "/placeholder.svg?height=200&width=300",
    technologies: [
      { name: "ELK Stack", icon: "📊", color: "#005571" },
      { name: "Kibana", icon: "📈", color: "#e8478b" },
      { name: "Logstash", icon: "🔄", color: "#3ebeb0" },
      { name: "Elasticsearch", icon: "🔍", color: "#fec514" }
    ],
    github: "https://github.com/example/log-analytics",
    demo: "https://logs.example.com",
    progress: 100,
    completionDate: "June 2023",
    client: "AnalyticsPro Inc",
    metrics: [
      { label: "Log Processing", value: "1TB/day" },
      { label: "Search Speed", value: "100ms" },
      { label: "Data Retention", value: "90 days" },
      { label: "Dashboards", value: "25+" }
    ]
  }
];
