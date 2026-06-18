
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Section, SectionHeader } from '../layout/Section';
import { Home, CheckCircle, Plane } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'home': return <Home className="w-8 h-8 text-blue-600" />;
    case 'check-circle': return <CheckCircle className="w-8 h-8 text-blue-600" />;
    case 'plane': return <Plane className="w-8 h-8 text-blue-600" />;
    default: return <CheckCircle className="w-8 h-8 text-blue-600" />;
  }
};

export const AdvantagesSection = () => {
  const { t } = useLanguage();

  return (
    <Section id="keunggulan" bg="dark" className="bg-navy-900 border-t border-navy-800">
      <SectionHeader 
        badge={t.advantages.badge}
        title={t.advantages.title}
        centered
        light
      />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-8"
      >
        {t.advantages.items.map((adv) => (
          <motion.div 
            key={adv.id} 
            variants={fadeUp}
            className="bg-navy-800/50 border border-navy-700 rounded-2xl p-8 hover:bg-navy-800 transition-colors duration-300 relative overflow-hidden group"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-600/0 group-hover:bg-blue-600 transition-colors duration-300"></div>
            
            <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mb-6 border border-navy-700 group-hover:border-blue-500/50 transition-colors">
              {getIcon(adv.icon)}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">{adv.title}</h3>
            <p className="text-navy-300 leading-relaxed">{adv.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
