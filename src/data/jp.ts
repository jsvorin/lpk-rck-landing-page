import type { TranslationData } from '../types';

export const jp: TranslationData = {
  nav: [
    { id: 'home', label: 'ホーム', href: '#home' },
    { id: 'tentang', label: '私たちについて', href: '#tentang' },
    { id: 'program', label: 'プログラム', href: '#program' },
    { id: 'keunggulan', label: '特徴', href: '#keunggulan' },
    { id: 'kontak', label: 'お問い合わせ', href: '#kontak' },
  ],
  hero: {
    badge: '日本の技能実習・特定技能 送り出し機関',
    title: '今日のスキルが、明日のキャリアにつながる',
    subtitle: '日本語教育、職業技能、そして日本のビジネス文化の理解を通じて、あなたの未来を準備します。',
    ctaPrimary: '今すぐ登録',
    ctaSecondary: 'プログラムを見る',
    trustBadges: ['500名以上の卒業生', '公式業界パートナー', '能力認定書'],
  },
  about: {
    badge: '私たちについて',
    title: '国際的なキャリアの懸け橋',
    description1: 'Rumah Cipta Kerjaは、インドネシアの若者が日本のビジネス環境で活躍できるよう育成する公式な職業訓練機関（LPK）です。',
    description2: '経験豊富な講師陣やネイティブスピーカーを通じて、言語だけでなく、日本の労働倫理、規律、文化理解を教えています。',
    stats: {
      alumni: '日本にいる卒業生',
      partners: '提携企業',
      experience: '年の経験',
    },
  },
  programs: {
    badge: 'プログラム',
    title: '日本でのキャリアプログラム',
    subtitle: '面接に合格し、即戦力として働くための業界標準カリキュラム。',
    items: [
      {
        id: 'magang',
        title: '技能実習 (Ginou Jisshu)',
        description: '日本の様々な産業分野における18〜28歳向けの技術実習プログラム。',
        icon: 'briefcase',
        features: ['N5レベルの日本語', '心身の訓練', '就職保証'],
      },
      {
        id: 'tokutei',
        title: '特定技能 (SSW)',
        description: 'JLPT/JFTおよびSSW試験の合格者を対象とした特定技能ビザプログラム。',
        icon: 'award',
        features: ['日本水準の給与', '最大5年のビザ', '家族帯同可能（2号）'],
      },
      {
        id: 'kaigo',
        title: '介護 (Kaigo)',
        description: '需要が高く、競争力のある給与水準を持つ介護職専門プログラム。',
        icon: 'heart',
        features: ['長期的なキャリアの機会', '特別手当', '優れた寮施設'],
      },
      {
        id: 'bahasa',
        title: '日本語クラス (N5-N3)',
        description: '初級から中級までのJLPT/JFT-Basic試験対策の集中クラス。',
        icon: 'book-open',
        features: ['ネイティブスピーカー', '定期模擬試験', '会話重視'],
      },
    ],
  },
  pricing: {
    badge: '未来への投資',
    title: '透明性のある教育費用',
    subtitle: '隠れた費用なしに、明確なコストで質の高い教育を提供することをお約束します。',
    apprenticeship: {
      name: '技能実習',
      price: '5.500.000',
      period: '3〜4ヶ月',
      features: ['学習ガイドブック', '訓練用制服', '修了証書', 'JLPT N5 模擬試験', '就職相談'],
    },
    tokuteiGinou: {
      name: '特定技能',
      price: '7.500.000',
      period: '4〜6ヶ月',
      features: ['N5の全施設', 'JLPT N4 / JFT 模擬試験', 'SSW試験対策', '面接シミュレーション', 'ビザ申請サポート'],
      badge: '一番人気',
    },
    cta: 'WhatsAppで費用相談',
  },
  advantages: {
    badge: '選ばれる理由',
    title: 'Rumah Cipta Kerjaの特徴',
    items: [
      {
        id: 'adv1',
        title: '統合された寮施設',
        description: '日本での生活習慣と規律を身につけるための快適な寮。',
        icon: 'home',
      },
      {
        id: 'adv2',
        title: '日本標準のカリキュラム',
        description: '最新のJLPT、JFT、SSW試験の基準に合わせて常に更新される学習教材。',
        icon: 'check-circle',
      },
      {
        id: 'adv3',
        title: '出発までの完全サポート',
        description: '登録から書類作成、日本到着までを全面的にサポートします。',
        icon: 'plane',
      },
    ],
  },
  faq: {
    badge: 'よくある質問',
    title: 'よく寄せられる質問',
    items: [
      {
        id: 'faq1',
        question: '学習から出発までどのくらいかかりますか？',
        answer: '言語の習得（最低N4）や面接の状況によりますが、平均して6〜12ヶ月かかります。',
      },
      {
        id: 'faq2',
        question: '登録に年齢制限はありますか？',
        answer: '技能実習プログラムは18〜28歳です。特定技能プログラムは18歳以上で、上限は一般的に35歳まで（企業により異なります）です。',
      },
      {
        id: 'faq3',
        question: '教育費の分割払いは可能ですか？',
        answer: 'はい、分割払いオプションをご用意しています。詳細な支払いプランについてはお問い合わせください。',
      },
    ],
  },
  contact: {
    badge: 'お問い合わせ',
    title: 'あなたの旅を始めましょう',
    subtitle: 'お気軽にご質問ください。あなたに最適なプログラムについて詳しくご案内いたします。',
    address: 'Jl. KH. Abdullah Bin Nuh No. 116A Sawahgede, Cianjur, West Java 43211',
    whatsapp: '+62 821-4822-2991',
    email: 'rcktrainingcenter@gmail.com',
    cta: 'WhatsApp メッセージを送信',
  },
  footer: {
    description: '日本への技能実習、特定技能、介護プログラムの公式な職業訓練機関（LPK）。',
    rights: 'All rights reserved.',
  },
};
