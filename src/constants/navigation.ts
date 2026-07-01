import type { NavLink } from '../types';

export const mainNavLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'AI Development', href: '/services#ai-development' },
    { label: 'Machine Learning', href: '/services#machine-learning' },
    { label: 'Custom Software', href: '/services#custom-software' },
    { label: 'Cloud Solutions', href: '/services#cloud-solutions' },
    { label: 'DevOps', href: '/services#devops' },
    { label: 'Data Engineering', href: '/services#data-engineering' },
  ],
  industries: [
    { label: 'Healthcare', href: '/industries#healthcare' },
    { label: 'Finance', href: '/industries#finance' },
    { label: 'Education', href: '/industries#education' },
    { label: 'Manufacturing', href: '/industries#manufacturing' },
    { label: 'Government', href: '/industries#government' },
    { label: 'Retail', href: '/industries#retail' },
  ],
  resources: [
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Documentation', href: '/blog' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};
