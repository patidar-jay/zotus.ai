import {
  Brain,
  Code2,
  Smartphone,
  Cloud,
  BarChart3,
  Settings,
  Shield,
  Building2,
} from 'lucide-react';
import type { Service } from '../types';

export const services: Service[] = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Custom AI solutions that transform raw data into intelligent decisions, powering automation and predictive capabilities across your enterprise.',
    slug: 'artificial-intelligence',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Advanced ML pipelines from model training to production deployment, delivering real-time inference and continuous learning systems.',
    slug: 'machine-learning',
  },
  {
    icon: Code2,
    title: 'Custom Software',
    description: 'Bespoke software engineered with clean architecture and scalable design. Full-stack development from startups to enterprise scale.',
    slug: 'custom-software',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications built for performance, security, and seamless user experience on every device.',
    slug: 'mobile-apps',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Cloud-native architecture, migration, and CI/CD pipelines that scale with your business on AWS, Azure, and GCP.',
    slug: 'cloud-devops',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform raw data into competitive advantage with real-time dashboards, advanced analytics, and data-driven decision systems.',
    slug: 'data-analytics',
  },
  {
    icon: Settings,
    title: 'Automation',
    description: 'Intelligent process automation that eliminates manual work, reduces errors, and accelerates operations end-to-end.',
    slug: 'automation',
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'Enterprise-grade security solutions including threat detection, compliance frameworks, and secure architecture design.',
    slug: 'cyber-security',
  },
  {
    icon: Building2,
    title: 'Enterprise Consulting',
    description: 'Strategic technology consulting that aligns your digital transformation with business objectives and measurable outcomes.',
    slug: 'enterprise-consulting',
  },
];
