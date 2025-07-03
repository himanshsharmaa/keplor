import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutTeam from '@/components/about/AboutTeam';
import AboutValues from '@/components/about/AboutValues';
import AboutTimeline from '@/components/about/AboutTimeline';

export const metadata = {
  title: 'About - Keplor AI SaaS Platform',
  description: 'Learn about Keplor\'s mission to democratize AI technology and meet the team building the future of intelligent software.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <AboutTimeline />
      <Footer />
    </main>
  );
}