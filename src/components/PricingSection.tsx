import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "./ui/use-toast";

const packages = [
  {
    name: "basicmonitoring",
    price: "$500",
    period: "/month",
    description: "Perfect for small businesses starting with automation",
    features: [
      "Monitoring of up to 10 hosts",
      "Basic alert configuration",
      "Email notifications",
      "24/7 system monitoring",
      "Monthly performance reports"
    ],
    highlight: false
  },
  {
    name: "advancedinfrastructure",
    price: "$1,200",
    period: "/month",
    description: "Ideal for growing companies needing robust infrastructure",
    features: [
      "Monitoring of up to 25 hosts",
      "Advanced alert configuration",
      "Custom Grafana dashboards",
      "Kubernetes basic setup",
      "Weekly performance reports",
      "Priority support response"
    ],
    highlight: true
  },
  {
    name: "enterprisesolutions",
    price: "Custom",
    period: "",
    description: "Full-scale solution for enterprise requirements",
    features: [
      "Unlimited host monitoring",
      "Custom automation solutions",
      "Advanced Kubernetes management",
      "24/7 premium support",
      "Dedicated account manager",
      "Custom integration development"
    ],
    highlight: false
  }
];

const PricingSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleGetStarted = (packageName: string) => {
    console.log(`Quote requested for package: ${packageName}`);
    toast({
      title: t('contact.success'),
      duration: 5000,
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{t('pricing.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative ${
                pkg.highlight 
                  ? 'border-accent shadow-lg scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{t(`pricing.${pkg.name}.title`)}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-600">{pkg.period}</span>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    pkg.highlight 
                      ? 'bg-accent hover:bg-accent/90' 
                      : ''
                  }`}
                  onClick={() => handleGetStarted(pkg.name)}
                >
                  {pkg.price === "Custom" ? t('pricing.cta.contact') : t('pricing.cta.start')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;