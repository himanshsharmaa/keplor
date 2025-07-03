'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Lightbulb, Globe, Heart, Zap } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Transparency",
    description: "We believe in open communication and honest practices in everything we do."
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Our users' success is our success. Every feature is built with their needs in mind."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge AI solutions."
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "AI should be available to everyone, regardless of background or resources."
  },
  {
    icon: Heart,
    title: "Ethical AI",
    description: "We're committed to developing AI that benefits humanity and respects privacy."
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our platform and service."
  }
];

export default function AboutValues() {
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
            Our Core
            <span className="text-gradient"> Values</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide our decisions and shape the culture at Keplor.
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