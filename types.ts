import { LucideIcon } from 'lucide-react';

export interface Program {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Aircraft {
  model: string;
  type: string;
  description: string;
  image: string;
  specs: {
    speed: string;
    range: string;
    seats: number;
  };
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface GalleryItem {
  id: number;
  category: 'fleet' | 'training' | 'aerial';
  image: string;
  caption: string;
}

export interface BookingService {
  id: string;
  title: string;
  duration: string;
  price: string;
}