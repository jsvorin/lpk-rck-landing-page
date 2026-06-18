
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Section, SectionHeader } from '../layout/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Award, Heart, BookOpen, Check } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

export const ProgramsSection = () => {
  const { t } = useLanguage();

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
        className="grid md:grid-cols-2 gap-6 lg:gap-8"
      >
        {t.programs.items.map((program) => (
          <motion.div key={program.id} variants={fadeUp}>
            <Card className="h-full border-gray-200 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
              <CardHeader className="pb-4 relative z-10">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                  <div className="group-hover:text-white transition-colors">
                    {/* Render icon based on string from data */}
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
              {/* Subtle accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors"></div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
