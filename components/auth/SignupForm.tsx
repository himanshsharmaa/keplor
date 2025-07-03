'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Cpu, Mail, Lock, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SignupForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md"
    >
      <Card className="glass-effect">
        <CardHeader className="text-center">
          <Link href="/">
            <div className="flex items-center justify-center space-x-2 mb-4 cursor-pointer">
              <Cpu className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gradient">Keplor</span>
            </div>
          </Link>
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>
            Start building with AI today - no credit card required
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="Enter your full name"
                  className="pl-10 glass-effect"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="pl-10 glass-effect"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="password" 
                  placeholder="Create a password"
                  className="pl-10 glass-effect"
                />
              </div>
            </div>
          </div>
          
          <Button className="w-full hover-lift group" size="lg">
            Create Account
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Separator />
          
          <Button variant="outline" className="w-full hover-lift" size="lg">
            Continue with Google
          </Button>
          
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
          
          <p className="text-xs text-muted-foreground text-center">
            By creating an account, you agree to our{' '}
            <a href="#" className="text-primary hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}