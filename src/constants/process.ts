import {
  Search,
  ClipboardList,
  LayoutDashboard,
  Boxes,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  LifeBuoy,
} from 'lucide-react';
import type { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: 'Discovery',
    description:
      'We deeply understand your business, users, and goals through stakeholder interviews, market research, and competitive analysis.',
    step: 1,
  },
  {
    icon: ClipboardList,
    title: 'Requirement Analysis',
    description:
      'Transform business needs into detailed technical specifications with clear acceptance criteria and success metrics.',
    step: 2,
  },
  {
    icon: LayoutDashboard,
    title: 'Planning',
    description:
      'Create a comprehensive project roadmap with milestones, resource allocation, and risk mitigation strategies.',
    step: 3,
  },
  {
    icon: Boxes,
    title: 'Architecture',
    description:
      'Design scalable, secure system architecture that ensures performance, maintainability, and future extensibility.',
    step: 4,
  },
  {
    icon: Palette,
    title: 'Design',
    description:
      'Craft intuitive, accessible user experiences with pixel-perfect interfaces that align with your brand identity.',
    step: 5,
  },
  {
    icon: Code2,
    title: 'Development',
    description:
      'Build with clean, tested code using industry best practices. Agile sprints with continuous integration and delivery.',
    step: 6,
  },
  {
    icon: TestTube2,
    title: 'Testing',
    description:
      'Rigorous quality assurance including unit tests, integration tests, performance testing, and security audits.',
    step: 7,
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description:
      'Zero-downtime deployments with automated pipelines, monitoring, and rollback capabilities for production readiness.',
    step: 8,
  },
  {
    icon: LifeBuoy,
    title: 'Support',
    description:
      'Ongoing maintenance, performance monitoring, and iterative improvements to ensure long-term success.',
    step: 9,
  },
];
