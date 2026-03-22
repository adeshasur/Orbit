import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Integrations from './components/Integrations';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import WaitlistSection from './components/WaitlistSection';
import Footer from './components/Footer';
import HeroPopup from './components/HeroPopup';
import CursorGlow from './components/CursorGlow';

function App() {
  return (
    <div className="min-h-screen bg-orbitDark text-white selection:bg-orbitAccent/30">
      <CursorGlow />
      <Navbar />
      <main className="flex flex-col gap-12 pt-16">
        <Hero />
        <TrustSection />
        <HowItWorks />
        <Features />
        <Integrations />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <Pricing />
        <WaitlistSection />
      </main>
      <Footer />
      <HeroPopup />
    </div>
  );
}

export default App;
