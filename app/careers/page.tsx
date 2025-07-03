import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import CareersHero from '@/components/careers/CareersHero';
import CareersValues from '@/components/careers/CareersValues';
import CareersOpenings from '@/components/careers/CareersOpenings';
import CareersBenefits from '@/components/careers/CareersBenefits';

export const metadata = {
  title: 'Careers - Keplor AI SaaS Platform',
  description: 'Join the Keplor team and help build the future of AI. Explore open positions and learn about our culture and benefits.',
};

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CareersHero />
      <CareersValues />
      <CareersBenefits />
      <CareersOpenings />
      <Footer />
    </main>
  );
}