import React from 'react';
import { motion } from 'framer-motion';

/* ─── Film Grain ────────────────────────────────────────────────────── */
export const FilmGrain = () => (
  <div
    className="fixed inset-0 pointer-events-none z-[9997]"
    style={{
      opacity: 0.032,
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '200px 200px',
    }}
  />
);

/* ─── Animated Gradient Mesh ────────────────────────────────────────── */
// light=true → subtle tints for white backgrounds
export const AnimatedMesh = ({ light = false }) => {
  const a = light ? [0.05, 0.04, 0.025] : [0.18, 0.14, 0.07];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ x: [0, 100, -60, 0], y: [0, -80, 60, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-1/4 -left-1/4 w-[700px] h-[700px] rounded-full"
        style={{ background: `radial-gradient(circle, rgba(99,102,241,${a[0]}) 0%, transparent 65%)` }}
      />
      <motion.div
        animate={{ x: [0, -80, 40, 0], y: [0, 100, -60, 0], scale: [1, 0.85, 1.15, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full"
        style={{ background: `radial-gradient(circle, rgba(168,85,247,${a[1]}) 0%, transparent 65%)` }}
      />
      <motion.div
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 80, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{ background: `radial-gradient(circle, rgba(236,72,153,${a[2]}) 0%, transparent 60%)` }}
      />
    </div>
  );
};

/* ─── Horizontal scan-lines (Blade Runner vibe) ─────────────────────── */
export const ScanLines = () => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)',
      backgroundSize: '100% 4px',
    }}
  />
);

/* ─── Chapter watermark ─────────────────────────────────────────────── */
export const ChapterMark = ({ num, light = false }) => (
  <div
    className="absolute right-0 top-0 leading-none select-none pointer-events-none font-black overflow-hidden"
    style={{
      fontSize: 'clamp(140px, 18vw, 240px)',
      color: light ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.03)',
      lineHeight: 1,
    }}
  >
    {String(num).padStart(2, '0')}
  </div>
);

/* ─── Chapter label ─────────────────────────────────────────────────── */
export const ChapterLabel = ({ num, title, light = false }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-3 mb-10"
  >
    <span className={`text-[11px] font-bold tracking-[0.3em] uppercase ${light ? 'text-indigo-600' : 'text-indigo-400'}`}>
      {String(num).padStart(2, '0')} — {title}
    </span>
    <div className={`flex-1 h-px ${light ? 'bg-gray-200' : 'bg-white/10'}`} />
  </motion.div>
);

/* ─── Diagonal section divider ──────────────────────────────────────── */
// direction: 'to-light' | 'to-dark'
export const DiagonalDivider = ({ direction = 'to-light', lightColor = '#f8f8f2', flip = false }) => {
  const fill = direction === 'to-light' ? lightColor : '#07070f';
  const d = flip
    ? `M0,0 L1440,80 L1440,80 L0,80 Z`
    : `M0,80 L1440,0 L1440,80 Z`;
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden" style={{ height: 80 }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
        <path d={d} fill={fill} />
      </svg>
    </div>
  );
};

/* ─── Glowing line separator ────────────────────────────────────────── */
export const GlowLine = ({ color = '#6366f1' }) => (
  <div className="w-full h-px relative overflow-hidden">
    <div className="absolute inset-0" style={{ background: `linear-gradient(to right, transparent, ${color}60, transparent)` }} />
    <motion.div
      animate={{ x: ['-100%', '200%'] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
      className="absolute inset-y-0 w-1/3"
      style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}
    />
  </div>
);
