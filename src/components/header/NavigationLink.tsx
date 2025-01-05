import { Link } from "react-router-dom";

interface NavigationLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavigationLink = ({ to, children, onClick }: NavigationLinkProps) => (
  <Link 
    to={to} 
    className="text-white/80 hover:text-white font-medium transition-colors px-2 py-1"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default NavigationLink;