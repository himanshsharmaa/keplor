'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, User, Mail, Building, Users, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function DemoRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="glass-effect">
          <CardContent className="text-center py-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Demo Request Received!</h3>
            <p className="text-muted-foreground mb-4">
              Thank you for your interest in Keplor. Our team will contact you within 24 hours to schedule your personalized demo.
            </p>
            <p className="text-sm text-muted-foreground">
              In the meantime, feel free to explore our <a href="#" className="text-primary hover:underline">documentation</a> and <a href="#" className="text-primary hover:underline">case studies</a>.
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
        <CardHeader>
          <CardTitle className="text-2xl flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-primary" />
            <span>Request a Demo</span>
          </CardTitle>
          <CardDescription>
            See Keplor in action with a personalized demo tailored to your use case.
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
                    placeholder="John" 
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
                    placeholder="Doe" 
                    className="pl-10 glass-effect"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Work Email *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="pl-10 glass-effect"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Company *</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Your Company" 
                    className="pl-10 glass-effect"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Company Size *</label>
                <Select required>
                  <SelectTrigger className="glass-effect">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="201-1000">201-1000 employees</SelectItem>
                    <SelectItem value="1000+">1000+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Job Title *</label>
              <Input 
                placeholder="e.g., CTO, Product Manager, Developer" 
                className="glass-effect"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Primary Use Case *</label>
              <Select required>
                <SelectTrigger className="glass-effect">
                  <SelectValue placeholder="What's your main interest?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="content">Content Generation</SelectItem>
                  <SelectItem value="automation">Workflow Automation</SelectItem>
                  <SelectItem value="customer-support">Customer Support</SelectItem>
                  <SelectItem value="data-analysis">Data Analysis</SelectItem>
                  <SelectItem value="education">Educational Tools</SelectItem>
                  <SelectItem value="integration">API Integration</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Preferred Demo Time</label>
              <Select>
                <SelectTrigger className="glass-effect">
                  <SelectValue placeholder="When works best for you?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9-12 PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12-5 PM)</SelectItem>
                  <SelectItem value="evening">Evening (5-7 PM)</SelectItem>
                  <SelectItem value="flexible">I'm flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Additional Information</label>
              <Textarea 
                placeholder="Tell us about your specific needs, current challenges, or questions you'd like addressed during the demo..."
                className="glass-effect min-h-[100px] resize-none"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full hover-lift group" 
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Submitting Request..."
              ) : (
                <>
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              Our team will contact you within 24 hours to schedule your personalized demo.
            </p>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}