import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import FeaturesHero from '@/components/features/FeaturesHero';
import FeaturesList from '@/components/features/FeaturesList';
import FeatureComparison from '@/components/features/FeatureComparison';
import FeatureCTA from '@/components/features/FeatureCTA';

export const metadata = {
  title: 'Features - Keplor AI SaaS Platform',
  description: 'Explore Keplor\'s comprehensive AI features including intelligent agents, cloud-native architecture, enterprise security, and advanced analytics.',
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <FeaturesHero />
      <FeaturesList />
      <FeatureComparison />
      <FeatureCTA />
      <Footer />
    </main>
  );
}