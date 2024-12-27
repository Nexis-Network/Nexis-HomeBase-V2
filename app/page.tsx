import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/ui/Hero';
import AboutSection from '@/components/aboutSection';
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen text-white relative z-0">
      <Navigation />
      <Hero />
      <AboutSection />
    </main>
  );
}
