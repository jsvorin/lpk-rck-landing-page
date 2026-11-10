
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Section, SectionHeader } from '../layout/Section';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { fadeUp } from '@/lib/animations';

export const PricingSection = () => {
  const { t, language } = useLanguage();

  return (
    <Section id="biaya" bg="gray">
      <SectionHeader
        title={t.pricing.title}
        subtitle={t.pricing.subtitle}
        centered
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl mx-auto w-full px-4 sm:px-0"
      >
        <Card className="border-2 border-blue-600/30 hover:border-blue-600/60 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col relative bg-white overflow-hidden rounded-3xl">
          {/* Top Decorative Gradient Accent Bar */}
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-blue-500 via-blue-600 to-navy-900" />

          {/* Badge */}
          <div className="flex justify-center pt-7">
            <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white uppercase tracking-wider font-bold text-xs py-1.5 px-4 rounded-full shadow-sm border-none flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {t.pricing.tokuteiGinou.badge}
            </Badge>
          </div>

          <CardHeader className="pb-6 pt-4 text-center">
            <CardTitle className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 tracking-tight">
              {t.pricing.tokuteiGinou.name}
            </CardTitle>

            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mx-auto mb-4 border border-blue-100/80">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>{language === 'id' ? 'Masa Pelatihan:' : '研修期間:'} {t.pricing.tokuteiGinou.period}</span>
            </div>

            <div className="flex items-baseline justify-center gap-1.5 my-2">
              <span className="text-2xl md:text-3xl font-bold text-blue-600">Rp</span>
              <span className="text-5xl md:text-6xl font-black text-navy-950 tracking-tight">
                {t.pricing.tokuteiGinou.price}
              </span>
            </div>

            <p className="text-sm text-gray-500 font-medium">
              {language === 'id' ? 'Biaya transparan • Sudah termasuk seluruh fasilitas pelatihan' : '明瞭な費用 • 全研修施設利用込み'}
            </p>
          </CardHeader>

          <CardContent className="flex-grow px-6 md:px-10 py-6 border-t border-gray-100 bg-gray-50/40">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 text-center sm:text-left">
              {language === 'id' ? 'Fasilitas & Layanan Termasuk:' : '含まれる施設とサポート:'}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3.5">
              {t.pricing.tokuteiGinou.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-100 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-navy-800 font-medium leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="pt-6 pb-10 px-6 md:px-10 flex flex-col gap-3">
            <Button className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-bold text-base shadow-lg shadow-red-600/25 rounded-2xl group transition-all duration-300 hover:scale-[1.01]" asChild>
              <a href="#kontak" className="flex items-center justify-center gap-2">
                {t.pricing.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-xs text-center text-gray-400">
              {language === 'id' ? 'Konsultasi gratis & tanyakan skema pembayaran bertahap kepada admin kami' : '無料相談・分割払い等の詳細についてもお気軽にお問い合わせください'}
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </Section>
  );
};
