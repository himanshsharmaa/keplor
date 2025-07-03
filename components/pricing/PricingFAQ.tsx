'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "You get full access to all Professional plan features for 14 days, no credit card required. After the trial, you can choose to upgrade or continue with our free Starter plan."
  },
  {
    question: "Can I change plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
  },
  {
    question: "What happens if I exceed my API limits?",
    answer: "We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional API calls as needed. We never cut off service without warning."
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer: "Absolutely! Our Enterprise plan includes custom AI models, dedicated support, and can be tailored to your specific requirements. Contact our sales team to discuss your needs."
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees, ever. You only pay for your chosen plan, and you can start using Keplor immediately after signing up."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and for Enterprise customers, we can arrange invoicing and bank transfers."
  }
];

export default function PricingFAQ() {
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
            Frequently Asked
            <span className="text-gradient"> Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, 
            feel free to contact our support team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect hover-lift h-full">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}