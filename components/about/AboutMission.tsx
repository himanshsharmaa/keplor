'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

const missions = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To democratize artificial intelligence and make advanced AI capabilities accessible to everyone, regardless of technical expertise or company size."
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "A world where AI enhances human creativity and productivity, enabling people to focus on what matters most while intelligent systems handle the rest."
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "We believe in transparency, ethical AI development, and putting our users first. Every decision we make is guided by these core principles."
  }
];

export default function AboutMission() {
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
            What Drives
            <span className="text-gradient"> Us Forward</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our mission, vision, and values guide everything we do at Keplor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-effect hover-lift h-full text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <item.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}