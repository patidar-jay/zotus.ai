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
  benefits: string[];
  slug: string;
}

export interface Industry {
  icon: LucideIcon;
  name: string;
  description: string;
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
  avatar?: string;
}

export interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  outcome: string[];
  slug: string;
  tags: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface JobPosition {
  title: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
  location: string;
  department: string;
  description: string;
  requirements: string[];
}

export interface Stat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}
