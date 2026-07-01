import { motion } from 'framer-motion';
import { Container, SectionHeading } from '../ui';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'FastAPI',
  'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'GCP',
  'Docker', 'Kubernetes', 'TensorFlow', 'PyTorch', 'LangChain', 'Terraform',
];

export default function TechStackSection() {
  return (
    <section id="tech" className="section-py-sm bg-white" aria-label="Technology stack">
      <Container>
        <SectionHeading
          label="Technology"
          title="Built with Modern Tools"
          description="We use the right tools for every challenge."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech}
              variants={fadeInUp}
              className="px-5 py-3 rounded-xl border border-border bg-white text-sm font-medium text-dark hover:border-primary/20 hover:text-primary transition-all duration-200"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
