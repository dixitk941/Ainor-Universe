import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaExternalLinkAlt, FaTimes, FaArrowRight, FaWhatsapp, FaRocket, FaStar, FaEye
} from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import SEOText from '../components/seo/SEOText';
import {
  PageShell, PageHero, SectionLabel, GradientWord, ease,
} from '../components/layout/PageShell';
import { projects, categories } from '../data/projectsData';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const stats = [
    { value: 50, suffix: '+', label: 'Projects' },
    { value: 100, suffix: '%', label: 'Satisfaction' },
    { value: 6, suffix: '+', label: 'Industries' },
    { value: 10, suffix: '+', label: 'Technologies' },
  ];

  const processSteps = [
    { step: '01', title: 'Discover', desc: 'Understanding your vision, goals, and requirements', icon: '🔍' },
    { step: '02', title: 'Design', desc: 'Creating beautiful, user-centered experiences', icon: '🎨' },
    { step: '03', title: 'Develop', desc: 'Building with clean code and best practices', icon: '💻' },
    { step: '04', title: 'Deploy', desc: 'Launching and supporting your success', icon: '🚀' },
  ];

  return (
    <>
      <SEOHead
        title="Portfolio | 50+ Projects | Sttrika, GoForCab, ExamBulletin Case Studies | AINOR"
        description="🚀 Explore 50+ successful projects with real results. Sttrika: ₹10L revenue. GoForCab: 10K rides. ExamBulletin: 100K visitors. View case studies & start your project!"
        canonicalUrl="https://myainor.com/portfolio"
      />

      <PageShell>
        <PageHero
          badge="Our Work"
          bgWord="WORK"
          title={<>Crafting digital{' '}<GradientWord>experiences.</GradientWord></>}
          subtitle="From startups to enterprises, explore how we've helped businesses transform their digital presence and achieve remarkable results."
          stats={stats}
        />

        {/* Projects grid */}
        <section className="relative bg-[#f5f5f5] py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={1} title="Selected Projects" />

            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button key={category.id} onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    selectedCategory === category.id
                      ? 'bg-[#111318] text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}>
                  <span>{category.icon}</span><span>{category.name}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={selectedCategory}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }} layout
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredProjects.map((project, idx) => (
                  <motion.div key={project.id} layout
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.06, ease }}
                    onClick={() => setSelectedProject(project)}
                    className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all cursor-pointer h-full flex flex-col">
                    <div className="aspect-video overflow-hidden relative">
                      <img src={project.image} alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.button whileHover={{ scale: 1.1 }}
                          className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-gray-800 shadow-lg"
                          onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}>
                          <FaEye />
                        </motion.button>
                        <motion.a whileHover={{ scale: 1.1 }} href={project.link} target="_blank" rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-11 h-11 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg">
                          <FaExternalLinkAlt />
                        </motion.a>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                          {categories.find(c => c.id === project.category)?.name}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-bold text-xl mb-1 text-gray-900 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">{project.shortDesc}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 4).map((tech, tidx) => (
                          <span key={tidx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-lg">{tech}</span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-lg">+{project.technologies.length - 4}</span>
                        )}
                      </div>
                      <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-100">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <FaStar /><span className="font-bold text-sm">{project.stats.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">Click to view details</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Process */}
        <section className="relative bg-white py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={2} title="Our Approach" />
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease }}
              className="text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] tracking-tight text-gray-900 mb-10">
              How we deliver{' '}<GradientWord>success.</GradientWord>
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-3">
              {processSteps.map((item, idx) => (
                <motion.div key={idx}
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08, ease }}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">{item.step}</span>
                  <h3 className="font-bold text-lg mt-3 mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="relative bg-[#f5f5f5] py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={3} title="Technologies We Master" />
            <TechGrid />
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-white py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
            <div className="relative rounded-[2rem] bg-[#111318] p-10 md:p-14 text-center text-white overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-pink-600/30 rounded-full blur-3xl" />
              <div className="relative z-10">
                <FaRocket className="text-4xl mx-auto mb-6 text-indigo-400" />
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Ready to Start Your Project?</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                  Let's discuss your ideas and turn them into reality. Your success story could be next.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20to%20discuss%20a%20project."
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 h-12 rounded-xl font-bold text-sm transition-colors">
                    <FaWhatsapp className="text-lg" /> Let's Talk
                  </a>
                  <Link to="/pricing"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-7 h-12 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors">
                    View Pricing <FaArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>

        <SEOText page="portfolio" />
      </PageShell>
    </>
  );
};

// Project modal
const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}>
      <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <img src={project.image} alt={project.title} className="w-full h-72 object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30`} />
          <button onClick={onClose}
            className="absolute top-4 right-4 w-11 h-11 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
            <FaTimes className="text-gray-800" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className={`text-sm font-bold px-4 py-1.5 rounded-full bg-gradient-to-r ${project.color} text-white`}>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <h2 className="text-3xl font-black tracking-tight mb-2 text-gray-900">{project.title}</h2>
          <p className="text-gray-500 mb-6">{project.description}</p>
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-2xl font-black text-indigo-600">{value}</div>
                <div className="text-sm text-gray-500 capitalize">{key}</div>
              </div>
            ))}
          </div>
          <h3 className="font-bold mb-3 text-gray-900">Key Features</h3>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                <FaRocket className="text-indigo-600" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          <h3 className="font-bold mb-3 text-gray-900">Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium">{tech}</span>
            ))}
          </div>
          <div className="flex gap-3">
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#111318] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors">
              Visit Project <FaExternalLinkAlt className="text-sm" />
            </a>
            <a href={`https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20a%20similar%20project%20to%20${encodeURIComponent(project.title)}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-green-600 transition-colors">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Tech grid
const TechGrid = () => {
  const technologies = [
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Next.js', icon: '▲', category: 'Framework' },
    { name: 'Node.js', icon: '💚', category: 'Backend' },
    { name: 'React Native', icon: '📱', category: 'Mobile' },
    { name: 'Flutter', icon: '🦋', category: 'Mobile' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'Firebase', icon: '🔥', category: 'Platform' },
    { name: 'TailwindCSS', icon: '🎨', category: 'Styling' },
    { name: 'TypeScript', icon: '📘', category: 'Language' },
    { name: 'Python', icon: '🐍', category: 'Language' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
  ];

  return (
    <div className="flex flex-wrap gap-2.5">
      {technologies.map((tech, idx) => (
        <motion.div key={idx}
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ delay: idx * 0.04, ease }}
          className="flex items-center gap-3 bg-white border border-gray-200 px-5 py-3 rounded-xl hover:shadow-md hover:border-gray-300 transition-all">
          <span className="text-2xl">{tech.icon}</span>
          <div>
            <span className="font-semibold text-gray-700 block text-sm">{tech.name}</span>
            <span className="text-xs text-gray-400">{tech.category}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioPage;
