import {
  Search,
  LayoutDashboard,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  Headphones,
} from 'lucide-react';
import type { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: Search,
    title: 'Discovery',
    description: 'Deep-dive into your business goals, challenges, and technical landscape.',
  },
  {
    step: 2,
    icon: LayoutDashboard,
    title: 'Planning',
    description: 'Architecture design, technology selection, and detailed project roadmap.',
  },
  {
    step: 3,
    icon: Palette,
    title: 'UI/UX',
    description: 'User-centered design with wireframes, prototypes, and usability testing.',
  },
  {
    step: 4,
    icon: Code2,
    title: 'Development',
    description: 'Agile sprints with clean code, code reviews, and continuous integration.',
  },
  {
    step: 5,
    icon: TestTube2,
    title: 'Testing',
    description: 'Comprehensive QA with automated testing, performance, and security audits.',
  },
  {
    step: 6,
    icon: Rocket,
    title: 'Deployment',
    description: 'Zero-downtime deployment with monitoring, scaling, and rollback strategies.',
  },
  {
    step: 7,
    icon: Headphones,
    title: 'Support',
    description: 'Ongoing maintenance, performance optimization, and dedicated support.',
  },
];
