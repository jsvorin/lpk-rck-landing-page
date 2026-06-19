import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'motion/react';
import { Menu, Globe, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
// SheetClose di-import lagi dengan aman
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = t.nav.map((item: any) => item.id);
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [t.nav]);

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'jp' : 'id');
  };

  // Logic NavLinks Dipecah biar SheetClose cuma jalan di Mobile
  const NavLinks = ({ mobile = false }) => (
    <>
      {t.nav.map((item: any) => {

        // 1. VERSI MOBILE (Aman dibungkus SheetClose karena ada di dalam tag Sheet)
        if (mobile) {
          return (
            <SheetClose asChild key={item.id}>
              <a
                href={item.href}
                className="block text-base py-3 px-4 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-all font-medium"
              >
                {item.label}
              </a>
            </SheetClose>
          );
        }

        // 2. VERSI DESKTOP (Tanpa SheetClose, jadi ga bakal bikin error layar putih)
        return (
          <a
            key={item.id}
            href={item.href}
            className={cn(
              'transition-all font-medium text-sm relative px-2 py-1',
              activeSection === item.id ? 'text-blue-600' : 'text-navy-700 hover:text-blue-600'
            )}
          >
            {item.label}
            {activeSection === item.id && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        );
      })}
    </>
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-xl border-b border-gray-200/50',
        isScrolled ? 'shadow-sm py-3' : 'py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex flex-col z-50">
          <img src="/logo.png" alt="Logo Rumah Ciptakerja" className="h-10 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {/* NavLinks di sini memicu versi Desktop (tanpa SheetClose) */}
            <NavLinks />
          </div>

          <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-blue-600 transition-colors bg-gray-100 rounded-full px-3 py-1.5"
            >
              <Globe className="w-4 h-4" />
              <span className={language === 'id' ? 'font-bold text-blue-600' : ''}>ID</span>
              <span className="text-gray-400">/</span>
              <span className={language === 'jp' ? 'font-bold text-blue-600' : ''}>日本語</span>
            </button>
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all" asChild>
              <a href="#kontak">{t.hero.ctaPrimary}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={toggleLanguage} className="p-2 text-navy-700 bg-gray-100 rounded-full">
            <span className="text-xs font-bold">{language === 'id' ? 'ID' : 'JP'}</span>
          </button>

          {/* Penggunaan Sheet secara native */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-navy-900">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-navy-900 text-white border-navy-800 w-[280px] sm:w-[350px] p-0 flex flex-col">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              <div className="p-6 pb-2">
                <h2 className="text-xl font-bold text-white">Menu</h2>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-2">
                <nav className="flex flex-col space-y-1">
                  {/* NavLinks di sini memicu versi Mobile (pakai SheetClose) */}
                  <NavLinks mobile />
                </nav>
              </div>

              <div className="p-6 border-t border-white/10 bg-navy-900/50 mt-auto">
                <SheetClose asChild>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl mb-6 shadow-lg shadow-red-600/20 py-6" asChild>
                    <a href="#kontak">{t.hero.ctaPrimary}</a>
                  </Button>
                </SheetClose>

                <div className="flex flex-col space-y-3 text-sm text-gray-400">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-red-500" />
                    <span>{t.contact.address.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{t.contact.whatsapp}</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};