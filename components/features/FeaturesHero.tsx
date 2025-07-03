'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, Bot } from 'lucide-react';

export default function FeaturesHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
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
              <Bot className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Comprehensive AI Platform</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Powerful Features for
            <br />
            <span className="text-gradient">Modern AI Development</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Discover the comprehensive suite of AI tools and capabilities that make Keplor 
            the preferred choice for developers, businesses, and creators worldwide.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="glass-effect p-6 rounded-xl hover-lift">
              <Zap className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">High Performance</h3>
              <p className="text-sm text-muted-foreground">
                Sub-second response times
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl hover-lift">
              <Shield className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Enterprise Ready</h3>
              <p className="text-sm text-muted-foreground">
                Bank-grade security standards
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl hover-lift">
              <Sparkles className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">AI-First Design</h3>
              <p className="text-sm text-muted-foreground">
                Built for intelligent workflows
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}