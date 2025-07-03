'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Users, 
  Calendar,
  Mail,
  Image
} from 'lucide-react';

const workflows = [
  {
    icon: FileText,
    title: "Content Automation",
    description: "Generate blog posts, social media content, and marketing materials automatically",
    category: "Content"
  },
  {
    icon: MessageSquare,
    title: "Customer Support AI",
    description: "Intelligent chatbots and support ticket automation for 24/7 customer service",
    category: "Support"
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Automated insights and reporting from your business data and metrics",
    category: "Analytics"
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline repetitive tasks and workflows with intelligent automation",
    category: "Automation"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "AI-powered project management and team coordination tools",
    category: "Collaboration"
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Intelligent calendar management and meeting optimization",
    category: "Productivity"
  },
  {
    icon: Mail,
    title: "Email Intelligence",
    description: "Automated email responses and intelligent inbox management",
    category: "Communication"
  },
  {
    icon: Image,
    title: "Visual Content",
    description: "AI-generated images, graphics, and visual assets for your brand",
    category: "Design"
  }
];

export default function SolutionsWorkflows() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular
            <span className="text-gradient"> Workflows</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pre-built automation workflows that you can deploy instantly to streamline your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflows.map((workflow, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-effect h-full group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <workflow.icon className="h-8 w-8 text-primary" />
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {workflow.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {workflow.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">
                    {workflow.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}