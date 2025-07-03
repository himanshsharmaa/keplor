'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Palette, 
  Building2, 
  GraduationCap, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users2
} from 'lucide-react';

const solutions = [
  {
    icon: Palette,
    title: "For Creators",
    description: "AI tools that amplify your creative process with intelligent content generation, design assistance, and workflow automation.",
    features: ["Content Generation", "Design Assistance", "Workflow Automation"],
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: Building2,
    title: "For Businesses",
    description: "Enterprise-grade AI solutions that streamline operations, enhance customer experiences, and drive growth.",
    features: ["Process Automation", "Customer Intelligence", "Performance Analytics"],
    color: "from-secondary/20 to-secondary/5"
  },
  {
    icon: GraduationCap,
    title: "For Learners",
    description: "Personalized AI tutors and learning platforms that adapt to your pace and learning style.",
    features: ["Personalized Learning", "Progress Tracking", "Adaptive Curriculum"],
    color: "from-primary/20 to-primary/5"
  }
];

const solutionVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    rotateX: 15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Solutions() {
  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solutions Tailored for
            <span className="text-gradient"> Your Needs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a creative professional, business leader, or lifelong learner,
            we have the perfect AI solution for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={solutionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className={`glass-effect h-full bg-gradient-to-br ${solution.color} group cursor-pointer overflow-hidden`}>
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <solution.icon className="h-12 w-12 text-primary mb-4" />
                  </motion.div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (featureIndex * 0.1) + 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 glass-effect rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center mb-3">
                <Users2 className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-gradient">10K+</span>
              </div>
              <p className="text-muted-foreground">Active Users</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="h-8 w-8 text-secondary mr-2" />
                <span className="text-3xl font-bold text-gradient">99.9%</span>
              </div>
              <p className="text-muted-foreground">Uptime</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center mb-3">
                <Sparkles className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-gradient">5M+</span>
              </div>
              <p className="text-muted-foreground">AI Tasks Completed</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}