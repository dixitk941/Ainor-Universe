import React from 'react';
import { motion } from 'framer-motion';
import { FaCreditCard, FaBolt, FaChartLine, FaUsers, FaCode } from 'react-icons/fa';
import { AnimatedMesh, ChapterMark, ChapterLabel } from '../ui/CinematicEffects';
import { AnimatedCounter } from '../ui/AnimationComponents';

const fw = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const WhyAinorBentoSection = () => (
  <section id="why-ainor" className="relative bg-[#f8f8f2] overflow-hidden py-16 md:py-32">
    <AnimatedMesh light />
    <ChapterMark num={6} light />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
      <ChapterLabel num={6} title="Why Us" light />

      <motion.h2 {...fw(0)}
        className="text-[clamp(2rem,5.5vw,4rem)] font-black leading-[1.08] tracking-tight text-gray-900 mb-3">
        Built Different.
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          For a Reason.
        </span>
      </motion.h2>
      <motion.p {...fw(0.12)}
        className="text-gray-500 text-sm sm:text-lg max-w-xl mb-8 md:mb-14 leading-relaxed">
        Ek agency nahi — ek model jo actually kaam karta hai.
      </motion.p>

      {/* Bento grid — 2-col on mobile, 3-col on md+ */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 auto-rows-auto">

        {/* Subscription — always full width */}
        <motion.div {...fw(0.05)}
          className="col-span-2 bg-white border border-gray-200 rounded-2xl p-5 sm:p-8
                     relative overflow-hidden hover:shadow-md transition-all duration-300 group">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
          <motion.div initial={{ rotate: -12, scale: 0 }} whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }} transition={{ type: 'spring', delay: 0.2 }}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-3 sm:mb-5">
            <FaCreditCard size={16} />
          </motion.div>
          <h3 className="text-base sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Subscription-based Model</h3>
          <p className="text-gray-500 text-xs sm:text-base max-w-sm leading-relaxed">
            <span className="hidden sm:inline">No hourly billing, no surprise invoices. Pay a flat monthly fee — get unlimited requests.</span>
            <span className="sm:hidden">Flat monthly fee. Unlimited requests. No surprises.</span>
          </p>
          <motion.div animate={{ scale:[1,1.4,1], opacity:[0.06,0.12,0.06] }} transition={{ duration:9, repeat:Infinity }}
            className="absolute -right-12 -bottom-12 w-52 h-52 bg-indigo-400 rounded-full blur-3xl pointer-events-none" />
        </motion.div>

        {/* Speed */}
        <motion.div {...fw(0.1)}
          className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6
                     relative overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4 sm:mb-8">
            <motion.div animate={{ boxShadow:['0 0 0 0 rgba(234,179,8,0)','0 0 0 10px rgba(234,179,8,0.15)','0 0 0 0 rgba(234,179,8,0)'] }}
              transition={{ duration:2, repeat:Infinity }}
              className="w-9 h-9 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-500">
              <FaBolt size={13} />
            </motion.div>
            <span className="text-[9px] sm:text-[10px] font-bold bg-yellow-50 text-yellow-600 border border-yellow-200 px-2 py-1 rounded-full tracking-wider">
              FAST
            </span>
          </div>
          <div>
            <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">Lightning Fast</h3>
            <p className="text-xs text-gray-500">
              Designs in{' '}
              <span className="text-yellow-500 font-bold"><AnimatedCounter value={48} suffix="h" /></span>
              <span className="hidden sm:inline">. Updates every 2 days.</span>
            </p>
          </div>
        </motion.div>

        {/* Scalable */}
        <motion.div {...fw(0.15)}
          className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6
                     relative hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-4 sm:mb-8">
            <FaChartLine size={13} />
          </div>
          <div>
            <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">Scalable</h3>
            <p className="text-xs text-gray-500 hidden sm:block">Built from day one to grow with you — no re-architecting later.</p>
            <p className="text-xs text-gray-500 sm:hidden">Grows with you, always.</p>
          </div>
        </motion.div>

        {/* Predictable — small square on mobile, sits beside team on md */}
        <motion.div {...fw(0.25)}
          className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-4 sm:p-6 relative overflow-hidden flex flex-col justify-between md:hidden">
          <motion.div animate={{ boxShadow:['0 0 0 0 rgba(255,255,255,0)','0 0 0 10px rgba(255,255,255,0.12)','0 0 0 0 rgba(255,255,255,0)'] }}
            transition={{ duration:2.5, repeat:Infinity }}
            className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center text-white mb-4">
            <FaCreditCard size={13} />
          </motion.div>
          <div>
            <h3 className="text-sm font-bold text-white mb-0.5">Fixed Costs</h3>
            <p className="text-xs text-white/70">No surprises, ever.</p>
          </div>
        </motion.div>

        {/* Team — full width on mobile, 2/3 on desktop */}
        <motion.div {...fw(0.2)}
          className="col-span-2 md:col-span-2 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100
                     rounded-2xl p-5 sm:p-8 relative overflow-hidden hover:shadow-md transition-all duration-300">
          <motion.div animate={{ rotate:[0,6,0], scale:[1,1.06,1] }} transition={{ duration:14, repeat:Infinity }}
            className="absolute -right-6 -top-6 opacity-[0.07] pointer-events-none">
            <FaCode className="text-[180px] text-indigo-600" />
          </motion.div>
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 mb-3 sm:mb-5 shadow-sm">
            <FaUsers size={15} />
          </div>
          <h3 className="text-base sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Your Dedicated Tech Team</h3>
          <p className="text-gray-600 text-xs sm:text-base max-w-md leading-relaxed">
            <span className="hidden sm:inline">Senior developers and designers at your fingertips — jaise in-house team, minus the HR headaches.</span>
            <span className="sm:hidden">Senior devs & designers on demand. No HR, no overhead.</span>
          </p>
        </motion.div>

        {/* Predictable — desktop only (hidden on mobile, shown above) */}
        <motion.div {...fw(0.25)}
          className="hidden md:flex bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 relative overflow-hidden flex-col justify-between">
          <motion.div animate={{ boxShadow:['0 0 0 0 rgba(255,255,255,0)','0 0 0 10px rgba(255,255,255,0.12)','0 0 0 0 rgba(255,255,255,0)'] }}
            transition={{ duration:2.5, repeat:Infinity }}
            className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white mb-8">
            <FaCreditCard size={15} />
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Predictable Costs</h3>
            <p className="text-sm text-white/70">Fixed monthly price. No surprises, ever.</p>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default WhyAinorBentoSection;
