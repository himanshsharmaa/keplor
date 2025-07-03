'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Key, CreditCard, HelpCircle } from 'lucide-react';

const quickActions = [
  {
    icon: Settings,
    title: "Account Settings",
    description: "Manage your profile and preferences"
  },
  {
    icon: Key,
    title: "API Keys",
    description: "Generate and manage API keys"
  },
  {
    icon: CreditCard,
    title: "Billing",
    description: "View usage and manage billing"
  },
  {
    icon: HelpCircle,
    title: "Support",
    description: "Get help and documentation"
  }
];

export default function DashboardSettings() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Manage your account and settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start h-auto p-3 hover:bg-muted/50"
            >
              <action.icon className="h-4 w-4 mr-3 text-primary" />
              <div className="text-left">
                <div className="font-medium text-sm">{action.title}</div>
                <div className="text-xs text-muted-foreground">{action.description}</div>
              </div>
            </Button>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}