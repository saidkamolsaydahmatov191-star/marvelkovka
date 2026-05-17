import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface Worker {
  name: string;
  role: string;
  image: string;
}
