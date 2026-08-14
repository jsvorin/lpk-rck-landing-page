import { useRef } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { fadeUp } from '@/lib/animations';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const TeamSection = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fallback if data doesn't exist yet
  if (!t.about.team) return null;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mt-24 pt-16 border-t border-gray-200/80 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-4">
            {t.about.team.badge}
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4 tracking-tight">
            {t.about.team.title}
          </h3>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            {t.about.team.subtitle}
          </p>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all focus:outline-none"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-all focus:outline-none"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {t.about.team.members.map((member: any, idx: number) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] snap-center shrink-0 group relative cursor-pointer"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 mb-6 shadow-sm border border-gray-200/50 group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-500">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {member.kanjiRole && (
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                  <span className="text-8xl font-black text-white" style={{ writingMode: 'vertical-rl' }}>
                    {member.kanjiRole}
                  </span>
                </div>
              )}

              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md border ${
                  member.category === 'direktur' 
                    ? 'bg-amber-500/90 text-white border-amber-400/50' 
                    : member.category === 'sekretaris' || member.category === 'pic'
                    ? 'bg-blue-600/90 text-white border-blue-500/50'
                    : 'bg-white/90 text-navy-900 border-white/50'
                }`}>
                  {member.role.split('/')[0].trim()}
                </span>
              </div>
            </div>

            <div className="group-hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-2xl font-black text-navy-900 mb-1">{member.name}</h4>
              <p className="text-blue-600 font-semibold text-sm md:text-base">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
