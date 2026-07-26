import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui';

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }} 
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center shadow-2xl"
          style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-white/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-white/10 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          {/* Floating geometric shapes */}
          {[
            { size: 30, top: '10%', left: '10%', delay: 0, shape: 'rounded-full' },
            { size: 40, top: '80%', left: '15%', delay: 1, shape: 'rounded-lg rotate-12' },
            { size: 25, top: '20%', right: '15%', delay: 0.5, shape: 'rounded-full' },
            { size: 45, top: '70%', right: '10%', delay: 1.5, shape: 'rounded-xl -rotate-12' },
            { size: 20, top: '40%', left: '5%', delay: 2, shape: 'rounded-sm rotate-45' },
          ].map((item, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -15, 0], rotate: item.shape.includes('rotate') ? [0, 10, 0] : 0 }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
              className={`absolute border border-white/20 bg-white/5 backdrop-blur-sm pointer-events-none ${item.shape}`}
              style={{
                width: item.size,
                height: item.size,
                top: item.top,
                left: item.left,
                right: item.right,
              }}
            />
          ))}

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Subtle sparkle near heading */}
            <div className="flex justify-center items-center mb-5 relative max-w-max mx-auto">
               <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5], rotate: [45, 135, 45] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-3 h-3 bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] absolute -top-4 -left-6"
               />
              <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Ready to Build Something Amazing?
              </h2>
            </div>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Let's turn your ideas into intelligent, scalable, and impactful solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl text-[15px] font-semibold hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-[15px] font-semibold hover:bg-white/10 transition-colors shadow-sm hover:shadow-md"
              >
                Schedule Call
              </motion.a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
