import {
  Brain,
  Cpu,
  Sparkles,
  MessageSquareCode,
  Code2,
  Globe,
  Smartphone,
  Cloud,
  GitBranch,
  Workflow,
  Database,
  BarChart3,
  Building2,
} from 'lucide-react';
import type { Service } from '../types';

export const services: Service[] = [
  {
    icon: Brain,
    title: 'AI Development',
    description:
      'Custom artificial intelligence solutions tailored to your business challenges. We build intelligent systems that learn, adapt, and deliver measurable results.',
    benefits: [
      'Custom AI model development',
      'Natural language processing',
      'Computer vision systems',
      'Predictive analytics',
    ],
    slug: 'ai-development',
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    description:
      'Advanced ML pipelines that transform raw data into actionable insights. From model training to deployment, we handle the complete lifecycle.',
    benefits: [
      'Deep learning architectures',
      'Model optimization & tuning',
      'MLOps & deployment',
      'Real-time inference systems',
    ],
    slug: 'machine-learning',
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    description:
      'Harness the power of generative AI to create content, automate workflows, and build next-generation user experiences.',
    benefits: [
      'LLM fine-tuning & deployment',
      'RAG system development',
      'AI-powered content generation',
      'Conversational AI & chatbots',
    ],
    slug: 'generative-ai',
  },
  {
    icon: MessageSquareCode,
    title: 'LLM Integration',
    description:
      'Seamlessly integrate large language models into your existing infrastructure. We make AI accessible and production-ready.',
    benefits: [
      'API integration & orchestration',
      'Prompt engineering',
      'Context management',
      'Cost optimization',
    ],
    slug: 'llm-integration',
  },
  {
    icon: Code2,
    title: 'Custom Software',
    description:
      'Bespoke software solutions built with clean architecture and scalable design. From startups to enterprise, we deliver production-ready code.',
    benefits: [
      'Full-stack development',
      'Microservices architecture',
      'API development',
      'Legacy modernization',
    ],
    slug: 'custom-software',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'High-performance web applications that set new standards. We build fast, accessible, and beautifully designed digital experiences.',
    benefits: [
      'React & Next.js applications',
      'Progressive web apps',
      'E-commerce platforms',
      'CMS development',
    ],
    slug: 'web-development',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile applications that users love. Built for performance, security, and seamless user experience.',
    benefits: [
      'iOS & Android development',
      'React Native & Flutter',
      'Mobile-first design',
      'App store optimization',
    ],
    slug: 'mobile-development',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Cloud architecture and migration services that scale with your business. We design resilient, cost-effective cloud infrastructure.',
    benefits: [
      'AWS, Azure & GCP',
      'Cloud migration strategy',
      'Serverless architecture',
      'Cost optimization',
    ],
    slug: 'cloud-solutions',
  },
  {
    icon: GitBranch,
    title: 'DevOps',
    description:
      'Streamline your development pipeline with modern DevOps practices. We automate, monitor, and optimize your delivery process.',
    benefits: [
      'CI/CD pipelines',
      'Infrastructure as Code',
      'Container orchestration',
      'Monitoring & alerting',
    ],
    slug: 'devops',
  },
  {
    icon: Workflow,
    title: 'Automation',
    description:
      'Intelligent process automation that eliminates manual work and reduces errors. We automate complex business workflows end-to-end.',
    benefits: [
      'Business process automation',
      'RPA solutions',
      'Workflow orchestration',
      'Integration automation',
    ],
    slug: 'automation',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description:
      'Build robust data infrastructure that powers your analytics and AI initiatives. From data lakes to real-time streaming, we handle it all.',
    benefits: [
      'Data pipeline development',
      'ETL & data warehousing',
      'Real-time data streaming',
      'Data governance',
    ],
    slug: 'data-engineering',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description:
      'Turn your data into competitive advantage. We build dashboards, reports, and analytics systems that drive informed decisions.',
    benefits: [
      'Dashboard development',
      'Advanced analytics',
      'Data visualization',
      'KPI tracking systems',
    ],
    slug: 'business-intelligence',
  },
  {
    icon: Building2,
    title: 'Enterprise Consulting',
    description:
      'Strategic technology consulting that aligns your digital transformation with business objectives. We help enterprises navigate complexity.',
    benefits: [
      'Technology roadmap',
      'Digital transformation',
      'Architecture review',
      'Team augmentation',
    ],
    slug: 'enterprise-consulting',
  },
];
