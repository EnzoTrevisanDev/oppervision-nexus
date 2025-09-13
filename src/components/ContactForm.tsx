import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const { t } = useLanguage();
  const phoneNumber = "+5519971018277";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    const whatsappMessage = `
Olá! Gostaria de solicitar uma consultoria.

*Nome:* ${data.name}
*Email:* ${data.email}
${data.phone ? `*Telefone:* ${data.phone}` : ''}
*Mensagem:* ${data.message}

Enviado através do site oppervision.com.br
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage.trim());
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          {t('contact.form.name')} *
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          {t('contact.form.email')} *
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          {t('contact.form.phone')}
        </label>
        <Input
          type="tel"
          id="phone"
          name="phone"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          {t('contact.form.message')} *
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={4}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-[#25D366] hover:bg-[#22c55e] text-white"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        {t('contact.form.submit')}
      </Button>
    </form>
  );
};

export default ContactForm;