import { motion } from 'framer-motion';
import { FileText, Clock } from 'lucide-react';
import { Container } from '../components/ui';
import { CTASection } from '../components/sections';
import { fadeInUp, staggerContainer } from '../animations/variants';

const posts = [
  { title: 'How AI is Transforming Enterprise Operations in 2025', excerpt: 'Explore how businesses are leveraging artificial intelligence to streamline operations, reduce costs, and drive innovation.', date: 'Coming Soon', category: 'AI', slug: 'ai-enterprise-operations' },
  { title: 'Building Scalable Microservices Architecture', excerpt: 'A comprehensive guide to designing and implementing microservices that scale with your business needs.', date: 'Coming Soon', category: 'Engineering', slug: 'scalable-microservices' },
  { title: 'The Future of Generative AI in Business', excerpt: 'Discover how generative AI is reshaping industries and creating new opportunities for forward-thinking organizations.', date: 'Coming Soon', category: 'AI', slug: 'generative-ai-business' },
  { title: 'Cloud Migration: A Strategic Guide for Enterprises', excerpt: 'Best practices and lessons learned from helping enterprises migrate to the cloud successfully.', date: 'Coming Soon', category: 'Cloud', slug: 'cloud-migration-guide' },
  { title: 'Designing for Accessibility: A Developer Guide', excerpt: 'Why accessibility matters and how to build inclusive digital products that work for everyone.', date: 'Coming Soon', category: 'Design', slug: 'designing-accessibility' },
  { title: 'MLOps: From Prototype to Production', excerpt: 'Practical insights on taking machine learning models from experimentation to reliable production systems.', date: 'Coming Soon', category: 'ML', slug: 'mlops-production' },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-[120px] pb-20 bg-[var(--color-bg-subtle)]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="eyebrow mb-4 block">Blog</span>
            <h1 className="mb-6">Insights & <span className="text-gradient">Perspectives</span></h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Thoughts on technology, engineering, design, and building great software products.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="section-py bg-white border-t border-[var(--color-border-subtle)]">
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <motion.article key={post.slug} variants={fadeInUp} className="group rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-lg hover:border-[var(--color-primary)] transition-all bg-white cursor-pointer hover:-translate-y-1 duration-300">
                <div className="h-56 flex items-center justify-center bg-[var(--color-bg-subtle)] group-hover:bg-[var(--color-accent-light)] transition-colors duration-500">
                  <FileText className="w-14 h-14 text-[var(--color-border)] group-hover:text-[var(--color-primary)]/40 transition-colors" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-[var(--color-primary)]/10 text-[var(--color-primary)]">{post.category}</span>
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider"><Clock className="w-3.5 h-3.5" />{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>{post.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{post.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
