'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  FileText,
  Users,
  Headphones
} from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email",
    contact: "support@keplor.ai",
    note: "Response within 4 hours"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with our team",
    contact: "+1 (555) 123-4567",
    note: "Mon-Fri, 9AM-6PM PST"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us in real-time",
    contact: "Available on our website",
    note: "24/7 availability"
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Self-service resources",
    contact: "docs.keplor.ai",
    note: "Comprehensive guides"
  }
];

const offices = [
  {
    city: "San Francisco",
    address: "123 AI Street, Suite 100\nSan Francisco, CA 94105",
    type: "Headquarters"
  },
  {
    city: "New York",
    address: "456 Tech Avenue, Floor 15\nNew York, NY 10001",
    type: "East Coast Office"
  },
  {
    city: "London",
    address: "789 Innovation Lane\nLondon, UK EC1A 1BB",
    type: "European Office"
  }
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Contact Methods */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Headphones className="h-5 w-5 text-primary" />
            <span>Contact Methods</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <method.icon className="h-5 w-5 text-primary mt-1" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm">{method.title}</h4>
                <p className="text-xs text-muted-foreground mb-1">{method.description}</p>
                <p className="text-sm font-medium">{method.contact}</p>
                <p className="text-xs text-muted-foreground">{method.note}</p>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Office Locations */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Our Offices</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold">{office.city}</h4>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  {office.type}
                </span>
              </div>
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {office.address}
              </p>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Business Hours */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>Business Hours</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span className="text-muted-foreground">9:00 AM - 6:00 PM PST</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span className="text-muted-foreground">10:00 AM - 4:00 PM PST</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span className="text-muted-foreground">Closed</span>
            </div>
            <div className="pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Emergency support available 24/7 for Enterprise customers
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-primary" />
            <span>Quick Links</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <a href="#" className="block text-sm hover:text-primary transition-colors">
            → Status Page
          </a>
          <a href="#" className="block text-sm hover:text-primary transition-colors">
            → Community Forum
          </a>
          <a href="#" className="block text-sm hover:text-primary transition-colors">
            → API Documentation
          </a>
          <a href="#" className="block text-sm hover:text-primary transition-colors">
            → Security & Privacy
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}