'use client';

import { motion } from 'framer-motion';
import { Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CareersHero() {
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
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Join Our Team</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Build the Future of
            <br />
            <span className="text-gradient">AI with Us</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Join a team of passionate innovators working to democratize AI and create 
            technology that empowers everyone.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="hover-lift">
              View Open Positions
            </Button>
            <Button variant="outline" size="lg" className="hover-lift">
              Learn About Our Culture
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Team Members</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Countries</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Remote Friendly</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}