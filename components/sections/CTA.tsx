'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-t from-primary/10 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-effect rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center mb-6"
            >
              <div className="glass-effect px-4 py-2 rounded-full flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Start Free</span>
              </div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Start Building with
              <span className="text-gradient"> AI Today</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Join thousands of creators, startups, and digital teams who are already 
              automating smarter with Keplor's intelligent solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8"
            >
              <Input 
                placeholder="Enter your email address" 
                className="glass-effect focus:ring-2 focus:ring-primary transition-all duration-300"
              />
              <Button size="lg" className="hover-lift group">
                Start Free
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground"
            >
              No credit card required • Start automating in minutes • Cancel anytime
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}