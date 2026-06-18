
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Section, SectionHeader } from '../layout/Section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { fadeUp } from '@/lib/animations';

export const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <Section id="faq" bg="gray">
      <div className="max-w-3xl mx-auto">
        <SectionHeader 
          badge={t.faq.badge}
          title={t.faq.title}
          centered
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Accordion type="single" collapsible className="w-full bg-white rounded-2xl p-2 shadow-sm border border-gray-100">
            {t.faq.items.map((item, index) => (
              <AccordionItem key={item.id} value={`item-${index}`} className="border-b-0 px-4 py-1">
                <AccordionTrigger className="text-left font-bold text-navy-800 hover:text-blue-600 py-4 text-base md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
                {index < t.faq.items.length - 1 && <div className="h-px bg-gray-100 w-full" />}
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </Section>
  );
};
