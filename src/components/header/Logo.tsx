import { Link } from "react-router-dom";

const Logo = () => (
  <Link 
    to="/" 
    className="flex items-center gap-3 hover:opacity-90 transition-opacity"
  >
    <img 
      src="/lovable-uploads/ae0c9ab8-14e8-47d7-abff-65cdffa50371.png" 
      alt="Oppervision Logo" 
      className="h-12 w-12 object-contain"
    />
    <span className="text-2xl font-bold text-white">
      Oppervision
    </span>
  </Link>
);

export default Logo;