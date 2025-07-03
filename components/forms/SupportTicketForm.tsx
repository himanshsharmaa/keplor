'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { HelpCircle, Mail, AlertCircle, Send, Upload } from 'lucide-react';
import { useState } from 'react';

export default function SupportTicketForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setTicketNumber(`KPL-${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
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
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Support Ticket Created</h3>
            <p className="text-muted-foreground mb-4">
              Your support ticket has been created successfully.
            </p>
            <div className="glass-effect p-4 rounded-lg mb-4">
              <p className="text-sm text-muted-foreground mb-1">Ticket Number</p>
              <p className="font-mono text-lg font-semibold text-primary">{ticketNumber}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              We'll respond within 24 hours. You'll receive updates via email.
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
            <HelpCircle className="h-6 w-6 text-primary" />
            <span>Create Support Ticket</span>
          </CardTitle>
          <CardDescription>
            Describe your issue and we'll help you resolve it as quickly as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <label className="text-sm font-medium">Priority *</label>
                <Select required>
                  <SelectTrigger className="glass-effect">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - General question</SelectItem>
                    <SelectItem value="medium">Medium - Feature not working</SelectItem>
                    <SelectItem value="high">High - Service disruption</SelectItem>
                    <SelectItem value="urgent">Urgent - Complete outage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Category *</label>
              <Select required>
                <SelectTrigger className="glass-effect">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technical">Technical Issue</SelectItem>
                  <SelectItem value="billing">Billing Question</SelectItem>
                  <SelectItem value="account">Account Management</SelectItem>
                  <SelectItem value="api">API Support</SelectItem>
                  <SelectItem value="feature">Feature Request</SelectItem>
                  <SelectItem value="integration">Integration Help</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject *</label>
              <Input 
                placeholder="Brief description of your issue" 
                className="glass-effect"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Description *</label>
              <Textarea 
                placeholder="Please provide detailed information about your issue, including steps to reproduce if applicable..."
                className="glass-effect min-h-[120px] resize-none"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Environment (Optional)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Browser (e.g., Chrome 91)" 
                  className="glass-effect"
                />
                <Input 
                  placeholder="Operating System (e.g., macOS 12)" 
                  className="glass-effect"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Attachments (Optional)</label>
              <div className="glass-effect border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drop files here or click to upload
                </p>
                <p className="text-xs text-muted-foreground">
                  Screenshots, logs, or other relevant files (Max 10MB)
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-yellow-500 mb-1">Before submitting:</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Check our <a href="#" className="text-primary hover:underline">documentation</a> for common solutions</li>
                  <li>• Search our <a href="#" className="text-primary hover:underline">knowledge base</a> for similar issues</li>
                  <li>• Try our <a href="#" className="text-primary hover:underline">troubleshooting guide</a></li>
                </ul>
              </div>
            </div>
            
            <Button 
              type="submit"
              className="w-full hover-lift group" 
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Creating Ticket..."
              ) : (
                <>
                  Create Support Ticket
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}