'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Bot, Cloud, Lock, BarChart3, Zap, Users, Code, Globe, Database,
  Cpu, Network, Shield, Workflow, Brain, Layers, Settings, Monitor
} from 'lucide-react';

const featureCategories = [
  {
    title: "AI & Machine Learning",
    description: "Advanced AI capabilities at your fingertips",
    features: [
      {
        icon: Bot,
        title: "Intelligent Agents",
        description: "AI-powered assistants that learn and adapt to your specific needs and workflows."
      },
      {
        icon: Brain,
        title: "Neural Networks",
        description: "Pre-trained models and custom neural network architectures for any use case."
      },
      {
        icon: Workflow,
        title: "AutoML Pipeline",
        description: "Automated machine learning workflows that optimize model performance."
      }
    ]
  },
  {
    title: "Infrastructure & Performance",
    description: "Scalable, reliable, and lightning-fast platform",
    features: [
      {
        icon: Cloud,
        title: "Cloud-Native Architecture",
        description: "Scalable infrastructure that grows with your business needs."
      },
      {
        icon: Zap,
        title: "Lightning Performance",
        description: "Optimized for speed with sub-second response times and 99.9% uptime."
      },
      {
        icon: Globe,
        title: "Global Scale",
        description: "Deployed across multiple regions for optimal performance worldwide."
      }
    ]
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security you can trust",
    features: [
      {
        icon: Lock,
        title: "Enterprise Security",
        description: "Bank-grade encryption and compliance standards to protect your data."
      },
      {
        icon: Shield,
        title: "Data Protection",
        description: "Advanced privacy controls and GDPR compliance built-in."
      },
      {
        icon: Monitor,
        title: "Audit & Monitoring",
        description: "Comprehensive logging and monitoring for security and compliance."
      }
    ]
  },
  {
    title: "Analytics & Insights",
    description: "Data-driven decision making made simple",
    features: [
      {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Real-time insights and predictive analytics for informed decisions."
      },
      {
        icon: Database,
        title: "Smart Data Management",
        description: "Intelligent data processing and storage with automated optimization."
      },
      {
        icon: Cpu,
        title: "Performance Metrics",
        description: "Detailed performance analytics and optimization recommendations."
      }
    ]
  },
  {
    title: "Developer Experience",
    description: "Built by developers, for developers",
    features: [
      {
        icon: Code,
        title: "Developer-First APIs",
        description: "Comprehensive APIs and SDKs for seamless integration."
      },
      {
        icon: Layers,
        title: "Modular Architecture",
        description: "Flexible, composable components that fit your existing stack."
      },
      {
        icon: Settings,
        title: "Custom Configurations",
        description: "Extensive customization options for your specific requirements."
      }
    ]
  },
  {
    title: "Collaboration & Teams",
    description: "Work better together with powerful collaboration tools",
    features: [
      {
        icon: Users,
        title: "Team Collaboration",
        description: "Built-in collaboration tools that keep your team aligned."
      },
      {
        icon: Network,
        title: "Workspace Management",
        description: "Organize projects and manage team access with granular controls."
      },
      {
        icon: Workflow,
        title: "Workflow Automation",
        description: "Automate repetitive tasks and streamline your development process."
      }
    ]
  }
];

export default function FeaturesList() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {featureCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: (categoryIndex * 0.1) + (featureIndex * 0.1) 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="glass-effect hover-lift h-full group">
                    <CardHeader>
                      <motion.div 
                        className="inline-flex text-primary mb-3"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <feature.icon className="h-8 w-8" />
                      </motion.div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}