
import { Section } from '../layout/Section';
import { useLanguage } from '@/contexts/LanguageContext';

const imagesRow1 = [
  'public/dokumentasi1.jpeg',
  'public/dokumentasi2.jpeg',
  'public/dokumentasi3.jpeg',
  'public/dokumentasi4.jpeg',
  'public/dokumentasi5.jpeg',
];

const imagesRow2 = [
  'public/dokumentasi6.jpeg',
  'public/dokumentasi7.jpeg',
  'public/dokumentasi8.jpeg',
  'public/dokumentasi9.jpeg',
  'public/dokumentasi10.jpeg',
];

export const GallerySection = () => {
  const { language } = useLanguage();

  return (
    <Section id="galeri" bg="white" className="py-20 md:py-28">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 bg-blue-50 text-blue-600">
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {language === 'id' ? 'GALERI KEGIATAN' : 'ギャラリー'}
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900">
          {language === 'id' ? 'Sekilas Aktivitas Kami' : '私たちの活動'}
        </h2>
      </div>

      <div className="relative flex flex-col gap-4 overflow-hidden py-4">
        {/* Gradient overlays for smooth fading edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Row 1 */}
        <div className="flex w-[200%] gap-4 gallery-track">
          {[...imagesRow1, ...imagesRow1].map((src, i) => (
            <div key={i} className="relative w-[300px] md:w-[400px] h-[200px] md:h-[250px] shrink-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply opacity-0 hover:opacity-100 transition-opacity z-10"></div>
              <img src={src} alt="Kegiatan LPK Rumah Cipta Kerja" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-[200%] gap-4 gallery-track-reverse ml-[-50%]">
          {[...imagesRow2, ...imagesRow2].map((src, i) => (
            <div key={i} className="relative w-[300px] md:w-[400px] h-[200px] md:h-[250px] shrink-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply opacity-0 hover:opacity-100 transition-opacity z-10"></div>
              <img src={src} alt="Kegiatan LPK Rumah Cipta Kerja" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
