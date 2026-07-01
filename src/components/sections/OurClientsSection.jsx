import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedMesh, ChapterMark, ChapterLabel } from '../ui/CinematicEffects';

import freelystaLogo    from '../../assets/projects/freelysta/play_store_512.png';
import sttrikaLogo      from '../../assets/projects/sttrika/logoLight.dbeb85f94fcb8e3cf613.png';
import goforcabLogo     from '../../assets/projects/goforcab/logo.png';
import exambulletinLogo from '../../assets/projects/exambulletin/favicon.svg';
import mohangLogo       from '../../assets/projects/mohangenterprises/logo.png';
import livestayyLogo    from '../../assets/projects/livestayy/ic_launcher.png';

const clients = [
  { name: 'Freelysta',           logo: freelystaLogo,     desc: 'Freelancing Platform'  },
  { name: 'GoForCab',            logo: goforcabLogo,      desc: 'Ride-Hailing App'       },
  { name: 'LiveStayy',           logo: livestayyLogo,     desc: 'Hospitality Tech'       },
  { name: 'Sttrika',             logo: sttrikaLogo,       desc: 'Fashion E-Commerce'     },
  { name: 'ExamBulletin',        logo: exambulletinLogo,  desc: 'Job Portal'             },
  { name: 'Mohan G Enterprises', logo: mohangLogo,        desc: 'B2B Business'           },
];

const OurClientsSection = () => (
  <section className="relative bg-white overflow-hidden py-16 md:py-32">
    <AnimatedMesh light />
    <ChapterMark num={1} light />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <ChapterLabel num={1} title="The Family" light />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-4"
      >
        <h2 className="text-[clamp(2.4rem,5.5vw,4rem)] font-black leading-[1.08] tracking-tight text-gray-900">
          Every Client.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            A New Chapter.
          </span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-gray-500 text-base sm:text-lg max-w-lg mb-16 leading-relaxed"
      >
        Ye sirf clients nahi — ye woh log hain jinke sapno ko humne
        code mein dhala. Har project ek nayi kahani thi.
      </motion.p>

      {/* Client grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
      >
        {clients.map((c) => (
          <motion.div
            key={c.name}
            variants={{
              hidden:  { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="group flex flex-col items-center gap-2 sm:gap-3 bg-gray-50 border border-gray-200
                       hover:bg-white hover:border-indigo-200 hover:shadow-md rounded-2xl p-3 sm:p-5
                       transition-all duration-300 cursor-default"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={c.logo} alt={c.name}
                className="max-w-full max-h-full object-contain grayscale opacity-40
                           group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-400" />
            </div>
            <div className="text-center">
              <p className="text-gray-700 text-xs font-semibold">{c.name}</p>
              <p className="text-gray-400 text-[10px] mt-0.5">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-14 flex items-center gap-4"
      >
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-[11px] text-gray-400 font-medium tracking-widest uppercase">
          50+ founders trusted us across India & worldwide
        </span>
        <div className="h-px flex-1 bg-gray-200" />
      </motion.div>
    </div>
  </section>
);

export default OurClientsSection;
