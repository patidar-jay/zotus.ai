import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '../ui';
import { stats } from '../../constants/stats';
import { useCountUp } from '../../hooks/useCountUp';
import { fadeInUp, staggerContainer } from '../../animations/variants';

function StatItem({ icon: Icon, value, suffix, label }: (typeof stats)[0]) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const count = useCountUp(value, 2000, inView);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="text-center"
    >
      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-primary-light" />
      </div>
      <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 font-heading">
        {count}{suffix}
      </div>
      <p className="text-sm text-gray-light font-medium">{label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-dark section-py-sm" aria-label="Company statistics">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
