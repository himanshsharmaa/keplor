'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Zap, Users, Clock } from 'lucide-react';

const stats = [
  {
    icon: Zap,
    title: "API Calls",
    value: "12,847",
    change: "+23%",
    description: "This month"
  },
  {
    icon: Users,
    title: "Active Projects",
    value: "8",
    change: "+2",
    description: "Since last week"
  },
  {
    icon: Clock,
    title: "Processing Time",
    value: "0.3s",
    change: "-15%",
    description: "Average response"
  },
  {
    icon: TrendingUp,
    title: "Success Rate",
    value: "99.7%",
    change: "+0.2%",
    description: "Last 30 days"
  }
];

export default function DashboardStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-6">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -2 }}
          >
            <Card className="glass-effect">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-primary">{stat.change}</span> {stat.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}