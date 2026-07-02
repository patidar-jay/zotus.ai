import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Container, Button } from '../components/ui';

export default function NotFoundPage() {
  return (
    <section className="pt-[72px] min-h-[80vh] flex items-center bg-[var(--color-bg-subtle)]">
      <Container className="text-center py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-xl mx-auto p-12 bg-white rounded-3xl border border-[var(--color-border)] shadow-xl shadow-[var(--color-primary)]/5">
          <p className="text-[120px] font-extrabold text-gradient mb-6 leading-none" style={{ fontFamily: 'var(--font-heading)' }}>404</p>
          <h1 className="text-3xl font-bold text-[var(--color-text)] mb-4">Page Not Found</h1>
          <p className="text-lg text-[var(--color-text-secondary)] mb-10">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Button to="/" size="lg" className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
