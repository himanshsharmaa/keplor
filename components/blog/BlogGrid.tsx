'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is transforming the way we build and deploy software applications.",
    author: "Sarah Chen",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    category: "AI & Machine Learning",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Introducing Keplor 2.0: Enhanced Performance",
    excerpt: "Our latest platform update brings 3x faster processing speeds and new enterprise features.",
    author: "Marcus Rodriguez",
    date: "Jan 12, 2025",
    readTime: "3 min read",
    category: "Product Updates",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Building Your First AI Application",
    excerpt: "A step-by-step guide to creating your first AI-powered application using Keplor's APIs.",
    author: "Dr. Emily Watson",
    date: "Jan 10, 2025",
    readTime: "8 min read",
    category: "Developer Guides",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "How TechCorp Scaled with Keplor",
    excerpt: "Learn how TechCorp reduced processing time by 70% and improved customer satisfaction using our platform.",
    author: "Alex Johnson",
    date: "Jan 8, 2025",
    readTime: "6 min read",
    category: "Customer Stories",
    image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Understanding Large Language Models",
    excerpt: "A deep dive into how LLMs work and their applications in modern AI systems.",
    author: "Dr. Emily Watson",
    date: "Jan 5, 2025",
    readTime: "10 min read",
    category: "AI & Machine Learning",
    image: "https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "API Security Best Practices",
    excerpt: "Essential security measures every developer should implement when working with AI APIs.",
    author: "David Kim",
    date: "Jan 3, 2025",
    readTime: "7 min read",
    category: "Developer Guides",
    image: "https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export default function BlogGrid() {
  return (
    <div className="lg:col-span-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="glass-effect hover-lift h-full cursor-pointer group">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </div>
    </div>
  );
}