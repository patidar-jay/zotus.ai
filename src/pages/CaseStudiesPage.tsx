import { motion } from 'framer-motion';
import { ArrowRight, Bot, Terminal, Video, FileText, ShieldCheck, Users } from 'lucide-react';
import { Container } from '../components/ui';
import { CTASection } from '../components/sections';

const caseStudies = [
  { icon: Bot, title: 'Physical AI for Robotics', industry: 'Robotics · Embodied AI', color: '#A78BFA',
    result: '50K+ motion capture sessions delivered', challenge: 'A frontier robotics lab needed high-fidelity human motion data to train humanoid locomotion policies. Existing video-based pose estimation introduced unacceptable noise for sim-to-real transfer.',
    solution: 'We deployed lab-grade marker-based motion capture with 24 expert operators across three studios, delivering sub-millimeter joint trajectories with full metadata and retargeting scripts.' },
  { icon: Terminal, title: 'Agentic Evaluation Pipeline', industry: 'Foundation Models · Evals', color: '#10B981',
    result: '12,000+ multi-step agent traces graded', challenge: 'An AI lab building tool-using agents needed ground-truth evaluation data — multi-step terminal tasks with verifiable outcomes — that existing benchmarks couldn\'t cover.',
    solution: 'We assembled a team of senior software engineers to create, execute, and grade complex agent tasks spanning file systems, APIs, databases, and web interactions.' },
  { icon: Video, title: 'Autonomous Driving Annotation', industry: 'Self-Driving · Computer Vision', color: '#6C3CF4',
    result: '2M+ frames with 3D bounding boxes', challenge: 'A self-driving company needed pixel-perfect 3D annotations across lidar and camera streams with sub-frame temporal consistency for their perception stack.',
    solution: 'Our annotation team processed multi-sensor data streams with custom tooling, achieving 99.6% consensus accuracy across instance segmentation, lane markings, and 3D cuboids.' },
  { icon: FileText, title: 'RLHF for Code Generation', industry: 'LLMs · Code · Alignment', color: '#F59E0B',
    result: '100K+ preference pairs from senior engineers', challenge: 'A code-generation model needed high-quality human preference data from experienced software engineers — not crowdsourced workers — to improve alignment on complex coding tasks.',
    solution: 'We recruited and managed a team of 200+ senior developers across 12 programming languages, delivering preference rankings, explanations, and reward signals for SFT and RLHF pipelines.' },
  { icon: ShieldCheck, title: 'Safety & Red-Teaming', industry: 'AI Safety · Governance', color: '#EC4899',
    result: '25K+ adversarial prompts tested', challenge: 'A foundation model company needed rigorous red-team evaluation before a major release — adversarial testing across safety categories with expert-written attack vectors.',
    solution: 'Our safety research team designed and executed multi-category red-team evaluations, producing structured vulnerability reports and severity-scored datasets for model hardening.' },
  { icon: Users, title: 'Multilingual Data Program', industry: 'NLP · Localization · Scale', color: '#14B8A6',
    result: '40+ languages covered in 8 weeks', challenge: 'A global AI company needed high-quality instruction-following data across 40+ languages, with cultural nuance and domain expertise in each locale.',
    solution: 'We activated our global expert network — native-speaker linguists and domain specialists — to produce culturally-adapted, quality-gated datasets with consistent annotation guidelines.' },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center pt-[72px]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(109,40,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.04) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)' }} />
          <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        </div>
        <Container className="relative z-10 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-8 border"
              style={{ background: 'rgba(109,40,217,0.06)', borderColor: 'rgba(109,40,217,0.12)', color: 'var(--color-primary)' }}
            >
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" /></span>
              Case Studies
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6" style={{ fontFamily: 'var(--font-heading)' }}
            >
              Real{' '}
              <span style={{ background: 'linear-gradient(120deg, #A78BFA 0%, #6C3CF4 40%, #10B981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Results
              </span>
              {' '}at Scale.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-xl mx-auto"
            >How frontier AI teams use our human infrastructure to ship better models, faster.</motion.p>
          </div>
        </Container>
      </section>

      {/* Case Study Cards */}
      <section className="py-16 md:py-24 relative">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => {
              const Icon = cs.icon;
              return (
                <motion.div key={cs.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-3xl p-8 md:p-10" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                >
                  <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-0 pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${cs.color}33 0%, transparent 70%)`, filter: 'blur(30px)' }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl shrink-0" style={{ background: `${cs.color}15`, color: cs.color, border: `1px solid ${cs.color}25` }}>
                        <Icon className="w-6 h-6" />
                      </span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{cs.title}</h3>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: cs.color }}>{cs.industry}</span>
                      </div>
                    </div>
                    <div className="rounded-xl px-4 py-3 mb-5" style={{ background: `${cs.color}08`, border: `1px solid ${cs.color}15` }}>
                      <span className="text-sm font-semibold" style={{ color: cs.color }}>↑ {cs.result}</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-widest mb-1 block" style={{ color: 'var(--color-text-tertiary)' }}>Challenge</span>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{cs.challenge}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-widest mb-1 block" style={{ color: 'var(--color-text-tertiary)' }}>Solution</span>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{cs.solution}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-16">
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              style={{ background: 'linear-gradient(120deg, #6C3CF4 0%, #A78BFA 100%)', boxShadow: '0 10px 30px -10px rgba(108,60,244,0.6)' }}
            >Start a conversation <ArrowRight className="w-4 h-4" /></a>
          </motion.div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
