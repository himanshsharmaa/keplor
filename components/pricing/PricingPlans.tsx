'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Building2 } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects",
    price: "Free",
    period: "forever",
    icon: Zap,
    popular: false,
    features: [
      "Up to 1,000 API calls/month",
      "Basic AI models",
      "Community support",
      "Standard analytics",
      "Basic integrations"
    ],
    buttonText: "Get Started Free",
    buttonVariant: "outline" as const
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses and teams",
    price: "$49",
    period: "per month",
    icon: Star,
    popular: true,
    features: [
      "Up to 50,000 API calls/month",
      "Advanced AI models",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
      "Team collaboration",
      "API access"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: "Custom",
    period: "contact us",
    icon: Building2,
    popular: false,
    features: [
      "Unlimited API calls",
      "Custom AI models",
      "24/7 dedicated support",
      "Enterprise analytics",
      "White-label solutions",
      "Advanced security",
      "Custom SLA",
      "On-premise deployment"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const
  }
];

export default function PricingPlans() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <Card className={`glass-effect h-full ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <plan.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    <div className="text-4xl font-bold">
                      {plan.price}
                      {plan.price !== "Free" && plan.price !== "Custom" && (
                        <span className="text-lg font-normal text-muted-foreground">
                          /{plan.period}
                        </span>
                      )}
                    </div>
                    {plan.price === "Custom" && (
                      <div className="text-sm text-muted-foreground mt-1">
                        {plan.period}
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (featureIndex * 0.1) + 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.buttonVariant}
                    className="w-full hover-lift"
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}