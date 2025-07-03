import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata = {
  title: 'Contact - Keplor AI SaaS Platform',
  description: 'Get in touch with the Keplor team. We\'re here to help with questions, support, and partnership opportunities.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </main>
  );
}