
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  author: string;
  date: string;
  tags: string[];
  slug: string;
}

const Blog = () => {
  const { t } = useLanguage();

  // Sample blog posts - in a real app, this would come from a CMS or API
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: t('blog.posts.monitoring.title'),
      description: t('blog.posts.monitoring.description'),
      content: "Full content here...",
      image: "/placeholder.svg",
      author: "Enzo Trevisan",
      date: "2024-01-15",
      tags: ["monitoring", "zabbix", "automation"],
      slug: "monitoring-automation-best-practices"
    },
    {
      id: "2",
      title: t('blog.posts.kubernetes.title'),
      description: t('blog.posts.kubernetes.description'),
      content: "Full content here...",
      image: "/placeholder.svg",
      author: "Enzo Trevisan",
      date: "2024-01-10",
      tags: ["kubernetes", "devops", "containers"],
      slug: "kubernetes-monitoring-guide"
    },
    {
      id: "3",
      title: t('blog.posts.infrastructure.title'),
      description: t('blog.posts.infrastructure.description'),
      content: "Full content here...",
      image: "/placeholder.svg",
      author: "Enzo Trevisan",
      date: "2024-01-05",
      tags: ["infrastructure", "cloud", "scalability"],
      slug: "scaling-infrastructure-tips"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <SEO 
        title={t('blog.meta.title')}
        description={t('blog.meta.description')}
      />
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-primary mb-4">{t('blog.title')}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-white">
                          {post.tags[0]}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
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
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(1).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-accent font-medium group-hover:gap-3 transition-all">
                        <span>{t('blog.readMore')}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
