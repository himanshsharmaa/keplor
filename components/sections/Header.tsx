'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cpu, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'solutions'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div 
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Cpu className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gradient">Keplor</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="nav-link">
              Features
            </Link>
            <Link href="/pricing" className="nav-link">
              Pricing
            </Link>
            <Link href="/documentation" className="nav-link">
              Docs
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/careers" className="nav-link">
              Careers
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
            {/* <Button variant="outline" size="sm" className="hover-lift">
              Sign In
            </Button>
            <Button size="sm" className="hover-lift">
              Get Started
            </Button> */}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-border"
          >
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="/features" className="nav-link text-left">
                Features
              </Link>
              <Link href="/pricing" className="nav-link text-left">
                Pricing
              </Link>
              <Link href="/documentation" className="nav-link text-left">
                Documentation
              </Link>
              <Link href="/about" className="nav-link text-left">
                About
              </Link>
              <Link href="/blog" className="nav-link text-left">
                Blog
              </Link>
              <Link href="/careers" className="nav-link text-left">
                Careers
              </Link>
              <Link href="/contact" className="nav-link text-left">
                Contact
              </Link>
              {/* <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
                <Button size="sm">
                  Get Started
                </Button>
              </div> */}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}