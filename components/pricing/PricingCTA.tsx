'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function PricingCTA() {
  return (
    <section className="py-20 bg-gradient-to-t from-primary/10 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="glass-effect px-4 py-2 rounded-full flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Start Your Journey</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get
            <span className="text-gradient"> Started?</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers and businesses who trust Keplor for their AI needs. 
            Start your free trial today and experience the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-lift group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="hover-lift">
              Contact Sales
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}