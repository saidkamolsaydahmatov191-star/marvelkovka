import { Fence, Hammer, Home, LayoutGrid, Shovel, Sofa, SquareArrowOutUpRight, Users } from 'lucide-react';
import { Category, Product, Worker } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'gates',
    name: 'Darvozalar',
    icon: Home,
    description: 'Har qanday uslubdagi mustahkam va nafis darvozalar.'
  },
  {
    id: 'railings',
    name: 'Panjaralar',
    icon: Fence,
    description: 'Zinapoyalar va balkonlar uchun xavfsiz va chiroyli toʻsiqlar.'
  },
  {
    id: 'reshotka',
    name: 'Reshotkalar',
    icon: LayoutGrid,
    description: 'Derazalar uchun mustahkam va dabdabali himoya panjaralari.'
  },
  {
    id: 'custom',
    name: 'Barcha Temir Buyumlar',
    icon: Hammer,
    description: 'Biz barcha turdagi temir buyumlarini yuqori sifatda yasab beramiz.'
  }
];

export const WORKERS: Worker[] = [
  {
    name: 'Eldor',
    role: 'Usta temirchi',
    image: '/src/assets/images/eldor_name_art_1779027221664.png'
  },
  {
    name: 'Faruh',
    role: 'Badiiy bezak ustasi',
    image: '/src/assets/images/faruh_name_art_1779027241856.png'
  },
  {
    name: 'Azamat',
    role: 'Payvandlash mutaxassisi',
    image: '/src/assets/images/azamat_name_art_1779027260344.png'
  },
  {
    name: 'Nodir',
    role: 'Dizayner usta',
    image: '/src/assets/images/nodir_name_art_1779027288444.png'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Gate',
    description: 'Oltin suvi yugurtirilgan klassik darvoza.',
    category: 'gates',
    image: '/src/assets/images/kovka_gate_1779025209689.png'
  },
  {
    id: '2',
    name: 'Spiral Elegance',
    description: 'Marmar zinalar uchun maxsus panjaralar.',
    category: 'railings',
    image: '/src/assets/images/kovka_stairs_railing_1779025231422.png'
  },
  {
    id: '4',
    name: 'Elegant Reshotka',
    description: 'Bizning eng mashhur deraza panjarasi dizaynimiz.',
    category: 'reshotka',
    image: '/src/assets/images/kovka_reshotka_3d_1779026903695.png'
  }
];

export const HERO_IMAGE = '/src/assets/images/marvel_kovka_hero_1779025181396.png';
