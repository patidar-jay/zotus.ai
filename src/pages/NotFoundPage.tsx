import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Container, Button } from '../components/ui';

export default function NotFoundPage() {
  return (
    <section className="pt-[72px] min-h-screen flex items-center">
      <Container className="text-center py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-8xl font-extrabold text-gradient mb-6 font-heading">404</p>
          <h1 className="text-3xl font-semibold text-dark mb-4">Page Not Found</h1>
          <p className="text-lg text-gray mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Button to="/" size="lg" variant="primary">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
