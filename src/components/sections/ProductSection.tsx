import { motion } from 'framer-motion';
import { Bot, Terminal, Video, FileText, ShieldCheck, Users } from 'lucide-react';
import { Container } from '../ui';

const chips1 = ['Motion capture', 'Humanoid control', 'Sim-to-real', 'Agent benchmarks', 'Tool-use traces', 'Video annotation',
  'Instance segmentation', 'Semantic masks', 'RLHF preference', 'Red-team evals', 'Active learning', 'AI-native QC'];
const chips2 = ['Data labeling', 'Model grading', 'Prompt engineering', 'Reward modeling', 'Code review', 'Expert annotation',
  'Quality assurance', 'Multimodal data', 'Safety testing', 'Agentic traces', 'Fine-tuning sets', 'Evaluation pipelines'];

/* Animated SVG illustrations */
function HumanoidSvg({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-auto" style={{ color, filter: `drop-shadow(0 0 20px ${color}55)` }}>
      <g fill="currentColor" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="280" cy="70" r="10" /><line x1="280" y1="80" x2="280" y2="160" />
        <line x1="280" y1="100" x2="235" y2="140" /><line x1="280" y1="100" x2="325" y2="140" />
        <line x1="235" y1="140" x2="215" y2="180" /><line x1="325" y1="140" x2="350" y2="175" />
        <line x1="280" y1="160" x2="255" y2="225" /><line x1="280" y1="160" x2="305" y2="225" />
        <line x1="255" y1="225" x2="245" y2="275" /><line x1="305" y1="225" x2="320" y2="275" />
        {[{cx:280,cy:70},{cx:280,cy:100},{cx:280,cy:160},{cx:235,cy:140},{cx:325,cy:140},{cx:215,cy:180},{cx:350,cy:175},{cx:255,cy:225},{cx:305,cy:225},{cx:245,cy:275},{cx:320,cy:275}].map((p,i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r="2.4" opacity="0.7">
            <animate attributeName="opacity" values="0.4;1;0.4" dur={`${1.5 + i * 0.18}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </g>
      <path d="M 100 250 Q 150 180, 200 220 T 300 200" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.35">
        <animate attributeName="strokeDashoffset" values="0;14" dur="3s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

function TerminalSvg({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-auto" style={{ color, filter: `drop-shadow(0 0 20px ${color}55)` }}>
      <g fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="180" y="160" width="200" height="120" rx="8" opacity="0.3" fill="#0D1117" />
        <rect x="188" y="168" width="184" height="104" rx="4" opacity="0.15" fill="currentColor" />
        <text x="196" y="188" fill="currentColor" fontSize="10" fontFamily="monospace" opacity="0.5">$ run --task agent.clone</text>
        <text x="196" y="204" fill="currentColor" fontSize="10" fontFamily="monospace" opacity="0.4">→ step 3/7 · searching...</text>
        <text x="196" y="220" fill="currentColor" fontSize="10" fontFamily="monospace" opacity="0.4">✓ test 4 passed</text>
        <rect x="196" y="230" width="8" height="12" fill="currentColor" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0;0.6" dur="1s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  );
}

function BarChartSvg({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-auto" style={{ color, filter: `drop-shadow(0 0 20px ${color}55)` }}>
      <g fill="currentColor" stroke="currentColor" strokeWidth="1.2">
        <rect x="200" y="55" width="165" height="120" rx="8" fill="none" opacity="0.3" />
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map(i => {
          const h = 10 + Math.abs(Math.sin(i * 0.6)) * 45;
          return (
            <rect key={i} x={208 + i * 7.5} y={165 - h} width="5" height={h} rx="1" opacity="0.5"
              style={{ filter: `drop-shadow(0 0 4px ${color}44)` }}
            >
              <animate attributeName="height" values={`${h};${h + 12};${h}`} dur={`${1.8 + i * 0.06}s`} repeatCount="indefinite" />
              <animate attributeName="y" values={`${165 - h};${153 - h};${165 - h}`} dur={`${1.8 + i * 0.06}s`} repeatCount="indefinite" />
            </rect>
          );
        })}
        <line x1="205" y1="168" x2="362" y2="168" stroke="currentColor" opacity="0.2" fill="none" />
      </g>
    </svg>
  );
}

function WordCloudSvg({ color }: { color: string }) {
  const words = ['prompt','reward','safety','align','eval','bias','score','rank','grade','compare'];
  return (
    <svg viewBox="0 0 400 300" className="h-full w-auto" style={{ color, filter: `drop-shadow(0 0 20px ${color}55)` }}>
      {words.map((w, i) => (
        <text key={w} x={200 + (i % 3) * 55} y={80 + Math.floor(i / 3) * 40 + (i % 2) * 15} fill="currentColor"
          fontSize={10 + (i % 3) * 3} fontFamily="monospace" opacity={0.2 + (i % 4) * 0.12}
        >
          <animate attributeName="opacity" values={`${0.2 + (i % 4) * 0.1};${0.5 + (i % 3) * 0.1};${0.2 + (i % 4) * 0.1}`} dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          {w}
        </text>
      ))}
    </svg>
  );
}

function QualityMeterSvg({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-auto" style={{ color, filter: `drop-shadow(0 0 20px ${color}55)` }}>
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M 230 200 A 60 60 0 0 1 330 200" opacity="0.3" />
        <path d="M 238 190 A 50 50 0 0 1 322 190" opacity="0.2" />
        <line x1="280" y1="200" x2="310" y2="160" opacity="0.5" strokeWidth="2">
          <animateTransform attributeName="transform" type="rotate" values="-30 280 200;30 280 200;-30 280 200" dur="3s" repeatCount="indefinite" />
        </line>
        <circle cx="280" cy="200" r="5" fill="currentColor" opacity="0.6" />
        <text x="260" y="230" fill="currentColor" fontSize="14" fontFamily="monospace" opacity="0.4">98.7%</text>
        {[0,1,2,3,4].map(i => (
          <circle key={i} cx={240 + i * 20} cy="250" r="3" fill="currentColor" opacity={i < 4 ? 0.5 : 0.15} />
        ))}
      </g>
    </svg>
  );
}

function ProfileCardsSvg({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-auto" style={{ color, filter: `drop-shadow(0 0 20px ${color}55)` }}>
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        {[0, 1, 2].map(i => (
          <g key={i} opacity={0.3 + i * 0.15}>
            <rect x={210 + i * 45} y={80 + i * 30} width="100" height="130" rx="10" fill="currentColor" opacity="0.08" stroke="currentColor" />
            <circle cx={260 + i * 45} cy={115 + i * 30} r="15" fill="currentColor" opacity="0.15" />
            <line x1={230 + i * 45} y1={145 + i * 30} x2={290 + i * 45} y2={145 + i * 30} opacity="0.25" />
            <line x1={235 + i * 45} y1={158 + i * 30} x2={285 + i * 45} y2={158 + i * 30} opacity="0.15" />
            <line x1={240 + i * 45} y1={170 + i * 30} x2={280 + i * 45} y2={170 + i * 30} opacity="0.1" />
          </g>
        ))}
      </g>
    </svg>
  );
}

const products = [
  { icon: Bot, title: 'Physical AI', subtitle: 'Motion capture · Humanoid control · Sim-to-real', desc: 'Lab-grade human motion capture — not estimated from video — for training humanoid policies, imitation learning, and embodied agents.', color: '#A78BFA', href: '/platform', Illustration: HumanoidSvg },
  { icon: Terminal, title: 'Agentic Evaluation', subtitle: 'Agent benchmarks · Tool-use traces · Grading', desc: 'Multi-step, tool-using agent tasks with ground-truth traces and automated grading pipelines built for rigorous evaluation at scale.', color: '#10B981', href: '/platform', Illustration: TerminalSvg },
  { icon: Video, title: 'Video & Image', subtitle: 'Annotation · Segmentation · Multimodal', desc: 'Pixel-perfect video and image annotation — instance segmentation, semantic masks, 3D bounding boxes, and temporal tracking for vision models.', color: '#6C3CF4', href: '/platform', Illustration: BarChartSvg },
  { icon: FileText, title: 'Text QC & RLHF', subtitle: 'Preference · Reward modeling · SFT', desc: 'Human preference data, reward model training sets, and supervised fine-tuning datasets curated by domain experts for alignment.', color: '#F59E0B', href: '/platform', Illustration: WordCloudSvg },
  { icon: ShieldCheck, title: 'AI-Native QC', subtitle: 'Quality · Consensus · Active learning', desc: 'Model-in-the-loop quality assurance with consensus scoring, inter-annotator agreement tracking, and intelligent re-routing of ambiguous samples.', color: '#EC4899', href: '/platform', Illustration: QualityMeterSvg },
  { icon: Users, title: 'Expert Network', subtitle: 'Domain experts · Managed teams · Scale', desc: 'On-demand access to vetted domain experts — software engineers, PhDs, linguists, and subject-matter specialists — managed end-to-end.', color: '#14B8A6', href: '/platform', Illustration: ProfileCardsSvg },
];

export default function ProductSection() {
  return (
    <>
      {/* Marquee */}
      <section className="relative overflow-hidden py-12 md:py-16 border-y" style={{ borderColor: 'var(--color-border-subtle)' }}>
        <style>{`
          @keyframes marqueeL { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @keyframes marqueeR { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
          .mq-l { animation: marqueeL 45s linear infinite; }
          .mq-r { animation: marqueeR 50s linear infinite; }
          .mq-l:hover, .mq-r:hover { animation-play-state: paused; }
        `}</style>
        <div className="relative">
          <div className="flex gap-3 mq-l" style={{ width: 'max-content' }}>
            {[...chips1, ...chips1].map((c, i) => (
              <span key={i} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap backdrop-blur-lg"
                style={{ background: 'rgba(109,40,217,0.04)', border: '1px solid rgba(109,40,217,0.08)', color: 'var(--color-text-secondary)' }}
              ><span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: ['#A78BFA', '#10B981', '#F59E0B'][i % 3] }} />{c}</span>
            ))}
          </div>
          <div className="relative mt-4">
            <div className="flex gap-3 mq-r" style={{ width: 'max-content' }}>
              {[...chips2, ...chips2].map((c, i) => (
                <span key={i} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap backdrop-blur-lg"
                  style={{ background: 'rgba(109,40,217,0.04)', border: '1px solid rgba(109,40,217,0.08)', color: 'var(--color-text-secondary)' }}
                ><span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: ['#A78BFA', '#10B981', '#F59E0B'][i % 3] }} />{c}</span>
              ))}
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(90deg, var(--color-bg) 0%, transparent 100%)' }} />
        <div aria-hidden="true" className="absolute inset-y-0 right-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(-90deg, var(--color-bg) 0%, transparent 100%)' }} />
      </section>

      {/* Product Cards */}
      <section id="products" className="relative overflow-hidden py-24 md:py-32">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-60" style={{
          backgroundImage: 'linear-gradient(rgba(109,40,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse at center top, black 30%, transparent 85%)', WebkitMaskImage: 'radial-gradient(ellipse at center top, black 30%, transparent 85%)',
        }} />
        <div aria-hidden="true" className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(108,60,244,0.10) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        <div aria-hidden="true" className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)', filter: 'blur(60px)' }} />

        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center mb-14 md:mb-20">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6C3CF4' }}>What we build</span>
              <h2 className="text-4xl md:text-6xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
                Data programs,{' '}
                <span style={{ background: 'linear-gradient(120deg, #A78BFA, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>purpose-built</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                Six capabilities. One human infrastructure layer. From embodied AI to agent evals, we ship the gold-standard dataset your team can&apos;t assemble in-house.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-[minmax(280px,auto)]">
            {products.map((p, i) => {
              const Icon = p.icon;
              const Illust = p.Illustration;
              return (
                <motion.div key={p.title} initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <div className="h-full" style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px)' }}>
                    <a className="group relative block h-full overflow-hidden rounded-3xl p-6 md:p-8"
                      style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }} href={p.href}
                    >
                      <div aria-hidden="true" className="absolute -top-16 -right-16 h-40 w-40 rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-40 pointer-events-none"
                        style={{ background: `radial-gradient(circle, ${p.color}44 0%, transparent 70%)`, filter: 'blur(28px)' }}
                      />
                      <div aria-hidden="true" className="absolute inset-0 flex items-end justify-end pointer-events-none opacity-70">
                        <Illust color={p.color} />
                      </div>
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${p.color}22`, color: p.color, border: `1px solid ${p.color}33` }}>
                            <Icon className="h-5 w-5" />
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="transition-transform duration-500 group-hover:rotate-45 group-hover:translate-x-1" style={{ color: 'var(--color-text-secondary)', opacity: 0.4 }}
                          ><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{p.title}</h3>
                        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--color-text-secondary)' }}>{p.subtitle}</p>
                        <p className="mt-4 text-sm leading-relaxed max-w-md" style={{ color: 'var(--color-text-secondary)' }}>{p.desc}</p>
                      </div>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
