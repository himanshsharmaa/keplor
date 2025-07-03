'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users } from 'lucide-react';

const openings = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    description: "Lead the development of our core AI models and infrastructure. Work with cutting-edge ML technologies.",
    requirements: ["5+ years ML experience", "Python/PyTorch", "Distributed systems"]
  },
  {
    title: "Product Manager - AI Platform",
    department: "Product",
    location: "Remote / New York",
    type: "Full-time",
    description: "Drive product strategy for our AI platform. Work closely with engineering and design teams.",
    requirements: ["3+ years PM experience", "AI/ML background", "Technical product management"]
  },
  {
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build beautiful, responsive user interfaces for our AI platform using React and TypeScript.",
    requirements: ["3+ years React experience", "TypeScript", "Modern CSS"]
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Austin",
    type: "Full-time",
    description: "Scale our infrastructure to handle millions of AI requests. Work with Kubernetes, AWS, and monitoring.",
    requirements: ["4+ years DevOps", "Kubernetes", "AWS/GCP"]
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "Remote / Los Angeles",
    type: "Full-time",
    description: "Design intuitive experiences for complex AI workflows. Create design systems and user research.",
    requirements: ["3+ years UX design", "Figma", "Design systems"]
  },
  {
    title: "Sales Engineer",
    department: "Sales",
    location: "Remote / Chicago",
    type: "Full-time",
    description: "Help enterprise customers integrate our AI platform. Technical sales and solution architecture.",
    requirements: ["2+ years technical sales", "API experience", "Customer-facing"]
  }
];

export default function CareersOpenings() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Open
            <span className="text-gradient"> Positions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our growing team and help shape the future of AI technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {openings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-effect hover-lift h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {job.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full hover-lift">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Don't see a role that fits? We're always looking for talented people.
          </p>
          <Button variant="outline" size="lg" className="hover-lift">
            Send Us Your Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}