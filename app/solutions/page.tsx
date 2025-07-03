import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import SolutionsVerticals from '@/components/solutions/SolutionsVerticals';
import SolutionsWorkflows from '@/components/solutions/SolutionsWorkflows';
import SolutionsCTA from '@/components/solutions/SolutionsCTA';

export const metadata = {
  title: 'Solutions - Keplor AI SaaS Platform',
  description: 'Discover AI solutions tailored for creators, educators, and SaaS teams. Automate workflows and scale your business with intelligent tools.',
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SolutionsHero />
      <SolutionsVerticals />
      <SolutionsWorkflows />
      <SolutionsCTA />
      <Footer />
    </main>
  );
}