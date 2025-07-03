'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface NewsletterFormProps {
  variant?: 'default' | 'inline' | 'minimal';
  title?: string;
  description?: string;
}

export default function NewsletterForm({ 
  variant = 'default',
  title = "Stay Updated",
  description = "Get the latest AI insights and product updates delivered to your inbox."
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubscribed(true);
    setIsSubmitting(false);
  };

  if (variant === 'inline') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            type="email"
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 glass-effect"
            required
          />
        </div>
        <Button 
          onClick={handleSubmit}
          className="hover-lift group"
          disabled={isSubmitting || isSubscribed}
        >
          {isSubscribed ? "Subscribed!" : isSubmitting ? "..." : "Subscribe"}
          {!isSubscribed && <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
        </Button>
      </motion.div>
    );
  }

  if (variant === 'minimal') {
    return (
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            type="email"
            placeholder="your@email.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 glass-effect"
            required
          />
        </div>
        <Button 
          type="submit"
          className="w-full hover-lift"
          disabled={isSubmitting || isSubscribed}
        >
          {isSubscribed ? "✓ Subscribed" : isSubmitting ? "Subscribing..." : "Get Updates"}
        </Button>
      </motion.form>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="glass-effect">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-3">
            <div className="glass-effect p-3 rounded-full">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Welcome to Keplor!</h3>
              <p className="text-sm text-muted-foreground">
                You're now subscribed to our newsletter. Check your email for a confirmation.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="email"
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 glass-effect"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full hover-lift group" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}