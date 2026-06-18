
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-950 pt-20 pb-10 text-white border-t border-navy-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-white/95 p-3 rounded-xl inline-block hover:opacity-90 transition-opacity">
              <img src="/logo.png" alt="Logo Rumah Ciptakerja" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-navy-300 text-sm leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-navy-300 hover:bg-blue-600 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-navy-300 hover:bg-blue-600 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-navy-300 hover:bg-red-600 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-3">
              {t.nav.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-navy-300 hover:text-blue-400 transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Program</h4>
            <ul className="space-y-3">
              {t.programs.items.map((item) => (
                <li key={item.id}>
                  <a href="#program" className="text-navy-300 hover:text-blue-400 transition-colors text-sm">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-navy-300 text-sm">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>{t.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-navy-300 text-sm">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <span>{t.contact.whatsapp}</span>
              </li>
              <li className="flex items-center gap-3 text-navy-300 text-sm">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <span>{t.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Rumah Cipta Kerja. {t.footer.rights}
          </p>
          <div className="text-navy-400 text-sm">
            Cianjur, Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
};
