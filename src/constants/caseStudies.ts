import type { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    title: 'Intelligent Document Processing System',
    industry: 'Financial Services',
    problem: 'A leading NBFC processed 15,000+ loan applications monthly with manual document verification, causing 72-hour delays and 12% error rates.',
    solution: 'Built an AI-powered OCR and NLP pipeline that auto-extracts, validates, and classifies documents with 99.2% accuracy.',
    result: '85% faster processing, 12% → 0.8% error rate, ₹2.4Cr annual savings.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    slug: 'document-processing',
  },
  {
    title: 'AI-Powered Diagnostic Assistant',
    industry: 'Healthcare',
    problem: 'Radiologists at a hospital chain spent 45 minutes per scan review, creating bottlenecks and delayed diagnoses for critical patients.',
    solution: 'Developed a deep learning model trained on 500K+ medical images that pre-screens scans and highlights anomalies for doctor review.',
    result: '60% reduction in review time, 94% anomaly detection accuracy, 3x patient throughput.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    slug: 'diagnostic-assistant',
  },
  {
    title: 'Enterprise Workflow Automation Platform',
    industry: 'Manufacturing',
    problem: 'A manufacturing firm managed procurement, inventory, and compliance across 8 plants using spreadsheets and manual workflows.',
    solution: 'Engineered a cloud-native automation platform with real-time dashboards, approval workflows, and ERP integration.',
    result: '60% reduction in manual effort, real-time visibility across all plants, 40% faster procurement cycles.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    slug: 'workflow-automation',
  },
];
