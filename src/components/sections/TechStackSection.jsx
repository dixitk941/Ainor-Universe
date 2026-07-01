import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiPython, SiFirebase, SiMongodb, SiPostgresql,
  SiFlutter, SiAmazonwebservices, SiDocker, SiFigma, SiGit, SiRedux,
} from 'react-icons/si';
import { ChapterMark, ChapterLabel } from '../ui/CinematicEffects';

const groups = [
  {
    label: 'Frontend', badge: 'bg-blue-100 text-blue-700',
    items: [
      { name:'React',       Icon:SiReact,         color:'#61DAFB' },
      { name:'Next.js',     Icon:SiNextdotjs,     color:'#000'    },
      { name:'TypeScript',  Icon:SiTypescript,    color:'#3178C6' },
      { name:'JavaScript',  Icon:SiJavascript,    color:'#F7DF1E' },
      { name:'Tailwind',    Icon:SiTailwindcss,   color:'#06B6D4' },
      { name:'Redux',       Icon:SiRedux,         color:'#764ABC' },
    ],
  },
  {
    label: 'Backend', badge: 'bg-green-100 text-green-700',
    items: [
      { name:'Node.js',     Icon:SiNodedotjs,     color:'#339933' },
      { name:'Python',      Icon:SiPython,        color:'#3776AB' },
      { name:'Firebase',    Icon:SiFirebase,      color:'#FFCA28' },
      { name:'MongoDB',     Icon:SiMongodb,       color:'#47A248' },
      { name:'PostgreSQL',  Icon:SiPostgresql,    color:'#4169E1' },
    ],
  },
  {
    label: 'Mobile & Tools', badge: 'bg-purple-100 text-purple-700',
    items: [
      { name:'Flutter',     Icon:SiFlutter,            color:'#02569B' },
      { name:'React Native',Icon:SiReact,              color:'#61DAFB' },
      { name:'AWS',         Icon:SiAmazonwebservices,   color:'#FF9900' },
      { name:'Docker',      Icon:SiDocker,             color:'#2496ED' },
      { name:'Figma',       Icon:SiFigma,              color:'#F24E1E' },
      { name:'Git',         Icon:SiGit,                color:'#F05032' },
    ],
  },
];

const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const TechStackSection = () => (
  <section className="relative bg-[#f8f8f2] overflow-hidden py-16 md:py-32">
    <ChapterMark num={7} light />

    {/* Top edge */}
    <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none overflow-hidden">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,80 L1440,0 L0,0 Z" fill="#07070f" />
      </svg>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <ChapterLabel num={7} title="The Arsenal" light />

      <motion.h2
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="text-[clamp(2.4rem,5.5vw,4rem)] font-black leading-[1.08] tracking-tight text-[#0d0d14] mb-4"
      >
        Built With the
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          Best Tools.
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
        className="text-[#0d0d14]/40 text-base sm:text-lg max-w-xl mb-14 leading-relaxed"
      >
        Modern, battle-tested technologies — har tool ek reason se choose kiya gaya hai.
      </motion.p>

      <div className="flex flex-col gap-7 md:gap-10">
        {groups.map((g, gi) => (
          <motion.div key={g.label}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: gi * 0.1 }}>
            <div className="flex items-center gap-3 mb-5">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${g.badge}`}>{g.label}</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
            >
              {g.items.map(({ name, Icon, color }) => (
                <motion.div key={name} variants={itemVariants}
                  className="group flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl bg-white border border-gray-100
                             hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <Icon size={22} className="sm:text-[28px] group-hover:scale-110 transition-transform duration-300" style={{ color, fontSize: undefined }} />
                  <span className="text-[10px] sm:text-xs font-medium text-gray-600 text-center leading-tight">{name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
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

export default TechStackSection;
