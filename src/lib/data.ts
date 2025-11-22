import { Github, Linkedin, Mail, Twitter, Code, Database, Wind, Bot } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Tentang', href: '#about' },
  { name: 'Proyek', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Kontak', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { icon: Github, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Mail, href: '#' },
];

export const SKILLS = [
  { name: 'React', icon: Code },
  { name: 'Next.js', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Node.js', icon: Code },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'Figma', icon: 'figma' },
  { name: 'SQL', icon: Database },
  { name: 'GenAI', icon: Bot },
];

export const PROJECTS = [
  {
    title: 'Portofolio Milligram',
    description: 'Portofolio yang dibuat dengan menggunakan flask sebagai backend dan Milligram sebagai frontend dan mongodb atlas dan cloudinary sebagai penyimpanan manajemen konten',
    imageId: 'project-1',
    liveUrl: 'https://folio.ekasaputra.my.id/',
    repoUrl: '#',
    tags: ['Flask', 'MongoDB', 'Cloudinary', 'Milligram CSS'],
  },
  {
    title: 'Benartwork',
    description: 'E-commerece yang dibuat dengan menggunakan flask sebagai backend dan Bootstrap sebagai frontend dan mongodb atlas dan cloudinary sebagai penyimpanan manajemen konten',
    imageId: 'project-2',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'Proyek Gamma',
    description: 'Aplikasi jejaring sosial yang mengutamakan seluler yang dirancang untuk menghubungkan individu yang berpikiran sama melalui minat dan acara bersama.',
    imageId: 'project-3',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['React Native', 'Firebase', 'Figma'],
  },
  {
    title: 'Proyek Delta',
    description: 'Solusi e-commerce bertenaga AI yang menyediakan pengalaman berbelanja yang dipersonalisasi dan rekomendasi produk yang cerdas.',
    imageId: 'project-4',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['Python', 'GenAI', 'Stripe'],
  },
];

export const EXPERIENCE = [
  {
    role: 'Pengembang Frontend Senior',
    company: 'Tech Innovators Inc.',
    duration: '2021 - Sekarang',
    description: [
      'Memimpin pengembangan dasbor baru yang menghadap klien menggunakan Next.js, yang menghasilkan peningkatan keterlibatan pengguna sebesar 40%.',
      'Membimbing pengembang junior dan menetapkan praktik terbaik untuk kualitas dan pengujian kode.',
      'Berkolaborasi dengan desainer UX/UI untuk menerjemahkan wireframe menjadi kode berkualitas tinggi dan responsif.',
    ],
  },
  {
    role: 'Insinyur Perangkat Lunak',
    company: 'Digital Solutions Co.',
    duration: '2019 - 2021',
    description: [
      'Mengembangkan dan memelihara fitur untuk aplikasi React skala besar.',
      'Meningkatkan kinerja aplikasi dengan mengoptimalkan rendering komponen dan manajemen status.',
      'Berpartisipasi dalam tim agile, berkontribusi pada perencanaan sprint dan tinjauan kode.',
    ],
  },
];

export const EDUCATION = [
  {
    degree: 'S.Kom. dalam Ilmu Komputer',
    institution: 'Universitas Teknologi',
    duration: '2015 - 2019',
  },
  {
    degree: 'Sertifikasi Desain UI/UX Tingkat Lanjut',
    institution: 'Akademi Desain',
    duration: '2020',
  },
];
