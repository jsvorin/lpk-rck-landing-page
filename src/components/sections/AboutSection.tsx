
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Section, SectionHeader } from '../layout/Section';
import { Users, Building2, Calendar, Target } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

export const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '500+', label: t.about.stats.alumni, icon: Users },
    { value: '50+', label: t.about.stats.partners, icon: Building2 },
    { value: '5+', label: t.about.stats.experience, icon: Calendar },
    { value: '98%', label: 'Success Rate', icon: Target },
  ];

  return (
    <Section id="tentang" bg="gray">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <div>
          <SectionHeader 
            badge={t.about.badge}
            title={t.about.title}
          />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 text-gray-600 text-lg"
          >
            <motion.p variants={fadeUp}>
              {t.about.description1}
            </motion.p>
            <motion.p variants={fadeUp}>
              {t.about.description2}
            </motion.p>
          </motion.div>
        </div>

        {/* Right: Stats Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2">{stat.value}</h3>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
        
      </div>
    </Section>
  );
};
