import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogCategories from '@/components/blog/BlogCategories';

export const metadata = {
  title: 'Blog - Keplor AI SaaS Platform',
  description: 'Stay updated with the latest AI trends, product updates, and insights from the Keplor team.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BlogHero />
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <BlogCategories />
          <BlogGrid />
        </div>
      </div>
      <Footer />
    </main>
  );
}