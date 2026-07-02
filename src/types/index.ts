import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

export interface Industry {
  icon: LucideIcon;
  name: string;
  slug: string;
}

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
  step: number;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface CaseStudy {
  title: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  image: string;
  slug: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface WhyUsFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}
