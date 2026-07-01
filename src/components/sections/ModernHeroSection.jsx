import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaWhatsapp, FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { AnimatedCounter } from '../ui/AnimationComponents';
import { useEntranceAnimation } from '../ui/PageEntranceAnimation';
import { AnimatedMesh } from '../ui/CinematicEffects';

import freelystaLogo    from '../../assets/projects/freelysta/play_store_512.png';
import sttrikaLogo      from '../../assets/projects/sttrika/logoLight.dbeb85f94fcb8e3cf613.png';
import goforcabLogo     from '../../assets/projects/goforcab/logo.png';
import exambulletinLogo from '../../assets/projects/exambulletin/favicon.svg';
import mohangLogo       from '../../assets/projects/mohangenterprises/logo.png';
import livestayyLogo    from '../../assets/projects/livestayy/ic_launcher.png';

const ease = [0.22, 1, 0.36, 1];
const AUTO_MS = 4500;

const family = [
  { initials: 'KD', label: 'Karan · Freelysta',      from: '#6366f1', to: '#818cf8' },
  { initials: 'CA', label: 'Chetan · GoForCab',       from: '#f97316', to: '#fbbf24' },
  { initials: 'VA', label: 'Vivek · LiveStayy',       from: '#14b8a6', to: '#34d399' },
  { initials: 'KD', label: 'Kajal · Sttrika',         from: '#ec4899', to: '#f472b6' },
  { initials: 'RT', label: 'Rahul · ExamBulletin',    from: '#a855f7', to: '#c084fc' },
  { initials: 'MG', label: 'Mohan · MG Enterprises',  from: '#f59e0b', to: '#fcd34d' },
];

const stats = [
  { value: 50,  suffix: '+',   label: 'Founders' },
  { value: 100, suffix: '+',   label: 'Products'  },
  { value: 4,   suffix: '.9★', label: 'Rating'    },
];

const reviews = [
  { name: 'Karan Dixit',   role: 'Founder, Freelysta',         logo: freelystaLogo,    avatar: 'KD', from: '#6366f1', to: '#818cf8',
    review: 'Yaar, AINOR ne mera startup treat kiya jaise unka apna bachcha ho. Har feature pe itna care tha. Genuinely feel karta hun — ye meri family hai, sirf vendor nahi.' },
  { name: 'Chetan Agrawal',role: 'Founder, GoForCab',          logo: goforcabLogo,     avatar: 'CA', from: '#f97316', to: '#fbbf24',
    review: 'AINOR ne actually samjha. Deadline pe deliver kiya, budget ke andar rakha, aur quality ekdum top-notch. Ye log sirf developers nahi — real partners hain.' },
  { name: 'Vivek Agarwal', role: 'Co-founder, LiveStayy',      logo: livestayyLogo,    avatar: 'VA', from: '#14b8a6', to: '#34d399',
    review: 'Raat ko bhi message karo toh reply milta tha. Hospitality tech mein bohot complexity hai — inhone sab professionally handle kiya. Family wali feeling real hai!' },
  { name: 'Kajal Dixit',   role: 'CEO, Sttrika',               logo: sttrikaLogo,      avatar: 'KD', from: '#ec4899', to: '#f472b6',
    review: 'AINOR ne sab kuch handle kiya bina kisi drama ke. Humara conversion rate bhi badha aur customers bhi happy. Inhe hire karo — regret nahi hoga.' },
  { name: 'Rahul Tiwari',  role: 'Founder, ExamBulletin',      logo: exambulletinLogo, avatar: 'RT', from: '#a855f7', to: '#c084fc',
    review: 'Lakhs of users ek saath visit karte hain, aur abhi tak crash nahi hua. Inki dedication ne humein woh bana diya jo hum aaj hain.' },
  { name: 'Mohan Gupta',   role: 'Owner, Mohan G Enterprises', logo: mohangLogo,       avatar: 'MG', from: '#f59e0b', to: '#fcd34d',
    review: 'AINOR ne na sirf website banayi, poori digital journey samjhaayi. Jo result mila woh expectation se kaafi zyada tha. Sachchi dil lagate hain ye log.' },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => <FaStar key={i} size={10} className="text-yellow-400" />)}
  </div>
);

const ReviewPanel = ({ triggerAnimation }) => {
  const [active, setActive] = useState(0);
  const [dir,    setDir]    = useState(1);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const goTo = useCallback((i, d = 1) => { setDir(d); setActive(i); }, []);
  const next  = useCallback(() => goTo((active + 1) % reviews.length, 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(next, AUTO_MS);
    return () => clearInterval(timer.current);
  }, [paused, next]);

  const manual = (i) => {
    clearInterval(timer.current);
    goTo(i, i > active ? 1 : -1);
    setPaused(true);
    timer.current = setTimeout(() => setPaused(false), 8000);
  };

  const r = reviews[active];
  const variants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ? 32 : -32 }),
    center: { opacity: 1, x: 0 },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -32 : 32 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={triggerAnimation ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, delay: 0.4, ease }}
      className="flex flex-col h-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400">
          What the family says
        </span>
        <div className="flex gap-1.5">
          {[FaChevronLeft, FaChevronRight].map((Icon, idx) => (
            <button key={idx}
              onClick={() => manual(idx === 0 ? (active - 1 + reviews.length) % reviews.length : (active + 1) % reviews.length)}
              className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-all">
              <Icon size={10} />
            </button>
          ))}
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 relative" style={{ minHeight: 220 }}>
        <AnimatePresence custom={dir} mode="wait">
          <motion.div key={active} custom={dir} variants={variants}
            initial="enter" animate="center" exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute inset-0 bg-white border border-gray-100 rounded-2xl p-6 flex flex-col shadow-sm"
          >
            <div className="absolute top-0 left-6 right-6 h-px rounded-full"
              style={{ background: `linear-gradient(to right, ${r.from}, ${r.to})` }} />

            <FaQuoteLeft size={16} className="text-gray-200 mb-3" />
            <Stars />

            <p className="text-gray-600 text-sm leading-relaxed mt-3 flex-1">"{r.review}"</p>

            <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${r.from}, ${r.to})` }}>
                {r.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-900 text-sm font-semibold truncate">{r.name}</p>
                <p className="text-gray-400 text-xs truncate">{r.role}</p>
              </div>
              <img src={r.logo} alt={r.name} className="h-6 w-auto object-contain opacity-40 max-w-[52px]" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress + dots */}
      <div className="mt-4 space-y-2.5">
        <div className="h-px bg-gray-100 rounded-full overflow-hidden">
          <motion.div key={`${active}-${paused}`}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(to right, ${r.from}, ${r.to})` }}
            initial={{ width: '0%' }}
            animate={{ width: paused ? '0%' : '100%' }}
            transition={{ duration: paused ? 0 : AUTO_MS / 1000, ease: 'linear' }} />
        </div>
        <div className="flex justify-center gap-1.5">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => manual(i)}
              className={`rounded-full transition-all duration-300 ${active === i ? 'w-4 h-1.5 bg-indigo-500' : 'w-1.5 h-1.5 bg-gray-200 hover:bg-gray-300'}`} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ModernHeroSection = () => {
  const { triggerAnimation } = useEntranceAnimation();

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20 pb-10 md:pt-24 md:pb-16">
      <AnimatedMesh light />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{ backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      {/* Huge background text */}
      <div className="absolute left-0 bottom-0 text-[clamp(120px,18vw,220px)] font-black leading-none
                      text-gray-900/[0.025] select-none pointer-events-none tracking-tighter">
        AINOR
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-5 md:gap-7">

            <motion.div initial={{ opacity: 0, y: -12 }} animate={triggerAnimation ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.5, ease }}>
              <div className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-[11px] font-bold text-gray-500 tracking-[0.2em] uppercase">
                  Accepting new clients
                </span>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={triggerAnimation ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.8, ease }}
              className="text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[1.05] tracking-tight text-[#111318]">
              We Don't Just
              <br />Build{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Software —
              </span>
              <br />We Build{' '}
              <span className="relative inline-block text-[#111318]">
                Relationships.
                <motion.svg className="absolute -bottom-1 left-0 w-full pointer-events-none"
                  viewBox="0 0 300 6" preserveAspectRatio="none" height="6">
                  <motion.path d="M0 3 Q 75 6 150 3 Q 225 0 300 3"
                    fill="none" stroke="#c7d2fe" strokeWidth="3" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={triggerAnimation ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 1.2, delay: 1.0, ease }} />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={triggerAnimation ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.6, ease }}
              className="flex flex-wrap gap-3">
              <motion.a href="/pricing" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#111318] text-white h-11 px-7 rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors shadow-md shadow-gray-900/10">
                View Plans <FaArrowRight size={11} />
              </motion.a>
              <motion.a href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-green-500 text-white h-11 px-7 rounded-xl font-bold text-sm hover:bg-green-600 transition-colors">
                <FaWhatsapp size={14} /> WhatsApp
              </motion.a>
            </motion.div>

            <motion.div initial={{ scaleX: 0 }} animate={triggerAnimation ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8, ease }}
              className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent origin-left" />

            <motion.div initial={{ opacity: 0, y: 10 }} animate={triggerAnimation ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.6, ease }}
              className="flex flex-col gap-2.5">
              <div className="flex -space-x-2">
                {family.map((m, i) => (
                  <motion.div key={i} title={m.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={triggerAnimation ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + i * 0.06, type: 'spring', stiffness: 220, damping: 18 }}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold shadow-sm cursor-default"
                    style={{ background: `linear-gradient(135deg, ${m.from}, ${m.to})` }}>
                    {m.initials}
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                  animate={triggerAnimation ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
                  className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-gray-500 text-[10px] font-bold shadow-sm">
                  +44
                </motion.div>
              </div>
              <p className="text-xs text-gray-400">
                50+ founders who became{' '}
                <span className="text-gray-700 font-semibold">part of the family</span>
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={triggerAnimation ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.85, duration: 0.6, ease }}
              className="flex items-center gap-5 sm:gap-8">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#111318] leading-none">
                    {triggerAnimation
                      ? <><AnimatedCounter value={s.value} duration={1.2} />{s.suffix}</>
                      : `0${s.suffix}`}
                  </span>
                  <span className="text-[11px] text-gray-400 mt-0.5 uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — review carousel (shown on mobile below, full col on desktop) */}
          <div className="lg:pl-8 w-full">
            <ReviewPanel triggerAnimation={triggerAnimation} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHeroSection;
