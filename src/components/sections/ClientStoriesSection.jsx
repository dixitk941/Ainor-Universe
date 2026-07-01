import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AnimatedMesh, ChapterMark, ChapterLabel } from '../ui/CinematicEffects';

import freelystaLogo    from '../../assets/projects/freelysta/play_store_512.png';
import sttrikaLogo      from '../../assets/projects/sttrika/logoLight.dbeb85f94fcb8e3cf613.png';
import goforcabLogo     from '../../assets/projects/goforcab/logo.png';
import exambulletinLogo from '../../assets/projects/exambulletin/favicon.svg';
import mohangLogo       from '../../assets/projects/mohangenterprises/logo.png';
import livestayyLogo    from '../../assets/projects/livestayy/ic_launcher.png';

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
    review: 'Lakhs of users ek saath visit karte hain, aur abhi tak crash nahi hua. Inki dedication ne humein woh bana diya jo hum aaj hain. Dil se shukriya!' },
  { name: 'Mohan Gupta',   role: 'Owner, Mohan G Enterprises', logo: mohangLogo,       avatar: 'MG', from: '#f59e0b', to: '#fcd34d',
    review: 'AINOR ne na sirf website banayi, poori digital journey samjhaayi. Jo result mila woh expectation se kaafi zyada tha. Sachchi dil lagate hain ye log.' },
];

const AUTO_MS = 4000;

const ClientStoriesSection = () => {
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
  const slideVariants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ? 50 : -50 }),
    center: { opacity: 1, x: 0 },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -50 : 50 }),
  };

  return (
    <section
      className="relative bg-[#f8f8f2] overflow-hidden py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatedMesh light />
      <ChapterMark num={2} light />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ChapterLabel num={2} title="Their Words" light />

        {/* Section headline + nav */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-[clamp(2.4rem,5.5vw,4rem)] font-black leading-[1.08] tracking-tight text-gray-900">
              Hum Products Nahi,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Dreams Build Karte Hain
              </span>
            </h2>
            <p className="text-gray-500 text-base mt-4 max-w-lg leading-relaxed">
              Hamare clients hamare family hain — yeh unhi ki zubani sun lo.
            </p>
          </motion.div>

          {/* Prev / Next */}
          <div className="flex gap-2 lg:mb-2">
            <button onClick={() => manual((active - 1 + reviews.length) % reviews.length)}
              className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 border border-gray-200
                         flex items-center justify-center text-gray-400 hover:text-gray-700 transition-all shadow-sm">
              <FaChevronLeft size={12} />
            </button>
            <button onClick={() => manual((active + 1) % reviews.length)}
              className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 border border-gray-200
                         flex items-center justify-center text-gray-400 hover:text-gray-700 transition-all shadow-sm">
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>

        {/* Big review card */}
        <div className="relative" style={{ minHeight: 300 }}>
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={active} custom={dir}
              variants={slideVariants} initial="enter" animate="center" exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="relative bg-white border border-gray-200 rounded-3xl p-5 sm:p-8 md:p-12 overflow-hidden shadow-sm"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-8 right-8 h-px"
                style={{ background: `linear-gradient(to right, transparent, ${r.from}80, ${r.to}80, transparent)` }} />

              {/* Glow behind quote */}
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle, ${r.from}10 0%, transparent 70%)` }} />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
                <div>
                  <FaQuoteLeft size={28} className="text-gray-200 mb-5" />
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, i) => <FaStar key={i} size={14} className="text-yellow-400" />)}
                  </div>
                  <p className="text-gray-700 text-base sm:text-xl md:text-2xl leading-relaxed font-medium">
                    "{r.review}"
                  </p>
                </div>

                {/* Author card */}
                <div className="flex flex-row lg:flex-col items-center lg:items-start gap-3 lg:gap-4
                               bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-5 min-w-0 w-full lg:w-auto lg:min-w-[200px]">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${r.from}, ${r.to})` }}>
                    {r.avatar}
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold">{r.name}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{r.role}</p>
                  </div>
                  <img src={r.logo} alt={r.name}
                    className="h-7 w-auto object-contain opacity-40 grayscale mt-auto max-w-[80px]" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="mt-6 h-px bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            key={`${active}-${paused}`} className="h-full rounded-full"
            style={{ background: `linear-gradient(to right, ${r.from}, ${r.to})` }}
            initial={{ width: '0%' }}
            animate={{ width: paused ? '0%' : '100%' }}
            transition={{ duration: paused ? 0 : AUTO_MS / 1000, ease: 'linear' }} />
        </div>

        {/* Client logo tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {reviews.map((rev, i) => (
            <button key={rev.name} onClick={() => manual(i)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                active === i
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-700'
              }`}>
              <img src={rev.logo} alt={rev.name}
                className={`w-4 h-4 object-contain ${active === i ? '' : 'opacity-40 grayscale'}`} />
              {rev.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStoriesSection;
