
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Section, SectionHeader } from '../layout/Section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, fadeLeft } from '@/lib/animations';

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <Section id="kontak" bg="white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Contact Info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeader
            badge={t.contact.badge}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />

          <div className="space-y-6 mb-10">
            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-navy-900 mb-1">Lokasi Kami</h4>
                <p className="text-gray-600">{t.contact.address}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-navy-900 mb-1">Telepon & WhatsApp</h4>
                <p className="text-gray-600">{t.contact.whatsapp}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-navy-900 mb-1">Email</h4>
                <p className="text-gray-600">{t.contact.email}</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
            <Button size="lg" className="bg-whatsapp hover:bg-[#20BD5A] text-white rounded-xl shadow-lg shadow-whatsapp/20 h-14 px-8 w-full sm:w-auto text-base group" asChild>
              <a href={`https://wa.me/${t.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                {t.contact.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/20 h-14 px-8 w-full sm:w-auto text-base group animate-pulse hover:animate-none" asChild>
              <a href="https://forms.gle/MbH75F2zC7WVzuZq6" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                {t.contact.gformCta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Map / Image */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="border-gray-200 overflow-hidden shadow-lg p-2">
            <div className="rounded-xl overflow-hidden aspect-square md:aspect-video lg:aspect-square bg-gray-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.4900119029257!2d107.12115337453949!3d-6.831698466826414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68532cc178cce3%3A0xd2cf31dafceea9c8!2sLPK%20RUMAH%20CIPTA%20KERJA!5e0!3m2!1sid!2sid!4v1781867803788!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                title="Lokasi LPK Rumah Cipta Kerja"
              ></iframe>
            </div>
          </Card>
        </motion.div>

      </div>
    </Section>
  );
};
