'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Heart, 
  Plane, 
  GraduationCap, 
  Home, 
  DollarSign, 
  Coffee,
  Laptop,
  Calendar
} from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs."
  },
  {
    icon: Plane,
    title: "Unlimited PTO",
    description: "Take the time you need to recharge with our flexible time-off policy."
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "$3,000 annual budget for courses, conferences, and professional development."
  },
  {
    icon: Home,
    title: "Remote-First",
    description: "Work from anywhere with flexible hours and home office setup allowance."
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Market-leading salaries with equity participation for all employees."
  },
  {
    icon: Coffee,
    title: "Team Events",
    description: "Regular team building activities, retreats, and social events."
  },
  {
    icon: Laptop,
    title: "Top-Tier Equipment",
    description: "Latest MacBook Pro, monitor, and any tools you need to do your best work."
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Core hours with flexibility to work when you're most productive."
  }
];

export default function CareersBenefits() {
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
            Benefits &
            <span className="text-gradient"> Perks</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in taking care of our team with comprehensive benefits and perks 
            that support your personal and professional growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-effect hover-lift h-full text-center">
                <CardHeader>
                  <benefit.icon className="h-8 w-8 text-primary mb-3 mx-auto" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">
                    {benefit.description}
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