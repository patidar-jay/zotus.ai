import {
  HeartPulse,
  Landmark,
  Factory,
  GraduationCap,
  ShoppingCart,
  Building,
  Sprout,
  Truck,
  ShieldCheck,
  Rocket,
} from 'lucide-react';
import type { Industry } from '../types';

export const industries: Industry[] = [
  { icon: HeartPulse, name: 'Healthcare', slug: 'healthcare' },
  { icon: Landmark, name: 'Finance', slug: 'finance' },
  { icon: Factory, name: 'Manufacturing', slug: 'manufacturing' },
  { icon: GraduationCap, name: 'Education', slug: 'education' },
  { icon: ShoppingCart, name: 'Retail', slug: 'retail' },
  { icon: Building, name: 'Government', slug: 'government' },
  { icon: Sprout, name: 'Agriculture', slug: 'agriculture' },
  { icon: Truck, name: 'Logistics', slug: 'logistics' },
  { icon: ShieldCheck, name: 'Insurance', slug: 'insurance' },
  { icon: Rocket, name: 'Startups', slug: 'startups' },
];
