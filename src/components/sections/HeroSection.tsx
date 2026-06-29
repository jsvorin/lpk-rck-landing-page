

import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { GeometricPattern } from '@/components/ui/GeometricPattern';
import { WaveDivider } from '@/components/ui/WaveDivider';
import { CheckCircle2, Award, Briefcase, BookOpen } from 'lucide-react';
import { fadeUp, staggerContainer, fadeLeft } from '@/lib/animations';

export const HeroSection = () => {
  const { t } = useLanguage();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(`service-highlight-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Also trigger the correct slide in the carousel
      const event = new CustomEvent('navigate-service-highlight', { detail: { id } });
      window.dispatchEvent(event);
    }
  };

  const heroButtonItems = [
    { id: 'ssw', label: t.hero.heroButtons.ssw, icon: Award, color: 'bg-amber-500', subtitle: 'Skill Certified' },
    { id: 'jlpt', label: t.hero.heroButtons.jlpt, icon: BookOpen, color: 'bg-blue-500', subtitle: 'N4 Target' },
    { id: 'job-matching', label: t.hero.heroButtons.jobMatching, icon: Briefcase, color: 'bg-red-500/90', subtitle: '100% Placement' },
    { id: 'visa-approved', label: t.hero.heroButtons.visaApproved, icon: CheckCircle2, color: 'bg-success', subtitle: 'Ready for Japan' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy-950">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 hero-gradient z-0"></div>
      <GeometricPattern className="opacity-40" />

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="max-w-2xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-bold mb-6 backdrop-blur-sm border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              {t.hero.badge}
            </motion.div>
            
            <motion.h1 
              variants={fadeUp} 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
            >
              {t.hero.title.includes(',') ? (
                <>
                  {t.hero.title.split(',')[0]},
                  <br />
                  <span className="text-blue-400">
                    {t.hero.title.substring(t.hero.title.indexOf(',') + 1).trim()}
                  </span>
                </>
              ) : (
                t.hero.title
              )}
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-navy-200 mb-8 max-w-lg leading-relaxed">
              {t.hero.subtitle}
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg shadow-red-900/20 px-8 h-14 text-base" asChild>
                <a href="#kontak">{t.hero.ctaPrimary}</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 rounded-xl px-8 h-14 text-base backdrop-blur-sm" asChild>
                <a href="#program">{t.hero.ctaSecondary}</a>
              </Button>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {t.hero.trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-navy-100">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image with Background + Service Buttons */}
          <motion.div 
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="relative lg:h-[600px] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              {/* Background Image */}
              <img 
                src="/hero-bg.jpg" 
                alt="Cherry Blossom with Mt. Fuji" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent z-10"></div>
              
              {/* Service Buttons Grid */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-5 md:p-6">
                <div className="grid grid-cols-2 gap-3">
                  {heroButtonItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleScrollTo(item.id)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + idx * 0.15, duration: 0.5 }}
                        className="hero-service-btn bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-xl shadow-xl flex items-center gap-3 cursor-pointer hover:bg-white/20 hover:scale-[1.03] hover:border-white/40 transition-all duration-300 group/btn text-left"
                      >
                        <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center shadow-inner shrink-0 group-hover/btn:scale-110 transition-transform duration-300`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-white text-sm font-bold truncate">{item.label}</div>
                          <div className="text-blue-200 text-xs truncate">{item.subtitle}</div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>

      <WaveDivider position="bottom" color="#F8FAFC" className="z-20" />
    </section>
  );
};
