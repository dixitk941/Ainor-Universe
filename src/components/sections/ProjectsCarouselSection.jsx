import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ChapterMark, ChapterLabel } from '../ui/CinematicEffects';
import { projects } from '../../data/projectsData';

/* ─── CSS marquee injected once ─────────────────────────────────── */
const MarqueeStyle = () => (
  <style>{`
    @keyframes marquee-scroll {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-33.333%); }
    }
    .marquee-track {
      animation: marquee-scroll 30s linear infinite;
    }
    .marquee-track.paused {
      animation-play-state: paused;
    }
  `}</style>
);

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const Icon  = project.icon;
  const color = project.accentColor;

  return (
    <div
      className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative bg-white rounded-2xl overflow-hidden transition-all duration-300"
        style={{ boxShadow: hovered ? `0 20px 50px -10px ${color}40` : '0 4px 20px -4px rgba(0,0,0,0.10)' }}>

        {/* Top accent */}
        <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${color}80, ${color})` }} />

        {/* Image */}
        <div className="relative h-36 sm:h-40 overflow-hidden">
          <img src={project.image} alt={project.title}
            className="w-full h-full object-cover transition-transform duration-400"
            style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />

          {/* Category badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-[10px] font-bold flex items-center gap-1"
            style={{ backgroundColor: color }}>
            <Icon size={10} />
            {project.category === 'web' ? 'Web' : project.category === 'mobile' ? 'Mobile' : 'E-Com'}
          </div>

          {/* Link — always visible on mobile, hover-only on desktop */}
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="absolute top-3 right-3 w-8 h-8 bg-white rounded-lg shadow flex items-center justify-center
                       text-gray-700 hover:text-black opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
            <FaExternalLinkAlt size={12} />
          </a>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4">
          <h3 className="text-sm font-bold text-gray-900 mb-1 truncate">{project.title}</h3>
          <p className="text-gray-400 text-xs leading-relaxed mb-2 sm:mb-3 line-clamp-2">
            {project.shortDesc || project.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-1.5 py-0.5 text-[10px] font-medium rounded-full border"
                style={{ borderColor: `${color}40`, color, backgroundColor: `${color}08` }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsCarouselSection = () => {
  const [paused, setPaused] = useState(false);
  /* 3 copies so scrolling 1/3 of total width = seamless loop regardless of card px size */
  const tripled = [...projects, ...projects, ...projects];

  return (
    <section className="relative bg-[#f8f8f2] overflow-hidden py-16 md:py-32">
      <MarqueeStyle />
      <ChapterMark num={3} light />

      {/* Top edge from dark */}
      <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 L1440,80 L0,80 Z" fill="#07070f" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mb-8 sm:mb-12">
          <ChapterLabel num={3} title="The Work" light />

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-[clamp(2rem,5.5vw,4rem)] font-black leading-[1.08] tracking-tight text-[#0d0d14]">
                Projects We've
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                  Crafted Together.
                </span>
              </h2>
            </motion.div>

            <motion.a href="/portfolio"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[#0d0d14] text-white px-5 py-2.5 rounded-xl
                         font-bold text-sm shadow-lg hover:bg-gray-900 transition-colors self-start sm:self-auto">
              View All <FaExternalLinkAlt size={11} />
            </motion.a>
          </div>
        </div>

        {/* Seamless CSS marquee — works on all devices */}
        <div
          className="overflow-hidden py-3 sm:py-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className={`marquee-track flex gap-4 sm:gap-5 pl-4 sm:pl-6${paused ? ' paused' : ''}`}
            style={{ width: 'max-content' }}
          >
            {tripled.map((p, i) => (
              <ProjectCard key={`${p.id}-${i}`} project={p} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom diagonal → dark */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 L1440,80 L1440,80 L0,80 Z" fill="#07070f" />
        </svg>
      </div>
    </section>
  );
};

export default ProjectsCarouselSection;
