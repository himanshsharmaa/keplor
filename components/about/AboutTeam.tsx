'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former AI researcher at Google with 10+ years in machine learning and product development.",
    image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Tesla engineer specializing in scalable AI infrastructure and distributed systems.",
    image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of AI Research",
    bio: "PhD in Computer Science from MIT, published researcher in natural language processing.",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    bio: "Former lead engineer at Stripe, expert in building reliable, scalable software systems.",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Lisa Thompson",
    role: "Head of Design",
    bio: "Award-winning designer with experience at Apple and Airbnb, passionate about user experience.",
    image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Alex Johnson",
    role: "VP of Sales",
    bio: "Sales leader with 15+ years helping enterprises adopt cutting-edge technology solutions.",
    image: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export default function AboutTeam() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our
            <span className="text-gradient"> Leadership Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds behind Keplor, bringing together decades of experience 
            in AI, engineering, and product development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-effect hover-lift h-full">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a href="https://linkedin.com/company/keplor" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="Keplor Company LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}