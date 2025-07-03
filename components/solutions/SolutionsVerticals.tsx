'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, GraduationCap, Building2, ArrowRight } from 'lucide-react';

const verticals = [
  {
    icon: Palette,
    title: "For Creators",
    description: "Content generation, design automation, and creative workflow optimization",
    features: [
      "AI-powered content creation",
      "Automated social media scheduling",
      "Design asset generation",
      "Brand voice consistency"
    ],
    cta: "Explore Creator Tools"
  },
  {
    icon: GraduationCap,
    title: "For Educators",
    description: "Personalized learning experiences and educational content automation",
    features: [
      "Adaptive learning paths",
      "Automated assessment creation",
      "Student progress tracking",
      "Curriculum optimization"
    ],
    cta: "Discover Education AI"
  },
  {
    icon: Building2,
    title: "For SaaS Teams",
    description: "Product development acceleration and customer experience enhancement",
    features: [
      "Feature development automation",
      "Customer support AI",
      "Data analysis and insights",
      "Performance optimization"
    ],
    cta: "Scale Your SaaS"
  }
];

export default function SolutionsVerticals() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solutions by
            <span className="text-gradient"> Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized AI tools and workflows designed for your specific industry needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {verticals.map((vertical, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-effect h-full group">
                <CardHeader>
                  <vertical.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {vertical.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {vertical.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {vertical.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full group">
                    {vertical.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}