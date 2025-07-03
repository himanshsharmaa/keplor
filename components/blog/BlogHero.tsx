'use client';

import { motion } from 'framer-motion';
import { PenTool, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function BlogHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
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
              <PenTool className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Insights & Updates</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Keplor
            <span className="text-gradient"> Blog</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Stay updated with the latest AI trends, product updates, and insights 
            from our team of experts.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-md mx-auto relative"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search articles..." 
              className="pl-10 glass-effect"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}