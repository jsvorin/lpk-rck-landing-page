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
    heroButtons: {
      ssw: 'SSW試験',
      jlpt: 'JLPT合格',
      jobMatching: 'ジョブマッチング',
      visaApproved: 'ビザ承認',
    },
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
    companyProfile: {
      title: 'Company Profile (企業プロファイル)',
      description: 'Rumah Cipta Kerja職業訓練校（LPK）は、インドネシアの優秀な人材と日本でのプロフェッショナルなキャリア機会を結ぶ高いコミットメントを持って設立されました。総合的なスキル学習、集中的な語学教育、日本基準の規律と労働倫理の育成を通じて、私たちは受講生のスタートから日本への派遣成功まで we を全面的にサポートします。',
      visionTitle: '私たちのビジョン',
      visionText: 'グローバルな労働市場、特に日本において、有能で優れたキャラクターを持ち、競争力のある人材を育成する先駆的な職業訓練機関となること。',
      missionTitle: '私たちのミッション',
      missionItems: [
        '適応的かつインタラクティブな方法で、集中的な日本語および日本文化の訓練を実施する。',
        '日本の産業基準に従って、規律、プロフェッショナルな精神、および労働倫理を形成する。',
        '日本の受け入れ機関（監理団体・登録支援機関）との広範で信頼できるパートナーシップネットワークを構築する。',
        '透明性があり、信頼のおけるキャリアガイダンスを提供し、出発プロセス全体をサポートする。'
      ],
      downloadBtn: '会社案内をダウンロード (PDF)',
    },
    legal: {
      title: '法的資格＆運営許可証',
      subtitle: '公式な職業訓練機関として、当校のすべての運営ライセンスは関連する政府機関によって承認され、公式に登録されています。',
      items: [
        {
          title: '公正証書＆法務人権省承認',
          detail: '2023年2月9日付公正証書第7号、AHU-0002353.AH.01.04.Tahun 2023',
          icon: 'file-text'
        },
        {
          title: '事業基本番号(NIB)＆通信情報省許可',
          detail: 'NIB - 1302230081524、通信情報省許可 009243.01/DJAI.PSE/02/2023',
          icon: 'shield'
        },
        {
          title: '労働省VIN番号＆地方労働局運営許可',
          detail: '労働省VIN : 2302320304、地方労働局許可番号 : 563.2/Kep.79/II/2023',
          icon: 'briefcase'
        },
        {
          title: '職業訓練校認定資格',
          detail: 'LPK認定番号 52/LA-LPK/VII/2023',
          icon: 'award'
        }
      ]
    }
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
        id: 'bahasa',
        title: '日本語クラス (N5-N4)',
        description: '初級から中級までのJLPT/JFT-Basic試験対策の集中クラス。',
        icon: 'book-open',
        features: ['ネイティブスピーカー', '定期模擬試験', '会話重視'],
      },
    ],
    serviceHighlightsTitle: '主要サービス',
    serviceHighlightsSubtitle: '語学試験から出発まで、すべてサポートします。',
    prevButton: '前へ',
    nextButton: '次へ',
    serviceHighlights: [
      {
        id: 'ssw',
        title: 'SSW試験（特定技能試験）',
        subtitle: '日本で働くための技能認定',
        description: 'SSW試験（特定技能試験）は、特定技能ビザで日本で働くために必要な技能試験です。製造業、農業、介護、飲食業など、各分野の実践的な能力が問われます。当校では、理論だけでなく、最新の試験形式に合わせた実践的なトレーニングを提供しています。各分野ごとに異なる課題があることを理解しており、一人ひとりに合わせた準備を行っています。多くの卒業生が初回の受験で合格しているのは、定期的な模擬試験と出題パターンに慣れているからです。',
        icon: 'award',
      },
      {
        id: 'jlpt',
        title: 'JLPT（日本語能力試験）',
        subtitle: '世界で認められた日本語力の証明',
        description: 'JLPTは、N5（初級）からN1（上級）まで、国際的に認められた日本語能力試験です。日本で働くには、最低N4レベルが必要です。当校では、単なる語彙や文法の暗記ではなく、日本人のように考え、コミュニケーションする方法を教えています。経験豊富な講師とネイティブスピーカーによる授業に加え、定期的な模擬試験で自分の成長を確認できます。同じ目標を持つ仲間と一緒に学ぶことで、学習がより楽しく効果的になります。',
        icon: 'book-open',
      },
      {
        id: 'job-matching',
        title: 'ジョブマッチング',
        subtitle: 'あなたの能力に合った就職先を',
        description: '試験に合格し資格を取得したら、次のステップは適切な仕事を見つけることです。私たちは適当に配置するのではなく、あなたのプロフィール、能力、興味を、パートナー企業とマッチングします。面接シミュレーション、書類準備、さらには日本の職場文化のトレーニングまで行い、初日から戸惑わないようにサポートします。パートナー企業の選定にも厳格な基準を設けており、「就職できる」だけでなく「良い職場で働ける」ことを重視しています。',
        icon: 'briefcase',
      },
      {
        id: 'visa-approved',
        title: 'ビザ承認',
        subtitle: '煩雑なビザ手続きも最初からサポート',
        description: '日本へのビザ申請は、初めての方にとっては複雑に感じるかもしれません。でもご安心ください。書類の収集、確認、大使館への申請まで、すべてのステップを一緒にサポートします。これまで何百人もの卒業生のビザ手続きを担当してきた経験があるため、何が必要で何が問題になりやすいかを熟知しています。あなたは学習と準備に集中してください。ビザの事務手続きは私たちにお任せください。ビザが承認されれば、日本まであと一歩です。',
        icon: 'check-circle',
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
    address: 'Jl. KH Abdullah Bin Nuh No. 116 A, Sawah Gede, Cianjur District, Cianjur Regency, West Java 43212',
    whatsapp: '+62 821-4822-2991',
    email: 'rcktrainingcenter@gmail.com',
    cta: 'WhatsAppで問い合わせ',
    gformCta: 'オンライン申込み (Google Form)',
  },
  footer: {
    description: '日本への技能実習、特定技能、介護プログラムの公式な職業訓練機関（LPK）。',
    rights: 'All rights reserved.',
  },
};
