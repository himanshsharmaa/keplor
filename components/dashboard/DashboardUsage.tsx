'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function DashboardUsage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle>Usage This Month</CardTitle>
          <CardDescription>Professional Plan</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>API Calls</span>
              <span>12,847 / 50,000</span>
            </div>
            <Progress value={25.7} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Storage</span>
              <span>2.3 GB / 10 GB</span>
            </div>
            <Progress value={23} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Projects</span>
              <span>8 / 25</span>
            </div>
            <Progress value={32} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}