import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const TechnologyShowcase = () => {
  const { t } = useLanguage();

  const technologies = [
    {
      name: "Datadog",
      category: "Monitoring",
      logo: "https://cdn.worldvectorlogo.com/logos/datadog.svg"
    },
    {
      name: "Terraform",
      category: "Infrastructure as Code",
      logo: "https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg"
    },
    {
      name: "Ansible",
      category: "Configuration Management",
      logo: "https://cdn.worldvectorlogo.com/logos/ansible.svg"
    },
    {
      name: "AWS",
      category: "Cloud Platform",
      logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg"
    },
    {
      name: "Google Cloud",
      category: "Cloud Platform", 
      logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg"
    },
    {
      name: "Kubernetes",
      category: "Container Orchestration",
      logo: "https://cdn.worldvectorlogo.com/logos/kubernetes.svg"
    },
    {
      name: "Docker",
      category: "Containerization",
      logo: "https://cdn.worldvectorlogo.com/logos/docker.svg"
    },
    {
      name: "Prometheus",
      category: "Monitoring",
      logo: "https://cdn.worldvectorlogo.com/logos/prometheus.svg"
    },
    {
      name: "Grafana",
      category: "Visualization",
      logo: "https://cdn.worldvectorlogo.com/logos/grafana.svg"
    },
    {
      name: "Zabbix",
      category: "Network Monitoring",
      logo: "https://assets.zabbix.com/img/logo/zabbix_logo_500x131.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">{t('tech.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('tech.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center p-4 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{tech.name.charAt(0)}</span>
                </div>
              </div>
              <h3 className="font-semibold text-sm text-center text-primary">
                {tech.name}
              </h3>
              <p className="text-xs text-muted-foreground text-center mt-1">
                {tech.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;