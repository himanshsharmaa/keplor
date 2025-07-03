'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, User, Mail, Building, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center space-x-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span>Send us a Message</span>
          </CardTitle>
          <CardDescription>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <label className="text-sm font-medium">Subject *</label>
              <Select required>
                <SelectTrigger className="glass-effect">
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="sales">Sales Question</SelectItem>
                  <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                  <SelectItem value="press">Press Inquiry</SelectItem>
                  <SelectItem value="feedback">Product Feedback</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Message *</label>
              <Textarea 
                placeholder="Tell us how we can help you..."
                className="glass-effect min-h-[120px] resize-none"
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
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              We'll get back to you within 24 hours. For urgent matters, please use our live chat.
            </p>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}