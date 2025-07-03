'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Bot, 
  Cloud, 
  Lock, 
  BarChart3, 
  Zap, 
  Users,
  Code,
  Globe,
  Database
} from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: "Intelligent Agents",
    description: "AI-powered assistants that learn and adapt to your specific needs and workflows.",
    color: "text-primary"
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Scalable infrastructure that grows with your business, ensuring reliability and performance.",
    color: "text-secondary"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance standards to protect your most sensitive data.",
    color: "text-primary"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and predictive analytics to drive informed decision-making.",
    color: "text-secondary"
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Optimized for speed with sub-second response times and 99.9% uptime guarantee.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in collaboration tools that keep your team aligned and productive.",
    color: "text-secondary"
  },
  {
    icon: Code,
    title: "Developer-First",
    description: "Comprehensive APIs and SDKs for seamless integration with your existing tools.",
    color: "text-primary"
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deployed across multiple regions for optimal performance worldwide.",
    color: "text-secondary"
  },
  {
    icon: Database,
    title: "Smart Data Management",
    description: "Intelligent data processing and storage with automated optimization.",
    color: "text-primary"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for
            <span className="text-gradient"> Modern Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale AI-powered solutions 
            with confidence and ease.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="glass-effect h-full group cursor-pointer">
                <CardHeader>
                  <motion.div 
                    className={`inline-flex ${feature.color} mb-3`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className="h-8 w-8" />
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}