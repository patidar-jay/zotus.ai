import { Container } from '../ui';

const logos = [
  { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Google Cloud', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
  { name: 'Oracle', url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'Meta', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'NVIDIA', url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
  { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
];

export default function ClientLogoStrip() {
  return (
    <div className="py-10 bg-white border-b border-border/40">
      <Container>
        <p className="text-[10px] font-bold text-gray uppercase tracking-[0.2em] text-center mb-8">
          TRUSTED BY INNOVATIVE COMPANIES
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
          {logos.map((logo) => (
            <img 
              key={logo.name} 
              src={logo.url} 
              alt={logo.name} 
              className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" 
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
