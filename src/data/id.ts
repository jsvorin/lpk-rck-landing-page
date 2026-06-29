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
    heroButtons: {
      ssw: 'SSW Test',
      jlpt: 'JLPT Passed',
      jobMatching: 'Job Matching',
      visaApproved: 'Visa Approved',
    },
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
    companyProfile: {
      title: 'Company Profile',
      description: 'Lembaga Pelatihan Kerja (LPK) Rumah Cipta Kerja didirikan dengan komitmen tinggi untuk membekali talenta muda Indonesia agar memiliki keahlian profesional, kompetensi bahasa Jepang, serta pemahaman budaya kerja Jepang yang mumpuni. Kami mendampingi para calon pekerja sejak masa orientasi, pelatihan intensif, hingga penyaluran kerja yang legal, aman, dan terpercaya.',
      visionTitle: 'Visi Kami',
      visionText: 'Menjadi lembaga pelatihan kerja terdepan yang menghasilkan sumber daya manusia berdaya saing global, berintegritas tinggi, dan siap berkontribusi aktif di industri internasional, khususnya Jepang.',
      missionTitle: 'Misi Kami',
      missionItems: [
        'Menyelenggarakan program pelatihan bahasa Jepang secara intensif dan aplikatif menggunakan metode teruji.',
        'Membina karakter peserta pelatihan yang disiplin, tangguh, dan menjunjung tinggi etika kerja profesional Jepang.',
        'Menjalin kemitraan yang kuat dan kredibel dengan berbagai perusahaan penerima dan lembaga di Jepang.',
        'Menjamin proses penyaluran kerja yang transparan, aman, dan mematuhi regulasi ketenagakerjaan resmi.'
      ],
      downloadBtn: 'Download Company Profile',
    },
    legal: {
      title: 'Legalitas & Izin Operasional',
      subtitle: 'Sebagai lembaga resmi, kami menjamin seluruh legalitas operasional kami telah diakui dan terdaftar resmi oleh instansi pemerintah terkait.',
      items: [
        {
          title: 'Akta Notaris & Kemenkumham',
          detail: 'Akta Notaris No. 7 tanggal 09 Februari 2023, AHU-0002353.AH.01.04.Tahun 2023',
          icon: 'file-text'
        },
        {
          title: 'NIB & Izin Kominfo',
          detail: 'NIB - 1302230081524, Izin Kominfo 009243.01/DJAI.PSE/02/2023',
          icon: 'shield'
        },
        {
          title: 'VIN Kemenaker & Izin Disnaker',
          detail: 'No. VIN Kemenaker : 2302320304, Izin Disnaker Nomor : 563.2/Kep.79/II/2023',
          icon: 'briefcase'
        },
        {
          title: 'Akreditasi Lembaga',
          detail: 'Akreditasi LPK 52/LA-LPK/VII/2023',
          icon: 'award'
        }
      ]
    }
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
    serviceHighlightsTitle: 'Layanan Unggulan Kami',
    serviceHighlightsSubtitle: 'Dari ujian bahasa sampai keberangkatan — semua kami dampingi.',
    prevButton: 'Sebelumnya',
    nextButton: 'Selanjutnya',
    serviceHighlights: [
      {
        id: 'ssw',
        title: 'SSW Test (Ujian Tokutei Ginou)',
        subtitle: 'Sertifikasi keterampilan untuk bekerja di Jepang',
        description: 'SSW Test atau ujian Tokutei Ginou adalah tes keterampilan yang wajib kamu lewati kalau ingin bekerja di Jepang lewat jalur Specified Skilled Worker. Ujian ini menguji kemampuan praktis di bidang tertentu — misalnya manufaktur, pertanian, perawatan lansia, atau restoran. Di LPK kami, kamu nggak cuma dikasih materi teori, tapi juga latihan langsung yang disesuaikan dengan format ujian terbaru. Kami paham bahwa setiap bidang punya tantangan berbeda, makanya persiapan yang kami berikan juga disesuaikan satu per satu. Banyak alumni kami yang berhasil lulus di percobaan pertama, karena mereka sudah terbiasa dengan pola soal dan simulasi yang kami adakan secara berkala.',
        icon: 'award',
      },
      {
        id: 'jlpt',
        title: 'JLPT (Japanese Language Proficiency Test)',
        subtitle: 'Bukti kemampuan bahasa Jepangmu yang diakui dunia',
        description: 'JLPT adalah ujian kemampuan bahasa Jepang yang diakui secara internasional, dari level N5 (pemula) sampai N1 (mahir). Untuk bisa bekerja atau magang di Jepang, minimal kamu butuh level N4. Di sini, kami mengajar bahasa Jepang bukan sekadar hafalan kosakata atau tata bahasa — tapi juga cara berpikir dan berkomunikasi seperti orang Jepang. Kelas kami diajar oleh instruktur berpengalaman dan native speaker, lengkap dengan try out rutin supaya kamu tahu sejauh mana perkembanganmu. Belajar bareng teman-teman satu tujuan bikin prosesnya terasa lebih ringan dan menyenangkan.',
        icon: 'book-open',
      },
      {
        id: 'job-matching',
        title: 'Job Matching',
        subtitle: 'Penempatan kerja yang sesuai dengan kemampuanmu',
        description: 'Setelah kamu lulus ujian dan punya sertifikat, langkah selanjutnya adalah mendapatkan pekerjaan yang tepat. Kami tidak asal menempatkan — kami mencocokkan profil, kemampuan, dan minat kamu dengan perusahaan-perusahaan di Jepang yang sudah jadi mitra kami. Proses job matching ini melibatkan simulasi wawancara, persiapan dokumen, dan bahkan latihan budaya kerja Jepang supaya kamu nggak kaget pas hari pertama masuk kantor. Tingkat keberhasilan penempatan kami sangat tinggi karena kami benar-benar selektif dalam memilih mitra perusahaan — yang penting bukan cuma dapat kerja, tapi dapat tempat kerja yang layak.',
        icon: 'briefcase',
      },
      {
        id: 'visa-approved',
        title: 'Visa Approved',
        subtitle: 'Proses visa tanpa ribet, kami bantu dari awal',
        description: 'Ngurusin visa ke Jepang memang bisa bikin pusing kalau kamu belum pernah melakukannya. Tapi tenang — di sinilah tim kami bekerja. Mulai dari pengumpulan dokumen, pengecekan kelengkapan, sampai pengajuan ke kedutaan, semuanya kami dampingi langkah demi langkah. Kami sudah berpengalaman mengurus ratusan visa untuk alumni-alumni sebelumnya, jadi kami tahu persis apa yang dibutuhkan dan apa yang sering jadi kendala. Kamu cukup fokus belajar dan mempersiapkan diri — urusan administrasi visa biar kami yang handle. Begitu visa kamu disetujui, artinya kamu tinggal selangkah lagi menuju Jepang.',
        icon: 'check-circle',
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
    cta: 'Hubungi via WA',
    gformCta: 'Daftar Online (Google Form)',
  },
  footer: {
    description: 'Lembaga Pelatihan Kerja (LPK) resmi untuk program magang, Tokutei Ginou, dan Kaigo ke Jepang.',
    rights: 'Hak Cipta Dilindungi.',
  },
};
