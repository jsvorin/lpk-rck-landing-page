export type Language = 'id' | 'jp';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface TranslationData {
  nav: NavItem[];
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustBadges: string[];
  };
  about: {
    badge: string;
    title: string;
    description1: string;
    description2: string;
    stats: {
      alumni: string;
      partners: string;
      experience: string;
    };
  };
  programs: {
    badge: string;
    title: string;
    subtitle: string;
    items: Program[];
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    apprenticeship: {
      name: string;
      price: string;
      period: string;
      features: string[];
    };
    tokuteiGinou: {
      name: string;
      price: string;
      period: string;
      features: string[];
      badge: string;
    };
    cta: string;
  };
  advantages: {
    badge: string;
    title: string;
    items: Advantage[];
  };
  faq: {
    badge: string;
    title: string;
    items: FAQ[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    address: string;
    whatsapp: string;
    email: string;
    cta: string;
  };
  footer: {
    description: string;
    rights: string;
  };
}
