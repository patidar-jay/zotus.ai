import type { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    title: 'AI-Powered Diagnostic Support Platform',
    client: 'HealthBridge Solutions',
    industry: 'Healthcare',
    problem:
      'Manual diagnostic processes were slow, error-prone, and couldn\'t scale to meet increasing patient volumes across 200+ clinics.',
    solution:
      'Built a comprehensive AI diagnostic support system using computer vision and NLP models that assist medical professionals in real-time analysis of medical imaging and patient records.',
    outcome: [
      '40% reduction in diagnostic turnaround time',
      '95% accuracy in preliminary assessments',
      'Scaled to process 10,000+ cases per month',
      'Deployed across 200+ partner clinics',
    ],
    slug: 'ai-diagnostic-platform',
    tags: ['AI', 'Healthcare', 'Computer Vision', 'NLP'],
  },
  {
    title: 'Intelligent Document Processing Engine',
    client: 'FinServ Technologies',
    industry: 'Finance',
    problem:
      'Processing thousands of financial documents daily required a large manual team, leading to delays, high costs, and frequent errors in data extraction.',
    solution:
      'Developed an intelligent document processing engine using OCR, NLP, and custom ML models that automatically extracts, validates, and routes financial data from diverse document formats.',
    outcome: [
      '60% reduction in processing time',
      '99.2% data extraction accuracy',
      '₹2.5 Cr annual cost savings',
      'Processing 15,000+ documents daily',
    ],
    slug: 'document-processing-engine',
    tags: ['ML', 'Finance', 'Automation', 'OCR'],
  },
  {
    title: 'Adaptive Learning Platform',
    client: 'EduTech Innovations',
    industry: 'Education',
    problem:
      'Traditional one-size-fits-all learning approaches were failing to engage diverse student populations, resulting in poor completion rates and learning outcomes.',
    solution:
      'Created an adaptive learning platform that uses AI to personalize content, pacing, and assessment for each student based on their learning patterns and performance data.',
    outcome: [
      '50,000+ active student users',
      '45% improvement in course completion',
      '30% better assessment scores',
      'Expanded to 150+ educational institutions',
    ],
    slug: 'adaptive-learning-platform',
    tags: ['AI', 'Education', 'Personalization', 'EdTech'],
  },
  {
    title: 'Smart Supply Chain Optimization',
    client: 'LogiTech India',
    industry: 'Logistics',
    problem:
      'Inefficient routing, inventory forecasting errors, and lack of real-time visibility were causing significant losses and delivery delays across the supply chain.',
    solution:
      'Built a comprehensive supply chain optimization platform with ML-based demand forecasting, route optimization algorithms, and real-time tracking dashboards.',
    outcome: [
      '25% reduction in logistics costs',
      '35% improvement in delivery times',
      '90% forecast accuracy achieved',
      'Real-time visibility across 500+ routes',
    ],
    slug: 'supply-chain-optimization',
    tags: ['ML', 'Logistics', 'Optimization', 'IoT'],
  },
  {
    title: 'Government Services Digital Portal',
    client: 'State Government Initiative',
    industry: 'Government',
    problem:
      'Citizens faced long wait times, complex paperwork, and lack of transparency in accessing government services across multiple departments.',
    solution:
      'Designed and developed a unified digital portal with AI-powered chatbot assistance, automated form processing, and real-time application tracking for 50+ government services.',
    outcome: [
      '70% reduction in processing time',
      '2M+ citizen registrations in first year',
      '85% reduction in physical visits',
      'NPS score of 4.5/5 from citizens',
    ],
    slug: 'government-digital-portal',
    tags: ['Digital Transformation', 'Government', 'AI Chatbot', 'Portal'],
  },
  {
    title: 'E-Commerce Personalization Engine',
    client: 'RetailMax India',
    industry: 'Retail',
    problem:
      'Generic product recommendations and a one-size-fits-all shopping experience were resulting in high bounce rates and low conversion rates.',
    solution:
      'Developed a real-time personalization engine using collaborative filtering and deep learning models that deliver individualized product recommendations, dynamic pricing, and personalized search results.',
    outcome: [
      '35% increase in conversion rate',
      '28% higher average order value',
      '50% reduction in cart abandonment',
      'Personalized experience for 1M+ monthly users',
    ],
    slug: 'ecommerce-personalization',
    tags: ['AI', 'Retail', 'Personalization', 'E-Commerce'],
  },
];
