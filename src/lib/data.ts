import { Github, Linkedin, Mail, Twitter, Code, Database, Wind, Bot } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Tentang', href: '#about' },
  { name: 'Proyek', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Kontak', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/IshikawaUta' },
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
    liveUrl: 'https://www.benartwork07.com/',
    repoUrl: '#',
    tags: ['Flask', 'MongoDB', 'Cloudinary', 'Bootstrap'],
  },
  {
    title: 'Eksa Shop',
    description: 'E-commerece yang dibuat dengan menggunakan flask sebagai backend dan Bootstrap sebagai frontend dan mongodb atlas dan cloudinary sebagai penyimpanan manajemen konten',
    imageId: 'project-3',
    liveUrl: 'https://shop.ekasaputra.my.id/',
    repoUrl: '#',
    tags: ['Flask', 'MongoDB', 'Cloudinary', 'Bootstrap'],
  },
  {
    title: 'Ekspost',
    description: 'Web ini dibuat dengan menggunakan Flask sebagai backend dan Bootstrap sebagai frontend juga MongoDB Atlas dan cloudinary sebagai penyimpanan manajemen konten',
    imageId: 'project-4',
    liveUrl: 'https://ekspost.vercel.app/index',
    repoUrl: '#',
    tags: ['Flask', 'Bootstrap', 'MongoDB', 'Cloudinary'],
  },
];

export const EXPERIENCE = [
  {
    role: 'Pengembang Backend',
    company: 'Eksa Shop',
    duration: '2025 - Sekarang',
    description: [
      'Memimpin pengembangan dasbor baru yang menghadap klien menggunakan Flask, yang menghasilkan peningkatan keterlibatan pengguna sebesar 40%.',
      'Membimbing pengembang junior dan menetapkan praktik terbaik untuk kualitas dan pengujian kode.',
      'Berkolaborasi dengan desainer UX/UI untuk menerjemahkan wireframe menjadi kode berkualitas tinggi dan responsif.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'ITTI',
    duration: '2025 - Sekarang',
    description: [
      'Mengembangkan dan memelihara fitur untuk aplikasi Flask skala besar.',
      'Meningkatkan kinerja aplikasi dengan mengoptimalkan rendering komponen dan manajemen status.',
      'Berpartisipasi dalam tim agile, berkontribusi pada perencanaan sprint dan tinjauan kode.',
    ],
  },
];

export const EDUCATION = [
  {
    degree: 'S.Kom. dalam Ilmu Komputer',
    institution: 'Areta Informatic Collage',
    duration: '2024 - Sekarang',
  },
  {
    degree: 'Sertifikasi Fundamental Linux',
    institution: 'Aguna Course',
    duration: '2024',
  },
];
