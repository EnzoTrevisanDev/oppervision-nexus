import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-white">
      <div className="container">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-accent transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-center mt-6 text-sm text-gray-400">
          © 2024 Oppervision. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;