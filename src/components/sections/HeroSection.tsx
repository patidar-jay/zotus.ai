import { motion } from 'framer-motion';
import { ArrowRight, Box, Cpu, Cloud, Smartphone, Monitor, Database, Settings } from 'lucide-react';
import { Container } from '../ui';
import { staggerContainer } from '../../animations/variants';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-bg min-h-[90vh] flex items-center pt-[80px]"
      aria-labelledby="hero-heading"
    >
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] left-[5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `radial-gradient(#C4B5FD 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <Container className="relative z-10 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left max-w-2xl"
          >
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]">
                INTELLIGENT SOLUTIONS. REAL IMPACT.
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              id="hero-heading"
              className="text-dark font-extrabold leading-[1.1] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)' }}
            >
              Building Intelligent
              <br />
              Solutions that
              <br />
              <span className="text-primary">Drive Real Impact</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-gray font-normal leading-relaxed mb-10 max-w-lg"
            >
              Zotus AI delivers AI-powered software solutions, automation, and digital transformation services to help businesses innovate, scale and lead in the digital era.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="/#services"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3.5 rounded-lg text-sm font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary border border-primary/20 px-7 py-3.5 rounded-lg text-sm font-bold hover:bg-primary/5 transition-all duration-300 shadow-sm"
              >
                Schedule a Consultation
              </a>
            </motion.div>

            {/* Trust avatars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=1" alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src="https://i.pravatar.cc/100?img=2" alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src="https://i.pravatar.cc/100?img=3" alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src="https://i.pravatar.cc/100?img=4" alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
              </div>
              <p className="text-xs font-semibold text-gray-dark">
                Trusted by 100+ startups and enterprises worldwide
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Isometric Illustration CSS Approximation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center relative h-[500px]"
          >
            {/* Base platform */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/20 rounded-[40px] transform rotate-x-[60deg] rotate-z-45" style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute inset-4 border border-primary/10 rounded-[32px]"></div>
              <div className="absolute inset-8 border border-primary/5 rounded-[24px]"></div>
              
              {/* Connecting lines */}
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2"></div>
              <div className="absolute top-0 left-0 w-full h-full border border-primary/20 rounded-[40px] shadow-[0_0_50px_rgba(108,43,217,0.1)]"></div>
            </div>

            {/* Central Block */}
            <div className="absolute z-20 flex items-center justify-center w-32 h-32 bg-gradient-to-br from-[#8B5CF6] to-[#5B21B6] rounded-3xl shadow-[0_20px_40px_rgba(91,33,182,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] border border-[#A78BFA] transform -translate-y-8 animate-[float_4s_ease-in-out_infinite]">
              <span className="text-white font-extrabold text-5xl drop-shadow-md">Z</span>
              {/* Fake 3D depth */}
              <div className="absolute -bottom-4 left-0 w-full h-8 bg-gradient-to-b from-[#4C1D95] to-[#31116A] rounded-b-3xl -z-10 transform scale-y-[0.5] translate-y-4 blur-[2px]"></div>
            </div>

            {/* Floating Nodes */}
            <Node icon={<Cpu />} label="AI & ML" top="-25%" left="20%" delay="0s" />
            <Node icon={<Settings />} label="Automation" top="-15%" right="10%" delay="1s" />
            <Node icon={<Cloud />} label="Cloud" top="35%" right="-5%" delay="2s" />
            <Node icon={<Database />} label="Data" top="30%" left="-5%" delay="1.5s" />
            <Node icon={<Monitor />} label="Web" bottom="-5%" left="15%" delay="0.5s" />
            <Node icon={<Smartphone />} label="Mobile" bottom="-15%" left="50%" delay="2.5s" />
            <Node icon={<Box />} label="Analytics" bottom="0%" right="10%" delay="1.2s" />

          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// Helper for the 3D nodes
function Node({ icon, label, top, left, right, bottom, delay }: any) {
  return (
    <div 
      className="absolute z-10 flex flex-col items-center gap-2"
      style={{ top, left, right, bottom, animation: `float 3s ease-in-out ${delay} infinite` }}
    >
      <div className="w-16 h-16 bg-white rounded-2xl shadow-[0_10px_30px_rgba(108,43,217,0.15)] flex items-center justify-center border border-white/50 relative">
        <div className="text-primary w-8 h-8 flex items-center justify-center">
          {icon}
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-primary/20 blur-[6px] rounded-full -z-10"></div>
      </div>
      <span className="text-[10px] font-bold text-dark">{label}</span>
    </div>
  );
}
