'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageSquare, Star, Send } from 'lucide-react';
import { useState } from 'react';

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
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

  const handleStarClick = (starRating: number) => {
    setRating(starRating);
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
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Thank you for your feedback!</h3>
            <p className="text-muted-foreground">
              Your input helps us improve Keplor for everyone. We'll review your feedback and get back to you if needed.
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
            <MessageSquare className="h-6 w-6 text-primary" />
            <span>Share Your Feedback</span>
          </CardTitle>
          <CardDescription>
            Help us improve Keplor by sharing your thoughts and suggestions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Overall Rating</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(star)}
                    className="focus:outline-none"
                  >
                    <Star 
                      className={`h-6 w-6 transition-colors ${
                        star <= rating 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-muted-foreground hover:text-yellow-400'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Feedback Category</label>
              <Select required>
                <SelectTrigger className="glass-effect">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="feature">Feature Request</SelectItem>
                  <SelectItem value="bug">Bug Report</SelectItem>
                  <SelectItem value="improvement">Improvement Suggestion</SelectItem>
                  <SelectItem value="performance">Performance Issue</SelectItem>
                  <SelectItem value="ui">User Interface</SelectItem>
                  <SelectItem value="documentation">Documentation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Email (Optional)</label>
              <Input 
                type="email" 
                placeholder="your@email.com" 
                className="glass-effect"
              />
              <p className="text-xs text-muted-foreground">
                We'll only use this to follow up on your feedback if needed.
              </p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Feedback *</label>
              <Textarea 
                placeholder="Tell us what you think about Keplor. What's working well? What could be improved?"
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
                "Sending Feedback..."
              ) : (
                <>
                  Send Feedback
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