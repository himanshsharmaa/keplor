'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const timeline = [
  {
    year: "2021",
    title: "Company Founded",
    description: "Keplor was founded with the vision of making AI accessible to everyone."
  },
  {
    year: "2022",
    title: "First Product Launch",
    description: "Launched our initial AI platform with basic text generation capabilities."
  },
  {
    year: "2023",
    title: "Series A Funding",
    description: "Raised $15M Series A to expand our team and enhance our platform."
  },
  {
    year: "2024",
    title: "Enterprise Launch",
    description: "Introduced enterprise features and achieved SOC 2 compliance."
  },
  {
    year: "2025",
    title: "Global Expansion",
    description: "Expanding to serve customers worldwide with multi-region deployment."
  }
];

export default function AboutTimeline() {
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
            Our
            <span className="text-gradient"> Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From a small startup to a leading AI platform, here's how we've grown.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <Card className="glass-effect hover-lift flex-1">
                    <CardHeader>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}