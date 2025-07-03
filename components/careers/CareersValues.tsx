'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Lightbulb, Users, Zap, Globe, Shield } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "People First",
    description: "We prioritize the well-being and growth of our team members above all else."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We encourage creative thinking and bold ideas that push the boundaries of AI."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best solutions come from diverse perspectives working together."
  },
  {
    icon: Zap,
    title: "Impact",
    description: "Every role at Keplor contributes to our mission of democratizing AI technology."
  },
  {
    icon: Globe,
    title: "Inclusivity",
    description: "We foster an environment where everyone feels valued and can bring their authentic self."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical principles in everything we do."
  }
];

export default function CareersValues() {
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
            Our
            <span className="text-gradient"> Culture & Values</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide how we work together and build amazing products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-effect hover-lift h-full">
                <CardHeader>
                  <value.icon className="h-8 w-8 text-primary mb-3" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
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