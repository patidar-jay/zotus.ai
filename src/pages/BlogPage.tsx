import { motion } from 'framer-motion';
import { FileText, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, SectionHeading } from '../components/ui';
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
      <section className="pt-[72px] bg-gradient-to-b from-primary/3 to-white">
        <Container className="section-py">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-primary">Blog</span>
            <h1>Insights & <span className="text-gradient">Perspectives</span></h1>
            <p className="mt-6 text-lg text-gray leading-relaxed">
              Thoughts on technology, engineering, design, and building great software products.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="section-py bg-white">
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <motion.article key={post.slug} variants={fadeInUp} className="group rounded-2xl border border-border overflow-hidden hover:shadow-md hover:border-primary/15 transition-all">
                <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-primary/20" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/5 text-primary">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-light"><Clock className="w-3 h-3" />{post.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-dark mb-2 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                  <p className="text-sm text-gray leading-relaxed">{post.excerpt}</p>
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
