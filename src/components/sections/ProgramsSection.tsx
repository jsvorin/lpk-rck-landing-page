
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Section, SectionHeader } from '../layout/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Award, Heart, BookOpen, Check, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'award': Award,
  'book-open': BookOpen,
  'briefcase': Briefcase,
  'check-circle': CheckCircle2,
};

export const ProgramsSection = () => {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const highlights = t.programs.serviceHighlights;

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < highlights.length) {
      setActiveSlide(index);
    }
  }, [highlights.length]);

  // Listen for navigation events from hero buttons
  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string }>;
      const targetId = customEvent.detail.id;
      const idx = highlights.findIndex(h => h.id === targetId);
      if (idx !== -1) {
        setActiveSlide(idx);
      }
    };

    window.addEventListener('navigate-service-highlight', handler);
    return () => window.removeEventListener('navigate-service-highlight', handler);
  }, [highlights]);

  const activeHighlight = highlights[activeSlide];
  const IconComponent = iconMap[activeHighlight?.icon] || CheckCircle2;

  return (
    <Section id="program" bg="white">
      <SectionHeader
        badge={t.programs.badge}
        title={t.programs.title}
        subtitle={t.programs.subtitle}
        centered
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
      >
        {t.programs.items.map((program, idx) => {
          // Logic ditaruh di sini (Aman karena dibungkus kurung kurawal + ada return di bawah)
          const isLastCard = idx === 2;

          return (
            <motion.div
              key={program.id}
              variants={fadeUp}
              className={isLastCard ? "md:col-span-2" : ""}
            >
              <Card className="h-full border-gray-200 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                <CardHeader className="pb-4 relative z-10">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    <div className="group-hover:text-white transition-colors">
                      {program.icon === 'briefcase' && <Briefcase className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />}
                      {program.icon === 'award' && <Award className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />}
                      {program.icon === 'heart' && <Heart className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />}
                      {program.icon === 'book-open' && <BookOpen className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-navy-900 mb-3">{program.title}</CardTitle>
                  <p className="text-gray-500 leading-relaxed">{program.description}</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3 mt-4 pt-4 border-t border-gray-100">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 bg-blue-50 p-1 rounded-full text-blue-600 shrink-0">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        <span className="text-gray-600 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors"></div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Service Highlights Carousel Card */}
      <div id="service-highlight-ssw" className="scroll-mt-28" />
      <div id="service-highlight-jlpt" className="scroll-mt-28" />
      <div id="service-highlight-job-matching" className="scroll-mt-28" />
      <div id="service-highlight-visa-approved" className="scroll-mt-28" />
      
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-16 md:mt-20"
        id="service-highlights-card"
      >
        {/* Section subheader for this card */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
            {t.programs.serviceHighlightsTitle}
          </h3>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.programs.serviceHighlightsSubtitle}
          </p>
        </div>

        <Card className="border-gray-200 shadow-xl overflow-hidden service-highlights-card">
          {/* Progress dots / tabs */}
          <div className="flex items-center justify-center gap-2 pt-6 pb-2 px-6">
            {highlights.map((h, idx) => (
              <button
                key={h.id}
                onClick={() => goToSlide(idx)}
                className={`service-tab-btn px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  idx === activeSlide 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
                }`}
              >
                {h.title.split('(')[0].trim().split('（')[0].trim()}
              </button>
            ))}
          </div>

          {/* Slide content */}
          <div className="relative min-h-[380px] md:min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="p-6 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  {/* Icon + Title area */}
                  <div className="shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-navy-900 mb-2">
                      {activeHighlight.title}
                    </h4>
                    <p className="text-blue-600 font-semibold text-sm mb-4">
                      {activeHighlight.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {activeHighlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between p-4 md:p-6 pt-0 md:pt-0">
            <Button
              variant="outline"
              onClick={() => goToSlide(activeSlide - 1)}
              disabled={activeSlide === 0}
              className="rounded-xl gap-2 text-sm disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
              {t.programs.prevButton}
            </Button>
            
            <div className="flex items-center gap-1.5">
              {highlights.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === activeSlide
                      ? 'w-8 h-2.5 bg-blue-600'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={() => goToSlide(activeSlide + 1)}
              disabled={activeSlide === highlights.length - 1}
              className="rounded-xl gap-2 text-sm disabled:opacity-30"
            >
              {t.programs.nextButton}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
};
