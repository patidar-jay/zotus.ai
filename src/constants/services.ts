import {
  Brain,
  Code2,
  Eye,
  Cpu,
  Settings,
} from 'lucide-react';
import type { Service } from '../types';

export const services: Service[] = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Custom AI solutions that transform raw data into intelligent decisions, powering automation and predictive capabilities for your business.',
    slug: 'artificial-intelligence',
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    description: 'Advanced ML pipelines from model training to production deployment, delivering real-time inference and continuous learning systems.',
    slug: 'machine-learning',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Intelligent visual monitoring and analysis systems — from real-time camera-based AI proctoring to object detection and image recognition.',
    slug: 'computer-vision',
  },
  {
    icon: Code2,
    title: 'Custom Software',
    description: 'Bespoke software engineered with clean architecture and scalable design. Full-stack development tailored to your unique business needs.',
    slug: 'custom-software',
  },
  {
    icon: Settings,
    title: 'Smart Automation',
    description: 'Intelligent process automation that eliminates manual work, reduces errors, and accelerates operations using AI-driven workflows.',
    slug: 'smart-automation',
  },
];
