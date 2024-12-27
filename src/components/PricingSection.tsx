import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const packages = [
  {
    name: "Basic Monitoring",
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
    name: "Advanced Infrastructure",
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
    name: "Enterprise Solutions",
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
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Transparent Pricing Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core features with different levels of support and customization.
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
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
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
                >
                  {pkg.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Button variant="outline">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;