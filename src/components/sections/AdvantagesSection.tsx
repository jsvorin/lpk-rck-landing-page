
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Section, SectionHeader } from '../layout/Section';
import { Home, CheckCircle, Plane, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { fadeUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'home': return <Home className="w-8 h-8 text-blue-400" />;
    case 'check-circle': return <CheckCircle className="w-8 h-8 text-blue-400" />;
    case 'plane': return <Plane className="w-8 h-8 text-blue-400" />;
    default: return <CheckCircle className="w-8 h-8 text-blue-400" />;
  }
};

export const AdvantagesSection = () => {
  const { t } = useLanguage();
  const items = t.advantages.items;
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < items.length) {
      setDirection(index > activeSlide ? 1 : -1);
      setActiveSlide(index);
    }
  }, [activeSlide, items.length]);

  const activeItem = items[activeSlide];

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 80 : -80,
      rotateY: dir > 0 ? 12 : -12,
      scale: 0.96,
    }),
    center: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -80 : 80,
      rotateY: dir > 0 ? -12 : 12,
      scale: 0.96,
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.08, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.15, ease: 'easeOut' as const },
    },
  };

  return (
    <Section id="keunggulan" bg="dark" className="bg-navy-900 border-t border-navy-800">
      <SectionHeader
        title={t.advantages.title}
        centered
        light
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-4xl mx-auto"
      >
        {/* Tab indicators */}
        <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => goToSlide(idx)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                idx === activeSlide
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                  : 'bg-navy-800 text-navy-300 border border-navy-700 hover:bg-navy-700 hover:text-white hover:border-navy-600 hover:scale-105'
              }`}
            >
              {item.title.split('(')[0].trim().split('（')[0].trim()}
            </button>
          ))}
        </div>

        {/* Carousel card */}
        <div
          className="group relative bg-navy-800/50 border border-navy-700 rounded-2xl overflow-hidden hover:border-navy-600 hover:shadow-2xl hover:shadow-navy-950/40 transition-all duration-500"
          style={{ perspective: '1200px' }}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-600/0 group-hover:bg-blue-600 transition-colors duration-500 z-10" />

          <div className="relative min-h-[420px] md:min-h-[360px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="absolute inset-0 p-8 md:p-10"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`flex flex-col ${activeItem.image ? 'md:flex-row' : ''} gap-8 items-center h-full`}>
                  {/* Icon + text */}
                  <div className={`${activeItem.image ? 'md:w-1/2' : 'w-full'} space-y-4`}>
                    <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center border border-navy-700 group-hover:border-navy-600 group-hover:scale-110 transition-all duration-300">
                      {getIcon(activeItem.icon)}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white">{activeItem.title}</h3>
                    <p className="text-navy-300 leading-relaxed">{activeItem.description}</p>

                    {activeItem.downloadPdf && activeItem.downloadBtn && (
                      <div className="pt-2">
                        <Button
                          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/20 h-12 px-6 flex items-center gap-2 group/btn w-full sm:w-auto text-sm font-semibold transition-all hover:-translate-y-0.5"
                          asChild
                        >
                          <a
                            href={activeItem.downloadPdf}
                            download="Kurikulum_Silabus_LPK_RCK.pdf"
                          >
                            <Download className="w-4 h-4 shrink-0 group-hover/btn:-translate-y-0.5 transition-transform" />
                            <span>{activeItem.downloadBtn}</span>
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Asrama photo — appears on page switch */}
                  {activeItem.image && (
                    <motion.div
                      className="md:w-1/2 w-full"
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <div className="relative rounded-xl overflow-hidden border border-navy-700 group-hover:border-navy-600 transition-colors duration-500 shadow-xl">
                        <img
                          src={activeItem.image}
                          alt={activeItem.title}
                          className="w-full h-52 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between p-4 md:p-6 border-t border-navy-700/50">
            <Button
              variant="outline"
              onClick={() => goToSlide(activeSlide - 1)}
              disabled={activeSlide === 0}
              className="rounded-xl gap-2 text-sm disabled:opacity-30 bg-navy-900/50 border-navy-700 text-navy-200 hover:bg-navy-700 hover:text-white hover:border-navy-600 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
              {t.advantages.prevButton}
            </Button>

            <div className="flex items-center gap-1.5">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === activeSlide
                      ? 'w-8 h-2.5 bg-blue-600 shadow-md shadow-blue-600/40'
                      : 'w-2.5 h-2.5 bg-navy-600 hover:bg-navy-400 hover:scale-125'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={() => goToSlide(activeSlide + 1)}
              disabled={activeSlide === items.length - 1}
              className="rounded-xl gap-2 text-sm disabled:opacity-30 bg-navy-900/50 border-navy-700 text-navy-200 hover:bg-navy-700 hover:text-white hover:border-navy-600 transition-all duration-300"
            >
              {t.advantages.nextButton}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
