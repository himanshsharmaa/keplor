'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, User, Building, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface WaitlistFormProps {
  feature?: string;
  title?: string;
  description?: string;
}

export default function WaitlistForm({ 
  feature = "new feature",
  title = "Join the Waitlist",
  description = "Be the first to know when this feature becomes available."
}: WaitlistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsJoined(true);
    setIsSubmitting(false);
  };

  if (isJoined) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="glass-effect">
          <CardContent className="text-center py-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
            <p className="text-muted-foreground mb-4">
              We'll notify you as soon as {feature} is available.
            </p>
            <p className="text-sm text-muted-foreground">
              Position in queue: <span className="font-semibold text-primary">#247</span>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="First name" 
                    className="pl-10 glass-effect"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Last name" 
                    className="pl-10 glass-effect"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="pl-10 glass-effect"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Company</label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Your Company (Optional)" 
                  className="pl-10 glass-effect"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Use Case</label>
              <Select>
                <SelectTrigger className="glass-effect">
                  <SelectValue placeholder="How will you use this feature?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="content">Content Creation</SelectItem>
                  <SelectItem value="automation">Workflow Automation</SelectItem>
                  <SelectItem value="analysis">Data Analysis</SelectItem>
                  <SelectItem value="customer">Customer Support</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              type="submit"
              className="w-full hover-lift group" 
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Joining Waitlist..."
              ) : (
                <>
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              We'll notify you as soon as this feature is available. No spam, ever.
            </p>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}