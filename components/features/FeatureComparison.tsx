'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: "AI Model Training",
    keplor: true,
    competitor1: true,
    competitor2: false
  },
  {
    feature: "Real-time Analytics",
    keplor: true,
    competitor1: false,
    competitor2: true
  },
  {
    feature: "Enterprise Security",
    keplor: true,
    competitor1: true,
    competitor2: true
  },
  {
    feature: "Custom Integrations",
    keplor: true,
    competitor1: false,
    competitor2: false
  },
  {
    feature: "24/7 Support",
    keplor: true,
    competitor1: true,
    competitor2: false
  },
  {
    feature: "Multi-region Deployment",
    keplor: true,
    competitor1: false,
    competitor2: true
  },
  {
    feature: "Advanced Workflow Automation",
    keplor: true,
    competitor1: false,
    competitor2: false
  },
  {
    feature: "White-label Solutions",
    keplor: true,
    competitor1: false,
    competitor2: false
  }
];

export default function FeatureComparison() {
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
            How Keplor
            <span className="text-gradient"> Compares</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why leading companies choose Keplor over the competition for their AI needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass-effect overflow-hidden">
            <CardHeader>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div></div>
                <CardTitle className="text-primary">Keplor</CardTitle>
                <CardTitle className="text-muted-foreground">Competitor A</CardTitle>
                <CardTitle className="text-muted-foreground">Competitor B</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-4 gap-4 items-center py-3 border-b border-border/50 last:border-b-0"
                  >
                    <div className="font-medium">{item.feature}</div>
                    <div className="text-center">
                      {item.keplor ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </div>
                    <div className="text-center">
                      {item.competitor1 ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </div>
                    <div className="text-center">
                      {item.competitor2 ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}