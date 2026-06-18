
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const FloatingWhatsApp = () => {
  const { t } = useLanguage();
  
  // Format phone number for WhatsApp URL (remove spaces, +, etc)
  const phone = t.contact.whatsapp.replace(/[^0-9]/g, '');
  const message = encodeURIComponent('Halo Rumah Cipta Kerja, saya ingin bertanya tentang program pelatihan dan kerja ke Jepang.');
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <motion.a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-whatsapp text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-16 px-3 py-2 bg-white text-navy-900 text-xs font-bold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Hubungi Kami
        <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-white"></span>
      </span>
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full border-2 border-whatsapp animate-ping opacity-20"></span>
    </motion.a>
  );
};
