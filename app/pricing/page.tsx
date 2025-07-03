import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import PricingHero from '@/components/pricing/PricingHero';
import PricingPlans from '@/components/pricing/PricingPlans';
import PricingFAQ from '@/components/pricing/PricingFAQ';
import PricingCTA from '@/components/pricing/PricingCTA';

export const metadata = {
  title: 'Pricing - Keplor AI SaaS Platform',
  description: 'Choose the perfect Keplor plan for your needs. Flexible pricing for creators, businesses, and enterprises with 14-day free trial.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
      <PricingCTA />
      <Footer />
    </main>
  );
}