

import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { GeometricPattern } from '@/components/ui/GeometricPattern';
import { WaveDivider } from '@/components/ui/WaveDivider';
import { CheckCircle2, Award, Briefcase } from 'lucide-react';
import { fadeUp, staggerContainer, fadeLeft } from '@/lib/animations';

export const HeroSection = () => {
  const { t } = useLanguage();

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

          {/* Hero Image/Visual */}
          <motion.div 
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="relative lg:h-[600px] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-blue-600/15 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
              {/* Fallback geometric design instead of generic image placeholder */}
              <div className="absolute inset-0 bg-navy-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                <div className="w-64 h-64 border-[12px] border-blue-600/30 rounded-full absolute -top-10 -right-10 blur-xl"></div>
                <div className="w-80 h-80 border-[16px] border-red-600/20 rounded-full absolute -bottom-20 -left-20 blur-2xl"></div>
                
                {/* Floating Elements (Glassmorphism cards) */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 -left-6 lg:-left-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl flex items-center gap-4 w-48 z-20"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-inner">
                    <span className="text-white font-bold">N4</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">JLPT Passed</div>
                    <div className="text-blue-200 text-xs">Target Achieved</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 12, 0] }} 
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-12 right-2 lg:-right-4 bg-white/10 backdrop-blur-md border border-white/20 p-3.5 rounded-xl shadow-xl flex items-center gap-3 w-44 z-20"
                >
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-inner">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">SSW Test</div>
                    <div className="text-blue-200 text-xs">Skill Certified</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -15, 0] }} 
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-10 left-6 lg:left-10 bg-white/10 backdrop-blur-md border border-white/20 p-3.5 rounded-xl shadow-xl flex items-center gap-3 w-48 z-20"
                >
                  <div className="w-10 h-10 bg-red-500/90 rounded-full flex items-center justify-center shadow-inner">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">Job Matching</div>
                    <div className="text-blue-200 text-xs">100% Placement</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-1/3 -right-6 lg:-right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl flex items-center gap-3 w-52 z-20"
                >
                  <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">Visa Approved</div>
                    <div className="text-blue-200 text-xs">Ready for Japan</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>

      <WaveDivider position="bottom" color="#F8FAFC" className="z-20" />
    </section>
  );
};
