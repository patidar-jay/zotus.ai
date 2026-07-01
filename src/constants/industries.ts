import {
  HeartPulse,
  GraduationCap,
  Factory,
  ShoppingBag,
  Landmark,
  Banknote,
  Shield,
  Building,
  Truck,
  Leaf,
} from 'lucide-react';
import type { Industry } from '../types';

export const industries: Industry[] = [
  {
    icon: HeartPulse,
    name: 'Healthcare',
    description:
      'AI-powered diagnostics, patient management systems, and telemedicine platforms that improve patient outcomes and operational efficiency.',
    slug: 'healthcare',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description:
      'Adaptive learning platforms, virtual classrooms, and intelligent assessment systems that personalize the educational experience.',
    slug: 'education',
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description:
      'Predictive maintenance, quality control automation, and smart factory solutions that optimize production and reduce downtime.',
    slug: 'manufacturing',
  },
  {
    icon: ShoppingBag,
    name: 'Retail',
    description:
      'Personalized commerce experiences, inventory optimization, and customer analytics that drive revenue growth.',
    slug: 'retail',
  },
  {
    icon: Landmark,
    name: 'Government',
    description:
      'Citizen service portals, data governance systems, and secure digital infrastructure for modern governance.',
    slug: 'government',
  },
  {
    icon: Banknote,
    name: 'Finance',
    description:
      'Risk assessment models, fraud detection systems, and automated compliance solutions for financial institutions.',
    slug: 'finance',
  },
  {
    icon: Shield,
    name: 'Insurance',
    description:
      'Claims processing automation, underwriting models, and customer engagement platforms that transform insurance operations.',
    slug: 'insurance',
  },
  {
    icon: Building,
    name: 'Real Estate',
    description:
      'Property management systems, virtual tours, and market analytics that modernize real estate operations.',
    slug: 'real-estate',
  },
  {
    icon: Truck,
    name: 'Logistics',
    description:
      'Route optimization, supply chain visibility, and warehouse automation that streamline logistics operations.',
    slug: 'logistics',
  },
  {
    icon: Leaf,
    name: 'Agriculture',
    description:
      'Precision farming solutions, crop monitoring systems, and supply chain optimization for modern agriculture.',
    slug: 'agriculture',
  },
];
