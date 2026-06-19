import type { TranslationData } from '../types';

export const id: TranslationData = {
  nav: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'tentang', label: 'Tentang Kami', href: '#tentang' },
    { id: 'program', label: 'Program', href: '#program' },
    { id: 'keunggulan', label: 'Keunggulan', href: '#keunggulan' },
    { id: 'kontak', label: 'Kontak', href: '#kontak' },
  ],
  hero: {
    badge: 'LEMBAGA PELATIHAN KERJA JEPANG',
    title: 'Skill Hari Ini, Karir Esok Hari',
    subtitle: 'Persiapkan masa depan Anda bersama program pelatihan bahasa Jepang, keterampilan kerja, dan pengenalan budaya profesional Jepang.',
    ctaPrimary: 'Daftar Sekarang',
    ctaSecondary: 'Lihat Program',
    trustBadges: ['1000+ Alumni Berhasil', 'Partner Resmi Industri', 'Sertifikat Kompetensi'],
  },
  about: {
    badge: 'TENTANG KAMI',
    title: 'Membangun Jembatan Karir Internasional Anda',
    description1: 'Rumah Cipta Kerja adalah Lembaga Pelatihan Kerja (LPK) resmi yang berdedikasi untuk mempersiapkan generasi muda Indonesia bersaing di dunia kerja Jepang.',
    description2: 'Kami tidak hanya mengajarkan bahasa, tetapi juga etos kerja, kedisiplinan, dan pemahaman budaya Jepang melalui instruktur berpengalaman dan native speaker.',
    stats: {
      alumni: 'Alumni di Jepang',
      partners: 'Perusahaan Mitra',
      experience: 'Tahun Pengalaman',
    },
  },
  programs: {
    badge: 'PROGRAM KAMI',
    title: 'Pilihan Program Karir Jepang',
    subtitle: 'Kurikulum standar industri yang dirancang untuk memastikan Anda lulus wawancara dan siap bekerja.',
    items: [
      {
        id: 'magang',
        title: 'Magang Jepang (Ginou Jisshu)',
        description: 'Program pemagangan teknis untuk usia 18-28 tahun di berbagai sektor industri Jepang.',
        icon: 'briefcase',
        features: ['Bahasa level N5', 'Pelatihan Fisik & Mental', 'Penempatan Kerja Terjamin'],
      },
      {
        id: 'tokutei',
        title: 'Tokutei Ginou (SSW)',
        description: 'Program visa pekerja terampil spesifik bagi mereka yang sudah memiliki sertifikat JLPT/JFT dan SSW.',
        icon: 'award',
        features: ['Gaji Standar Jepang', 'Visa hingga 5 tahun', 'Bisa Membawa Keluarga (Tipe 2)'],
      },
      {
        id: 'bahasa',
        title: 'Kelas Bahasa Jepang (N5-N4)',
        description: 'Kelas intensif persiapan ujian JLPT/JFT-Basic dari level pemula hingga menengah.',
        icon: 'book-open',
        features: ['Native Speaker', 'Try Out Rutin', 'Fokus Percakapan'],
      },
    ],
  },
  pricing: {
    badge: 'INVESTASI MASA DEPAN',
    title: 'Biaya Pendidikan Transparan',
    subtitle: 'Kami berkomitmen memberikan pendidikan berkualitas dengan biaya yang jelas tanpa biaya tersembunyi.',
    apprenticeship: {
      name: 'Pemagangan',
      price: '5.500.000',
      period: '3-4 Bulan',
      features: ['Buku Panduan Belajar', 'Seragam Pelatihan', 'Sertifikat Kelulusan', 'Try Out JLPT N5', 'Konsultasi Penempatan'],
    },
    tokuteiGinou: {
      name: 'Tokutei Ginou',
      price: '7.500.000',
      period: '4-6 Bulan',
      features: ['Semua Fasilitas N4', 'Try Out JLPT N4 / JFT-Basic', 'Persiapan Tes SSW', 'Simulasi Wawancara Kerja', 'Bimbingan Pemberkasan Visa'],
      badge: 'Paling Diminati',
    },
    cta: 'Konsultasi Biaya via WhatsApp',
  },
  advantages: {
    badge: 'MENGAPA MEMILIH KAMI',
    title: 'Keunggulan Rumah Cipta Kerja',
    items: [
      {
        id: 'adv1',
        title: 'Fasilitas Asrama Terpadu',
        description: 'Asrama yang nyaman untuk membentuk kedisiplinan dan kebiasaan hidup seperti di Jepang.',
        icon: 'home',
      },
      {
        id: 'adv2',
        title: 'Kurikulum Standar Jepang',
        description: 'Materi pembelajaran yang selalu di-update sesuai standar JLPT, JFT, dan ujian SSW terkini.',
        icon: 'check-circle',
      },
      {
        id: 'adv3',
        title: 'Bimbingan Sampai Berangkat',
        description: 'Pendampingan penuh dari mulai pendaftaran, pengurusan dokumen, hingga tiba di Jepang.',
        icon: 'plane',
      },
    ],
  },
  faq: {
    badge: 'TANYA JAWAB',
    title: 'Pertanyaan yang Sering Diajukan',
    items: [
      {
        id: 'faq1',
        question: 'Berapa lama proses dari belajar sampai berangkat?',
        answer: 'Rata-rata membutuhkan waktu 6-12 bulan, tergantung kemampuan siswa dalam menguasai bahasa (minimal N4) dan kecocokan saat wawancara kerja.',
      },
      {
        id: 'faq2',
        question: 'Apakah ada batasan usia untuk mendaftar?',
        answer: 'Untuk program Magang (Ginou Jisshu) usia 18-28 tahun. Untuk program Tokutei Ginou usia minimal 18 tahun dan maksimal umumnya 35 tahun (tergantung perusahaan).',
      },
      {
        id: 'faq3',
        question: 'Apakah biaya pendidikan bisa dicicil?',
        answer: 'Ya, kami menyediakan opsi pembayaran bertahap. Silakan hubungi admin kami untuk detail skema cicilan.',
      },
    ],
  },
  contact: {
    badge: 'HUBUNGI KAMI',
    title: 'Mulai Perjalanan Anda',
    subtitle: 'Jangan ragu untuk bertanya. Tim kami siap membantu memberikan informasi detail tentang program yang sesuai untuk Anda.',
    address: 'Jl. KH Abdullah Bin Nuh No.116 A, Sawah Gede, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43212',
    whatsapp: '+62 821-4822-2991',
    email: 'rcktrainingcenter@gmail.com',
    cta: 'Kirim Pesan WhatsApp',
  },
  footer: {
    description: 'Lembaga Pelatihan Kerja (LPK) resmi untuk program magang, Tokutei Ginou, dan Kaigo ke Jepang.',
    rights: 'Hak Cipta Dilindungi.',
  },
};
