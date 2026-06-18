
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Section, SectionHeader } from '../layout/Section';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

export const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <Section id="biaya" bg="gray">
      <SectionHeader 
        badge={t.pricing.badge}
        title={t.pricing.title}
        subtitle={t.pricing.subtitle}
        centered
      />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        {/* Apprenticeship Card */}
        <motion.div variants={fadeUp}>
          <Card className="h-full border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col relative bg-white">
            <CardHeader className="pb-8 pt-10 text-center">
              <CardTitle className="text-2xl font-bold text-navy-800 mb-2">{t.pricing.apprenticeship.name}</CardTitle>
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-xl font-semibold text-gray-500">Rp</span>
                <span className="text-5xl font-extrabold text-navy-900 tracking-tight">{t.pricing.apprenticeship.price}</span>
              </div>
              <p className="text-gray-500 font-medium">Masa Pelatihan: {t.pricing.apprenticeship.period}</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                {t.pricing.apprenticeship.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-8 pb-10">
              <Button className="w-full h-12 bg-white border border-gray-200 text-navy-800 hover:bg-gray-50 rounded-xl" asChild>
                <a href="#kontak">Detail Biaya</a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Tokutei Ginou Card (Highlighted) */}
        <motion.div variants={fadeUp}>
          <Card className="h-full border-blue-600 border-2 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col relative bg-white overflow-hidden transform md:-translate-y-4">
            {/* Absolute badge */}
            <div className="absolute top-0 right-0 left-0 flex justify-center">
              <Badge className="bg-gold text-white uppercase tracking-wider font-bold text-xs py-1.5 px-4 rounded-b-lg rounded-t-none border-none">
                {t.pricing.tokuteiGinou.badge}
              </Badge>
            </div>
            
            <CardHeader className="pb-8 pt-12 text-center bg-blue-50/50">
              <CardTitle className="text-2xl font-bold text-blue-900 mb-2">{t.pricing.tokuteiGinou.name}</CardTitle>
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-xl font-semibold text-blue-600">Rp</span>
                <span className="text-5xl font-extrabold text-blue-600 tracking-tight">{t.pricing.tokuteiGinou.price}</span>
              </div>
              <p className="text-gray-500 font-medium">Masa Pelatihan: {t.pricing.tokuteiGinou.period}</p>
            </CardHeader>
            <CardContent className="flex-grow pt-8">
              <ul className="space-y-4">
                {t.pricing.tokuteiGinou.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-8 pb-10">
              <Button className="w-full h-12 bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20 rounded-xl group" asChild>
                <a href="#kontak" className="flex items-center justify-center gap-2">
                  {t.pricing.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  );
};
