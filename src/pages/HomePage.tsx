import {
  HeroSection,
  ServicesSection,
  IndustriesSection,
  CaseStudiesSection,
} from '../components/sections';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      {/* Reduced content: Just core services, industries, and insights */}
      <ServicesSection />
      <IndustriesSection />
      <CaseStudiesSection />
    </>
  );
}
