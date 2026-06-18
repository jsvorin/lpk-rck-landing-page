import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { fadeUp } from '@/lib/animations';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  bg?: 'white' | 'gray' | 'dark' | 'gradient';
}

export const Section = ({ id, className, children, bg = 'white' }: SectionProps) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-navy-900 text-white',
    gradient: 'hero-gradient text-white'
  };

  return (
    <section id={id} className={cn('py-20 md:py-28 overflow-hidden relative', bgClasses[bg], className)}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({ badge, title, subtitle, centered = false, light = false }: { badge: string; title: string; subtitle?: string; centered?: boolean; light?: boolean }) => {
  return (
    <motion.div 
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("mb-12 md:mb-16", centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl")}
    >
      <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4", 
        light ? "bg-white/10 text-blue-200" : "bg-blue-50 text-blue-600"
      )}>
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
        {badge}
      </div>
      <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4", light ? "text-white" : "text-navy-900")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg md:text-xl", light ? "text-navy-200" : "text-gray-500")}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
