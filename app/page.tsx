import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Solutions from '@/components/sections/Solutions';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <CTA />
      <Footer />
    </main>
  );
}