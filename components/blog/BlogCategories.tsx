'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Bot, 
  TrendingUp, 
  Code, 
  Lightbulb, 
  Users, 
  Zap 
} from 'lucide-react';

const categories = [
  {
    name: "AI & Machine Learning",
    icon: Bot,
    count: 24
  },
  {
    name: "Product Updates",
    icon: TrendingUp,
    count: 18
  },
  {
    name: "Developer Guides",
    icon: Code,
    count: 15
  },
  {
    name: "Industry Insights",
    icon: Lightbulb,
    count: 12
  },
  {
    name: "Customer Stories",
    icon: Users,
    count: 8
  },
  {
    name: "Performance",
    icon: Zap,
    count: 6
  }
];

export default function BlogCategories() {
  return (
    <div className="lg:col-span-1">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-24"
      >
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {categories.map((category, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <category.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm group-hover:text-primary transition-colors">
                    {category.name}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {category.count}
                </span>
              </motion.a>
            ))}
          </CardContent>
        </Card>

        <Card className="glass-effect mt-6">
          <CardHeader>
            <CardTitle>Recent Tags</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {['AI', 'Machine Learning', 'API', 'Tutorial', 'Performance', 'Security'].map((tag, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-3 py-1 bg-muted rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tag}
                </motion.a>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}