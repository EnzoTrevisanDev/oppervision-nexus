import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      labelKey: 'contact.info.email.label',
      valueKey: 'contact.info.email.value',
      href: "mailto:contato@oppervision.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      labelKey: 'contact.info.phone.label',
      valueKey: 'contact.info.phone.value',
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      labelKey: 'contact.info.address.label',
      valueKey: 'contact.info.address.value',
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com",
      labelKey: "contact.social.linkedin"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://instagram.com",
      labelKey: "contact.social.instagram"
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com",
      labelKey: "contact.social.github"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-primary mb-4">{t('contact.title')}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-primary mb-6">{t('contact.form.title')}</h2>
                <ContactForm />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-primary mb-6">{t('contact.info.title')}</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="p-2 bg-accent/10 rounded-lg text-accent">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{t(info.labelKey)}</p>
                        <p className="text-gray-600">{t(info.valueKey)}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-primary mb-6">{t('contact.social.title')}</h2>
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-accent/10 rounded-lg text-accent hover:bg-accent/20 transition-colors"
                      aria-label={t(social.labelKey)}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;