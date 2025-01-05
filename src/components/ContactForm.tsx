import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { sendEmail } from "@/api/sendEmail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    try {
      await sendEmail(data);
      toast({
        title: t('contact.success.title'),
        description: t('contact.success.description'),
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: t('contact.error.title'),
        description: t('contact.error.description'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
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
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
      </Button>
    </form>
  );
};

export default ContactForm;