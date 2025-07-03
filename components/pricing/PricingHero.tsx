'use client';

import { motion } from 'framer-motion';
import { DollarSign, Sparkles } from 'lucide-react';

export default function PricingHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <div className="glass-effect px-4 py-2 rounded-full flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Transparent Pricing</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Simple, Transparent
            <br />
            <span className="text-gradient">Pricing for Everyone</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Choose the perfect plan for your needs. Start free, scale as you grow, 
            and only pay for what you use.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}