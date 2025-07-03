'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <div className="glass-effect px-4 py-2 rounded-full flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Engineering Intelligent Software</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            AI SaaS Solutions
            <br />
            <span className="text-gradient">Engineered for Everyone</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Scalable, intelligent automation tools for creators, startups, and digital teams. 
            Cloud-native, modular, and built to scale with your ambitions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="hover-lift group">
              Start Building with AI
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/features">
              <Button variant="outline" size="lg" className="hover-lift">
                Explore Features
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <motion.div 
              className="glass-effect p-6 rounded-xl hover-lift"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Zap className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Automate Smarter</h3>
              <p className="text-sm text-muted-foreground">
                Intelligent workflows that adapt and scale
              </p>
            </motion.div>
            <motion.div 
              className="glass-effect p-6 rounded-xl hover-lift"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Shield className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Secure by Design</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade security standards
              </p>
            </motion.div>
            <motion.div 
              className="glass-effect p-6 rounded-xl hover-lift"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">AI-First Design</h3>
              <p className="text-sm text-muted-foreground">
                Built for intelligent, outcome-driven workflows
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}