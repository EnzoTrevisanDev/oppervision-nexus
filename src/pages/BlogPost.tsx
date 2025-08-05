
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { t } = useLanguage();
  const { slug } = useParams();

  // In a real app, you'd fetch the post based on the slug
  const post = {
    title: "Monitoring Automation Best Practices",
    description: "Learn how to implement effective monitoring automation for your infrastructure",
    content: `
      <h2>Introduction</h2>
      <p>Monitoring automation is crucial for maintaining reliable IT infrastructure. In this comprehensive guide, we'll explore the best practices for implementing automated monitoring solutions.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li>Proactive issue detection</li>
        <li>Reduced downtime</li>
        <li>Improved system reliability</li>
        <li>Better resource optimization</li>
      </ul>
      
      <h2>Tools and Technologies</h2>
      <p>We'll cover popular monitoring tools including Zabbix, Prometheus, and Grafana, and how to integrate them effectively.</p>
      
      <h2>Implementation Strategy</h2>
      <p>A step-by-step approach to implementing monitoring automation in your organization.</p>
    `,
    image: "/placeholder.svg",
    author: "Enzo Trevisan",
    date: "2024-01-15",
    tags: ["monitoring", "zabbix", "automation", "infrastructure"]
  };

  return (
    <div className="min-h-screen bg-secondary">
      <SEO 
        title={`${post.title} | ${t('meta.title')}`}
        description={post.description}
      />
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('blog.backToBlog')}
              </Button>
            </Link>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              
              <div className="p-8">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {post.title}
                </h1>

                <p className="text-lg text-gray-600 mb-6">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <Badge key={tag} className="bg-accent/10 text-accent hover:bg-accent/20">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
