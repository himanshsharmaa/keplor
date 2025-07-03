'use client';

import { motion } from 'framer-motion';
import { Target, Sparkles } from 'lucide-react';

export default function SolutionsHero() {
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
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Tailored Solutions</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            AI Solutions for
            <br />
            <span className="text-gradient">Every Workflow</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Whether you're a creator, educator, or SaaS team, Keplor provides intelligent 
            automation tools designed for your specific needs and workflows.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <p className="text-sm text-muted-foreground">Target Verticals</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Workflow Templates</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">AI Automation</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}