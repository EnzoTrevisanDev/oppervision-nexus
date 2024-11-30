import { motion } from "framer-motion";

interface TestimonialProps {
  name: string;
  role: string;
  content: string
}

const TestimonialCard = ({ name, role, content }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <p className="text-gray-600 mb-4 mt-4">{content}</p>
      <div>
        <p className="font-semibold text-primary">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;