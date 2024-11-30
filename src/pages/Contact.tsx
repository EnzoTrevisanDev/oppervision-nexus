import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => setIsSubmitting(false), 1000);
      };
    return(
      <div className="min-h-screen bg-secondary">
        < Header />
          <section id="contact" className="py-20 bg-secondary">
          <div className="container">
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-primary">Entre em Contato</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
}
export default Contact;