import React from 'react';
import { motion } from 'framer-motion';
import { FaClipboardList, FaTasks, FaRocket } from 'react-icons/fa';
import { ChapterMark, ChapterLabel } from '../ui/CinematicEffects';

const steps = [
  { num: '01', Icon: FaClipboardList, title: 'Subscribe to a Plan',
    body: 'Choose a monthly plan that fits your needs. No long-term contracts — cancel anytime.',
    from: '#6366f1', to: '#818cf8' },
  { num: '02', Icon: FaTasks, title: 'Request as You Go',
    body: "Add unlimited tasks to your board. We'll work through them one by one — fast.",
    from: '#a855f7', to: '#c084fc' },
  { num: '03', Icon: FaRocket, title: 'Receive Delivery',
    body: 'Get updates every 48 hours. Review, approve, and move to the next — endlessly.',
    from: '#ec4899', to: '#f472b6' },
];

const HowItWorksSection = () => (
  <section id="process" className="relative bg-[#f8f8f2] overflow-hidden py-16 md:py-32">
    <ChapterMark num={5} light />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
      <ChapterLabel num={5} title="The Process" light />

      <motion.h2
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="text-[clamp(2rem,5.5vw,4rem)] font-black leading-[1.08] tracking-tight text-[#0d0d14] mb-3"
      >
        Simple by Design.
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          Powerful in Practice.
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
        className="text-[#0d0d14]/40 text-sm sm:text-lg max-w-xl mb-10 md:mb-16 leading-relaxed"
      >
        Teen steps. Zero confusion. Subscribe aur shuru karo.
      </motion.p>

      {/* Mobile: horizontal scroll strip */}
      <div className="md:hidden -mx-4 px-4 overflow-x-auto pb-4 flex gap-3 snap-x snap-mandatory scrollbar-none">
        {steps.map((s, i) => (
          <motion.div key={s.num}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="snap-start flex-shrink-0 w-[72vw] max-w-[280px] flex flex-col gap-4"
          >
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-lg"
              style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})`,
                       boxShadow: `0 6px 20px ${s.from}30` }}>
              {s.num}
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col gap-3 shadow-sm flex-1">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${s.from}15` }}>
                <s.Icon size={16} style={{ color: s.from }} />
              </div>
              <h3 className="text-sm font-bold text-[#0d0d14]">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.body}</p>
            </div>
          </motion.div>
        ))}
        {/* Scroll hint fade */}
        <div className="flex-shrink-0 w-4" />
      </div>

      {/* Desktop: 3-col grid */}
      <div className="hidden md:grid grid-cols-3 gap-6 relative">
        {/* Connector line */}
        <div className="absolute top-[50px] left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px
                        bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 pointer-events-none" />

        {steps.map((s, i) => (
          <motion.div key={s.num}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
            className="flex flex-col gap-5"
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-lg"
              style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})`,
                       boxShadow: `0 8px 24px ${s.from}30` }}>
              {s.num}
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col gap-4 shadow-sm
                           hover:shadow-md transition-shadow duration-300 group">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${s.from}15` }}>
                <s.Icon size={18} style={{ color: s.from }} />
              </motion.div>
              <h3 className="text-lg font-bold text-[#0d0d14]">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
