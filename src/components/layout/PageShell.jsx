import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import FloatingNav from './FloatingNav';
import ModernFooter from './ModernFooter';
import { AnimatedCounter } from '../ui/AnimationComponents';
import { AnimatedMesh, FilmGrain } from '../ui/CinematicEffects';

export const ease = [0.22, 1, 0.36, 1];

/* ── Scroll progress bar (matches homepage) ─────────────────────────── */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-[9999] origin-left"
    />
  );
};

/* ── Full-bleed page shell — replaces ModernPageLayout ──────────────── */
export const PageShell = ({ children }) => (
  <>
    <FilmGrain />
    <ScrollProgress />
    <div className="bg-[#f5f5f5] min-h-screen overflow-x-hidden">
      <FloatingNav />
      <main className="w-full flex flex-col">
        {children}
        <ModernFooter />
      </main>
    </div>
  </>
);

/* ── Status badge — green ping dot + label ──────────────────────────── */
export const StatusBadge = ({ children, icon = null }) => (
  <div className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">
    {icon || (
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
    )}
    <span className="text-[11px] font-bold text-gray-500 tracking-[0.2em] uppercase">{children}</span>
  </div>
);

/* ── Section eyebrow — numbered label + rule ────────────────────────── */
export const SectionLabel = ({ num, title }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-3 mb-10"
  >
    <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-indigo-600">
      {String(num).padStart(2, '0')} — {title}
    </span>
    <div className="flex-1 h-px bg-gray-200" />
  </motion.div>
);

/* ── Homepage-style hero ─────────────────────────────────────────────
 * props:
 *  - badge: string        (status badge text)
 *  - badgeIcon: node      (optional custom badge icon)
 *  - bgWord: string       (huge faint background word)
 *  - title: node          (headline; wrap accent words in <GradientWord>)
 *  - subtitle: node
 *  - actions: node        (optional buttons row)
 *  - stats: [{value,suffix,label}]  (optional)
 *  - align: 'left' | 'center'
 */
export const GradientWord = ({ children }) => (
  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
    {children}
  </span>
);

export const PageHero = ({
  badge, badgeIcon = null, bgWord, title, subtitle, actions = null, stats = null, align = 'left',
}) => {
  const centered = align === 'center';
  return (
    <section className="relative min-h-[70vh] flex items-center bg-white overflow-hidden pt-24 pb-16 md:pt-28">
      <AnimatedMesh light />
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{ backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      {bgWord && (
        <div className={`absolute bottom-0 ${centered ? 'left-1/2 -translate-x-1/2' : 'left-0'} text-[clamp(90px,15vw,200px)] font-black leading-none
                        text-gray-900/[0.025] select-none pointer-events-none tracking-tighter`}>
          {bgWord}
        </div>
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className={`flex flex-col gap-6 md:gap-8 ${centered ? 'items-center text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
          {badge && (
            <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease }}>
              <StatusBadge icon={badgeIcon}>{badge}</StatusBadge>
            </motion.div>
          )}

          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease }}
            className="text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[1.05] tracking-tight text-[#111318]">
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease }}
              className={`text-lg md:text-xl text-gray-500 leading-relaxed ${centered ? 'max-w-2xl' : 'max-w-2xl'}`}>
              {subtitle}
            </motion.p>
          )}

          {actions && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease }}
              className={`flex flex-wrap gap-3 ${centered ? 'justify-center' : ''}`}>
              {actions}
            </motion.div>
          )}

          {stats && (
            <>
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease }}
                className={`h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent ${centered ? '' : 'origin-left'}`} />
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease }}
                className={`flex items-center gap-5 sm:gap-8 ${centered ? 'justify-center' : ''}`}>
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-black text-[#111318] leading-none">
                      <AnimatedCounter value={s.value} duration={1.2} />{s.suffix}
                    </span>
                    <span className="text-[11px] text-gray-400 mt-0.5 uppercase tracking-wider">{s.label}</span>
                  </div>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

/* ── Reusable buttons ───────────────────────────────────────────────── */
export const PrimaryButton = ({ children, ...props }) => (
  <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
    className="inline-flex items-center gap-2 bg-[#111318] text-white h-11 px-7 rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors shadow-md shadow-gray-900/10"
    {...props}>
    {children}
  </motion.a>
);

export const WhatsAppButton = ({ children, ...props }) => (
  <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
    className="inline-flex items-center gap-2 bg-green-500 text-white h-11 px-7 rounded-xl font-bold text-sm hover:bg-green-600 transition-colors"
    {...props}>
    {children}
  </motion.a>
);

export const GhostButton = ({ children, ...props }) => (
  <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
    className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 h-11 px-7 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors border border-gray-200"
    {...props}>
    {children}
  </motion.a>
);
