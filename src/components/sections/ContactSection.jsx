import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { AnimatedMesh, ScanLines, ChapterMark, ChapterLabel } from '../ui/CinematicEffects';

const inputClass = `w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1]
  text-white placeholder-white/25 focus:border-indigo-500/60 focus:bg-white/[0.09]
  outline-none transition-all text-sm`;

const ContactSection = () => {
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', phone:'', message:'' });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const update = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '4b29b417-55d1-4ac8-8c6e-9ac8097097f8',
          name: `${form.firstName} ${form.lastName}`,
          email: form.email, phone: form.phone, message: form.message,
          from_name: 'AINOR Website Contact Form',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ firstName:'', lastName:'', email:'', phone:'', message:'' });
      } else { setStatus('error'); }
    } catch { setStatus('error'); }
    finally { setSubmitting(false); }
  };

  return (
    <section id="contact" className="relative bg-[#07070f] overflow-hidden py-16 md:py-32">
      <AnimatedMesh />
      <ScanLines />
      <ChapterMark num={8} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ChapterLabel num={8} title="Join The Family" />

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-[clamp(2.4rem,5.5vw,4rem)] font-black leading-[1.08] tracking-tight text-white mb-4">
            Let's Build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Something Together.
            </span>
          </h2>
          <p className="text-white/35 text-base sm:text-lg max-w-lg leading-relaxed">
            Ready to start? WhatsApp pe message karo for the fastest response — ya form bharo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {/* WhatsApp */}
            <a href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="bg-green-500 hover:bg-green-400 transition-colors rounded-2xl p-6 flex items-center gap-4">
                <FaWhatsapp size={32} className="text-white flex-shrink-0" />
                <div>
                  <div className="font-bold text-white text-lg">Chat on WhatsApp</div>
                  <div className="text-green-100/70 text-sm">Fastest · Usually within 1 hour</div>
                </div>
                <FaArrowRight className="text-white/50 ml-auto" />
              </motion.div>
            </a>

            {/* Email */}
            <div className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400 flex-shrink-0">
                <FaEnvelope size={16} />
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Email</div>
                <div className="text-white font-medium text-sm">dixitk941@gmail.com</div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400 flex-shrink-0">
                <FaPhone size={15} />
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Phone</div>
                <div className="text-white font-medium text-sm">+91 9528202892</div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            {status === 'success' && (
              <div className="mb-5 p-4 bg-green-500/10 text-green-400 rounded-xl border border-green-500/20 text-sm">
                Thank you! We'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-5 p-4 bg-red-500/10 text-red-400 rounded-xl border border-red-500/20 text-sm">
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={submit} className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <input name="firstName" value={form.firstName} onChange={update}
                  placeholder="First Name" className={inputClass} required />
                <input name="lastName"  value={form.lastName}  onChange={update}
                  placeholder="Last Name"  className={inputClass} required />
              </div>
              <input name="email" type="email" value={form.email} onChange={update}
                placeholder="Email Address" className={inputClass} required />
              <input name="phone" type="tel" value={form.phone} onChange={update}
                placeholder="Phone Number" className={inputClass} />
              <textarea name="message" value={form.message} onChange={update} rows={4}
                placeholder="Tell us about your project..." className={`${inputClass} resize-none`} required />

              <motion.button type="submit" disabled={submitting}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500
                           text-white rounded-xl font-bold text-sm transition-all disabled:opacity-50 shadow-lg shadow-indigo-900/30 mt-1">
                {submitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
