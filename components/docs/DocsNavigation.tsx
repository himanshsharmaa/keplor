'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BookOpen, 
  Code, 
  Zap, 
  Settings, 
  Shield, 
  HelpCircle,
  ChevronRight
} from 'lucide-react';

const docSections = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: [
      "Quick Start Guide",
      "Authentication",
      "First API Call",
      "SDK Installation"
    ]
  },
  {
    title: "API Reference",
    icon: Code,
    items: [
      "REST API",
      "GraphQL API",
      "Webhooks",
      "Rate Limits"
    ]
  },
  {
    title: "SDKs & Libraries",
    icon: Zap,
    items: [
      "JavaScript/Node.js",
      "Python",
      "Go",
      "PHP"
    ]
  },
  {
    title: "Configuration",
    icon: Settings,
    items: [
      "Environment Setup",
      "Custom Models",
      "Integrations",
      "Monitoring"
    ]
  },
  {
    title: "Security",
    icon: Shield,
    items: [
      "Authentication",
      "API Keys",
      "Permissions",
      "Best Practices"
    ]
  },
  {
    title: "Support",
    icon: HelpCircle,
    items: [
      "FAQ",
      "Troubleshooting",
      "Contact Support",
      "Community"
    ]
  }
];

export default function DocsNavigation() {
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
            <CardTitle>Documentation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {docSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-2 mb-3">
                  <section.icon className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold text-sm">{section.title}</h3>
                </div>
                <ul className="space-y-2 ml-6">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a 
                        href="#" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1 group"
                      >
                        <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        <span>{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}