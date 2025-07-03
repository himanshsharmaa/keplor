'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Bot, FileText, Image, MessageSquare } from 'lucide-react';

const projects = [
  {
    icon: Bot,
    name: "Customer Support Bot",
    description: "AI chatbot for customer inquiries",
    status: "Active",
    lastUsed: "2 hours ago"
  },
  {
    icon: FileText,
    name: "Content Generator",
    description: "Blog post and article automation",
    status: "Active",
    lastUsed: "1 day ago"
  },
  {
    icon: Image,
    name: "Visual Assets",
    description: "AI-generated marketing images",
    status: "Paused",
    lastUsed: "3 days ago"
  },
  {
    icon: MessageSquare,
    name: "Email Assistant",
    description: "Automated email responses",
    status: "Active",
    lastUsed: "5 hours ago"
  }
];

export default function DashboardProjects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Projects</h2>
        <Button className="hover-lift">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -2 }}
          >
            <Card className="glass-effect cursor-pointer group">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <project.icon className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded ${
                    project.status === 'Active' 
                      ? 'bg-green-500/10 text-green-500' 
                      : 'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {project.lastUsed}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}