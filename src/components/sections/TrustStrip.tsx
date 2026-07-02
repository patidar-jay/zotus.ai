import { Container } from '../ui';

const logos = [
  { name: 'Microsoft', svg: <svg viewBox="0 0 23 23" className="h-5 w-auto"><path d="M0 0h11v11H0z" fill="currentColor"/><path d="M12 0h11v11H12z" fill="currentColor"/><path d="M0 12h11v11H0z" fill="currentColor"/><path d="M12 12h11v11H12z" fill="currentColor"/></svg> },
  { name: 'Google Cloud', text: 'Google Cloud' },
  { name: 'AWS', text: 'AWS' },
  { name: 'Oracle', text: 'ORACLE' },
  { name: 'Meta', text: 'Meta' },
  { name: 'NVIDIA', text: 'NVIDIA' },
  { name: 'IBM', text: 'IBM' },
  { name: 'SAP', text: 'SAP' },
  { name: 'Cisco', text: 'Cisco' },
  { name: 'Adobe', text: 'Adobe' },
];

export default function TrustStrip() {
  return (
    <section className="py-12 bg-[var(--color-bg-subtle)] border-y border-[var(--color-border-subtle)]">
      <Container>
        <p className="eyebrow text-center text-[var(--color-text-tertiary)] mb-8 text-[11px]">
          TRUSTED BY INNOVATIVE COMPANIES
        </p>
        <div className="relative overflow-hidden">
          <div
            className="flex items-center gap-16 whitespace-nowrap"
            style={{ animation: 'marquee 40s linear infinite' }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex items-center shrink-0 opacity-30 hover:opacity-60 transition-opacity duration-300"
              >
                {logo.svg ? (
                  <div className="text-[var(--color-text-secondary)] h-6">{logo.svg}</div>
                ) : (
                  <span
                    className="text-[var(--color-text-secondary)] text-xl font-bold tracking-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {logo.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
