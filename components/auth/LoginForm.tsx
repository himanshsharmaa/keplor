'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Cpu, Mail, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LoginForm() {
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
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Sign in to your account to continue building with AI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
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
                  placeholder="Enter your password"
                  className="pl-10 glass-effect"
                />
              </div>
            </div>
          </div>
          
          <Button className="w-full hover-lift group" size="lg">
            Sign In
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="text-center">
            <a href="#" className="text-sm text-primary hover:underline">
              Forgot your password?
            </a>
          </div>
          
          <Separator />
          
          <Button variant="outline" className="w-full hover-lift" size="lg">
            Continue with Google
          </Button>
          
          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}