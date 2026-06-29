import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Section, SectionHeader } from '../layout/Section';
import { Users, Building2, Calendar, Target, FileText, Shield, Briefcase, Award, Download } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';

export const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '1000+', label: t.about.stats.alumni, icon: Users },
    { value: '50+', label: t.about.stats.partners, icon: Building2 },
    { value: '5+', label: t.about.stats.experience, icon: Calendar },
    { value: '98%', label: 'Success Rate', icon: Target },
  ];

  return (
    <Section id="tentang" bg="gray">
      {/* Intro Grid */}
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

      {/* Company Profile Subsection */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-24 pt-16 border-t border-gray-200/80"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">
              COMPANY PROFILE
            </div>
            <h3 className="text-3xl font-extrabold text-navy-900 leading-tight">
              {t.about.companyProfile.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {t.about.companyProfile.description}
            </p>
            <div className="pt-2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/20 h-12 px-6 flex items-center gap-2 group w-full sm:w-auto text-sm font-semibold transition-all" asChild>
                <a href="public/compro-2026.pdf" download="Company_Profile_LPK_Rumah_Cipta_Kerja.pdf">
                  <Download className="w-4 h-4 shrink-0 group-hover:-translate-y-0.5 transition-transform" />
                  <span>{t.about.companyProfile.downloadBtn}</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right Visi & Misi */}
          <div className="lg:col-span-7 space-y-6">
            {/* Visi */}
            <div className="bg-gradient-to-r from-blue-50/40 to-white p-6 rounded-2xl border border-blue-100/50 shadow-sm">
              <h4 className="text-lg font-bold text-blue-800 flex items-center gap-2.5 mb-3">
                <Target className="w-5 h-5 text-blue-600" />
                {t.about.companyProfile.visionTitle}
              </h4>
              <p className="text-gray-700 font-medium leading-relaxed">
                {t.about.companyProfile.visionText}
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="text-lg font-bold text-navy-900 flex items-center gap-2.5 mb-4">
                <Users className="w-5 h-5 text-blue-600" />
                {t.about.companyProfile.missionTitle}
              </h4>
              <ul className="space-y-3.5">
                {t.about.companyProfile.missionItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Legalitas & Izin Operasional Subsection */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-24 pt-16 border-t border-gray-200/80"
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-4">
            REGULASI & LEGALITAS
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4 tracking-tight">
            {t.about.legal.title}
          </h3>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            {t.about.legal.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.legal.items.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {item.icon === 'file-text' && <FileText className="w-6 h-6 transition-colors" />}
                  {item.icon === 'shield' && <Shield className="w-6 h-6 transition-colors" />}
                  {item.icon === 'briefcase' && <Briefcase className="w-6 h-6 transition-colors" />}
                  {item.icon === 'award' && <Award className="w-6 h-6 transition-colors" />}
                </div>
                <h4 className="font-bold text-navy-900 text-lg mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line mt-auto pt-4 border-t border-gray-50">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};
