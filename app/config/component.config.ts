import { BenefitsCardType, ExperiensCardType, TodolistType } from '../types/components';
import CategoryIcon from '../core/components/category-icon';
import BenefitsIcon from '../core/components/benefit-icon';
import ListIcon from '../core/components/list-icon';
export const BenefitCardData: BenefitsCardType[] = [
  {
    icon: CategoryIcon,
    desc: 'Todo List ini membantu kamu memilah mana pekerjaan yang paling penting dan mendesak. Alih-alih kewalahan dengan banyaknya daftar pekerjaan, kamu bisa langsung mengeksekusi hal-hal yang benar-benar berdampak. Dengan alur kerja yang lebih terarah, setiap hari terasa lebih produktif karena waktu yang ada digunakan dengan seefektif mungkin.',
    title: 'Produktivitas Maksimal',
  },
  {
    icon: BenefitsIcon,
    desc: 'Dengan Todo List ini, setiap pekerjaan besar bisa kamu pecah menjadi langkah-langkah kecil yang lebih mudah dikelola. Kamu tidak hanya tahu apa yang harus dilakukan, tapi juga kapan harus menyelesaikannya. Dengan begitu, kamu bisa mengurangi kebiasaan menunda dan memastikan semua tugas terselesaikan tepat waktu, tanpa terasa terburu-buru.',
    title: 'Kelola Waktu dengan Mudah',
  },
  {
    icon: ListIcon,
    title: 'Motivasi & Konsistensi',
    desc: 'Setiap kali kamu mencentang tugas di Todo List ini, kamu akan langsung melihat progres nyata dari apa yang sudah kamu capai. Rasa puas itu akan jadi motivasi tambahan untuk melanjutkan langkah berikutnya. Seiring waktu, kebiasaan kecil yang konsisten ini akan membentuk pola kerja yang lebih disiplin dan berkelanjutan, sehingga tujuan jangka panjang.',
  },
];

export const ExperiensCardData: ExperiensCardType[] = [
  {
    image: '/asset/content.svg',
    title: 'Content',
    desc: 'desc',
  },
];
