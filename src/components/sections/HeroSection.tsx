import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui';
import { staggerContainer } from '../../animations/variants';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-bg min-h-[100vh] flex items-center pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Soft, beautiful background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
        
        {/* Subtle grid pattern for texture */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(#E8E8E8 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <Container className="relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          {/* Subtle top badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-10 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-semibold text-primary tracking-wide">
              Intelligent Enterprise Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            id="hero-heading"
            className="text-dark font-extrabold leading-[1.1] tracking-tight"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            Engineering <span className="text-gradient">Intelligence</span>
            <br />
            for Tomorrow
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-lg md:text-2xl text-gray font-normal leading-relaxed max-w-3xl"
          >
            We build scalable software, AI infrastructure, and cloud solutions 
            designed for enterprise growth and operational excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="/#contact"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-dark border-2 border-border px-8 py-4 rounded-xl text-base font-bold hover:border-primary hover:text-primary transition-all duration-300"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
