
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProgramsSection } from './components/sections/ProgramsSection';
import { AdvantagesSection } from './components/sections/AdvantagesSection';
import { PricingSection } from './components/sections/PricingSection';
import { GallerySection } from './components/sections/GallerySection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ProgramsSection />
          <AdvantagesSection />
          <PricingSection />
          <GallerySection />
          <FAQSection />
          <ContactSection />
        </main>
        
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}

export default App;
