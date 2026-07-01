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

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-dark placeholder-gray-light focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all';

  return (
    <>
      <section className="pt-[72px] bg-gradient-to-b from-primary/3 to-white">
        <Container className="section-py">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-primary">Careers</span>
            <h1>Build the Future <span className="text-gradient">With Us</span></h1>
            <p className="mt-6 text-lg text-gray leading-relaxed">
              Join a team of passionate engineers, designers, and problem-solvers working on meaningful technology for enterprises worldwide.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="section-py-sm bg-bg-subtle">
        <Container>
          <SectionHeading label="Perks & Benefits" title="Why Join Zotus AI" />
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {benefits.map((b) => (
              <span key={b} className="px-5 py-3 rounded-xl border border-border bg-white text-sm font-medium text-dark">{b}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="section-py bg-white">
        <Container>
          <SectionHeading label="Open Positions" title="Current Opportunities" description="We're always looking for exceptional talent. Find your next role below." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4 max-w-4xl mx-auto">
            {positions.map((pos) => (
              <motion.div key={pos.title} variants={fadeInUp} className="p-6 rounded-2xl border border-border hover:border-primary/15 hover:shadow-sm transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-dark">{pos.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray">
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{pos.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{pos.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{pos.type}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${pos.type === 'Internship' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'}`}>
                    {pos.type}
                  </span>
                </div>
                <p className="text-sm text-gray leading-relaxed mb-4">{pos.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pos.requirements.map((r) => (
                    <span key={r} className="px-3 py-1 text-xs rounded-lg bg-bg-subtle text-gray">{r}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-py bg-bg-subtle">
        <Container>
          <SectionHeading label="Apply Now" title="Submit Your Application" description="Send us your details and we'll reach out if there's a fit." />
          <div className="max-w-2xl mx-auto">
            {applied ? (
              <div className="text-center py-16 px-8 rounded-2xl border border-border bg-white">
                <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-dark mb-2">Application Submitted!</h3>
                <p className="text-gray mb-6">We'll review your application and get back to you soon.</p>
                <Button onClick={() => setApplied(false)} variant="outline">Submit Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl border border-border bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div><label htmlFor="a-name" className="block text-sm font-medium text-dark mb-2">Full Name *</label><input id="a-name" required placeholder="Your name" className={inputClass} /></div>
                  <div><label htmlFor="a-email" className="block text-sm font-medium text-dark mb-2">Email *</label><input id="a-email" type="email" required placeholder="your@email.com" className={inputClass} /></div>
                </div>
                <div><label htmlFor="a-pos" className="block text-sm font-medium text-dark mb-2">Position *</label>
                  <select id="a-pos" required className={inputClass}>
                    <option value="">Select position</option>
                    {positions.map((p) => <option key={p.title} value={p.title}>{p.title}</option>)}
                  </select>
                </div>
                <div><label htmlFor="a-resume" className="block text-sm font-medium text-dark mb-2">Resume Link *</label><input id="a-resume" required placeholder="Link to your resume (Google Drive, Dropbox, etc.)" className={inputClass} /></div>
                <div><label htmlFor="a-msg" className="block text-sm font-medium text-dark mb-2">Cover Note</label><textarea id="a-msg" rows={4} placeholder="Tell us why you'd be a great fit..." className={inputClass} /></div>
                <Button type="submit" size="lg" className="w-full sm:w-auto"><Send className="w-4 h-4" />Submit Application</Button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
