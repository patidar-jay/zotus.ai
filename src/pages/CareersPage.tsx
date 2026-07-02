import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Container, SectionHeading, Button } from '../components/ui';
import { positions, benefits } from '../constants/careers';
import { fadeInUp, staggerContainer } from '../animations/variants';

export default function CareersPage() {
  const [applied, setApplied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
  };

  const inputClass = 'w-full px-5 py-4 rounded-xl border border-[var(--color-border)] bg-white text-sm text-[var(--color-text)] placeholder-[var(--color-text-tertiary)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 outline-none transition-all';

  return (
    <>
      <section className="pt-[120px] pb-20 bg-[var(--color-bg-subtle)]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="eyebrow mb-4 block">Careers</span>
            <h1 className="mb-6">Build the Future <span className="text-gradient">With Us</span></h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Join a team of passionate engineers, designers, and problem-solvers working on meaningful technology for enterprises worldwide.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <SectionHeading eyebrow="Perks & Benefits" title="Why Join Zotus AI" />
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {benefits.map((b) => (
              <span key={b} className="px-6 py-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] text-sm font-semibold text-[var(--color-text)]">{b}</span>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-py bg-[var(--color-bg-subtle)]">
        <Container>
          <SectionHeading eyebrow="Open Positions" title="Current Opportunities" description="We're always looking for exceptional talent. Find your next role below." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6 max-w-4xl mx-auto">
            {positions.map((pos) => (
              <motion.div key={pos.title} variants={fadeInUp} className="p-8 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text)]" style={{ fontFamily: 'var(--font-heading)' }}>{pos.title}</h3>
                    <div className="flex flex-wrap items-center gap-5 mt-3 text-sm text-[var(--color-text-secondary)]">
                      <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" />{pos.department}</span>
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{pos.location}</span>
                      <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{pos.type}</span>
                    </div>
                  </div>
                  <span className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg ${pos.type === 'Internship' ? 'bg-[var(--color-success)]/10 text-[var(--color-success)]' : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'}`}>
                    {pos.type}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">{pos.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pos.requirements.map((r) => (
                    <span key={r} className="px-3 py-1.5 text-xs font-medium rounded-md bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)]">{r}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section id="apply" className="section-py bg-white border-t border-[var(--color-border-subtle)]">
        <Container>
          <SectionHeading eyebrow="Apply Now" title="Submit Your Application" description="Send us your details and we'll reach out if there's a fit." />
          <div className="max-w-2xl mx-auto">
            {applied ? (
              <div className="text-center py-20 px-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)]">
                <CheckCircle2 className="w-20 h-20 text-[var(--color-success)] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3">Application Submitted!</h3>
                <p className="text-[var(--color-text-secondary)] mb-8">We'll review your application and get back to you soon.</p>
                <Button onClick={() => setApplied(false)} variant="outline">Submit Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 p-10 rounded-3xl border border-[var(--color-border)] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><label htmlFor="a-name" className="block text-sm font-semibold text-[var(--color-text)] mb-2">Full Name *</label><input id="a-name" required placeholder="Your name" className={inputClass} /></div>
                  <div><label htmlFor="a-email" className="block text-sm font-semibold text-[var(--color-text)] mb-2">Email *</label><input id="a-email" type="email" required placeholder="your@email.com" className={inputClass} /></div>
                </div>
                <div><label htmlFor="a-pos" className="block text-sm font-semibold text-[var(--color-text)] mb-2">Position *</label>
                  <select id="a-pos" required className={inputClass}>
                    <option value="">Select position</option>
                    {positions.map((p) => <option key={p.title} value={p.title}>{p.title}</option>)}
                  </select>
                </div>
                <div><label htmlFor="a-resume" className="block text-sm font-semibold text-[var(--color-text)] mb-2">Resume Link *</label><input id="a-resume" required placeholder="Link to your resume (Google Drive, Dropbox, etc.)" className={inputClass} /></div>
                <div><label htmlFor="a-msg" className="block text-sm font-semibold text-[var(--color-text)] mb-2">Cover Note</label><textarea id="a-msg" rows={4} placeholder="Tell us why you'd be a great fit..." className={inputClass} /></div>
                <Button type="submit" size="lg" className="w-full"><Send className="w-5 h-5" />Submit Application</Button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
