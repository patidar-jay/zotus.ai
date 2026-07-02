import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui';
import { stats } from '../../constants/stats';

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return { count, ref };
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-white border-y border-[var(--color-border-subtle)]">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <StatItem key={idx} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function StatItem({ stat }: { stat: typeof stats[0] }) {
  const { count, ref } = useCountUp(stat.value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-5xl font-extrabold text-[var(--color-primary)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
        {count}{stat.suffix}
      </div>
      <div className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">
        {stat.label}
      </div>
    </motion.div>
  );
}
