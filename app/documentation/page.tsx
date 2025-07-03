import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import DocsHero from '@/components/docs/DocsHero';
import DocsNavigation from '@/components/docs/DocsNavigation';
import DocsContent from '@/components/docs/DocsContent';

export const metadata = {
  title: 'Documentation - Keplor AI SaaS Platform',
  description: 'Complete documentation for Keplor\'s AI platform including API reference, SDKs, tutorials, and integration guides.',
};

export default function DocumentationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <DocsHero />
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <DocsNavigation />
          <DocsContent />
        </div>
      </div>
      <Footer />
    </main>
  );
}