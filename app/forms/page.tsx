import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ContactForm from '@/components/forms/ContactForm';
import NewsletterForm from '@/components/forms/NewsletterForm';
import FeedbackForm from '@/components/forms/FeedbackForm';
import WaitlistForm from '@/components/forms/WaitlistForm';
import SupportTicketForm from '@/components/forms/SupportTicketForm';
import DemoRequestForm from '@/components/forms/DemoRequestForm';

export const metadata = {
  title: 'Forms - Keplor AI Platform',
  description: 'Explore all the forms available on the Keplor platform including contact, feedback, support, and demo request forms.',
};

export default function FormsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Keplor
            <span className="text-gradient"> Forms</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive collection of forms designed for the Keplor platform, 
            showcasing various use cases and interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Form</h2>
            <ContactForm />
          </div>

          {/* Demo Request Form */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Demo Request</h2>
            <DemoRequestForm />
          </div>

          {/* Support Ticket Form */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Support Ticket</h2>
            <SupportTicketForm />
          </div>

          {/* Feedback Form */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Feedback Form</h2>
            <FeedbackForm />
          </div>

          {/* Waitlist Form */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Waitlist Form</h2>
            <WaitlistForm 
              feature="Advanced AI Models"
              title="Join Early Access"
              description="Get early access to our most advanced AI models and features."
            />
          </div>

          {/* Newsletter Forms */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Newsletter Forms</h2>
              <NewsletterForm />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Inline Variant</h3>
              <div className="glass-effect p-6 rounded-xl">
                <NewsletterForm 
                  variant="inline"
                  title="Stay Updated"
                  description="Get AI insights delivered weekly."
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Minimal Variant</h3>
              <div className="glass-effect p-6 rounded-xl max-w-sm">
                <NewsletterForm 
                  variant="minimal"
                  title="Quick Subscribe"
                  description="Join our newsletter."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}