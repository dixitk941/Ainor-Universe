import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket } from 'react-icons/fa';
import TiltCard from '../ui/TiltCard';
import { TextReveal, MagneticButton, FloatingElement } from '../ui/AnimationComponents';
import { MorphingBackground, GradientText } from '../ui/ScrollAnimations';
import { useEntranceAnimation } from '../ui/PageEntranceAnimation';

const ModernHeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { triggerAnimation } = useEntranceAnimation();

  // Smooth easing for entrance
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <TiltCard tiltAmount={3} scale={1} glareEnable={false} className="w-full">
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={triggerAnimation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.8, ease: smoothEase, delay: 0.2 }}
        className="bg-white rounded-3xl p-6 md:p-12 shadow-soft relative overflow-hidden"
      >
        {/* Morphing Background */}
        <MorphingBackground />
        
        {/* Decorative Background Blob */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" 
        />
        
        <div className="relative z-10 flex flex-col-reverse lg:flex-row gap-12 items-center">
          {/* Left Content - Slides from LEFT */}
          <motion.div 
            initial={{ x: -120, opacity: 0, filter: 'blur(10px)' }}
            animate={triggerAnimation ? { 
              x: 0, 
              opacity: 1, 
              filter: 'blur(0px)'
            } : { 
              x: -120, 
              opacity: 0, 
              filter: 'blur(10px)'
            }}
            transition={{ duration: 1, ease: smoothEase, delay: 0.3 }}
            className="flex-1 flex flex-col gap-6 text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={triggerAnimation ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
              transition={{ duration: 0.8, ease: smoothEase, delay: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 self-center lg:self-start bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs font-semibold text-gray-600 tracking-wide uppercase">
                  Accepting new clients
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ x: -80, opacity: 0, filter: 'blur(8px)' }}
              animate={triggerAnimation ? { 
                x: 0, 
                opacity: 1, 
                filter: 'blur(0px)'
              } : { 
                x: -80, 
                opacity: 0, 
                filter: 'blur(8px)'
              }}
              transition={{ duration: 1, delay: 0.4, ease: smoothEase }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-[#111318]"
            >
              <TextReveal text="We Build Digital Products That" delay={0.6} />
              {' '}
              <span className="text-primary relative inline-block">
                <GradientText>Scale</GradientText>
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={triggerAnimation ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 1.2, ease: smoothEase }}
                  className="absolute w-full h-2 bottom-0 left-0 text-blue-200 -z-10"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <motion.path
                    d="M0 5 Q 50 10 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    initial={{ pathLength: 0 }}
                    animate={triggerAnimation ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                </motion.svg>
              </span>{' '}
              <TextReveal text="Your Business" delay={0.8} />
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={{ x: -60, opacity: 0, filter: 'blur(6px)' }}
              animate={triggerAnimation ? { 
                x: 0, 
                opacity: 1, 
                filter: 'blur(0px)'
              } : { 
                x: -60, 
                opacity: 0, 
                filter: 'blur(6px)'
              }}
              transition={{ duration: 0.9, delay: 0.6, ease: smoothEase }}
            >
              <p className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                India's first monthly subscription-based development agency. Pause or cancel anytime. No hidden fees, just pure development velocity.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 40, opacity: 0, filter: 'blur(6px)' }}
              animate={triggerAnimation ? { 
                y: 0, 
                opacity: 1, 
                filter: 'blur(0px)'
              } : { 
                y: 40, 
                opacity: 0, 
                filter: 'blur(6px)'
              }}
              transition={{ duration: 0.8, delay: 0.7, ease: smoothEase }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <MagneticButton strength={0.2}>
                <Link
                  to="/pricing"
                  className="bg-black text-white h-12 px-8 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-gray-200"
                >
                  View Plans
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Link
                  to="/contact"
                  className="bg-white border border-gray-200 text-[#111318] h-12 px-8 rounded-xl font-bold flex items-center justify-center transition-all"
                >
                  Book a Call
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={triggerAnimation ? { y: 0, opacity: 0.7 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: smoothEase }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <span className="text-xs font-medium text-gray-400">Trusted by modern companies</span>
              <div className="flex -space-x-2">
                {[200, 300, 400].map((shade, i) => (
                  <motion.div
                    key={shade}
                    initial={{ scale: 0, x: -20 }}
                    animate={triggerAnimation ? { scale: 1, x: 0 } : { scale: 0, x: -20 }}
                    transition={{ delay: 1.1 + i * 0.1, type: 'spring', stiffness: 200 }}
                    className={`w-6 h-6 rounded-full bg-gray-${shade} border-2 border-white`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Abstract UI - Slides from RIGHT */}
          <motion.div
            initial={{ x: 120, opacity: 0, filter: 'blur(10px)', rotateY: -15 }}
            animate={triggerAnimation ? { 
              x: 0, 
              opacity: 1, 
              filter: 'blur(0px)', 
              rotateY: 0 
            } : { 
              x: 120, 
              opacity: 0, 
              filter: 'blur(10px)', 
              rotateY: -15 
            }}
            transition={{ duration: 1.1, delay: 0.35, ease: smoothEase }}
            className="flex-1 w-full max-w-[500px] lg:max-w-none"
            style={{ perspective: '1000px' }}
          >
            <TiltCard tiltAmount={8} scale={1.02} glareMaxOpacity={0.1}>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-100 p-2 shadow-inner relative overflow-hidden">
                {/* Abstract UI Representation */}
                <div className="absolute inset-4 bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">
                  {/* Window Controls */}
                  <div className="h-12 border-b border-gray-100 flex items-center px-4 gap-2">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={triggerAnimation ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 1, type: 'spring' }}
                      className="w-3 h-3 rounded-full bg-red-400" 
                    />
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={triggerAnimation ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 1.1, type: 'spring' }}
                      className="w-3 h-3 rounded-full bg-yellow-400" 
                    />
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={triggerAnimation ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 1.2, type: 'spring' }}
                      className="w-3 h-3 rounded-full bg-green-400" 
                    />
                  </div>
                  
                  {/* Content Area */}
                  <div className="flex-1 p-6 flex flex-col gap-4 bg-slate-50/50">
                    <div className="flex gap-4">
                      {['blue', 'purple', 'green'].map((color, i) => (
                        <motion.div
                          key={color}
                          initial={{ opacity: 0, y: 20 }}
                          animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: 1.4 + i * 0.15, duration: 0.5 }}
                          className={`w-1/3 h-24 bg-${color}-50 rounded-lg`}
                        >
                          <motion.div
                            animate={triggerAnimation ? { 
                              boxShadow: ['0 0 0 0 rgba(99, 102, 241, 0)', '0 0 0 8px rgba(99, 102, 241, 0.1)', '0 0 0 0 rgba(99, 102, 241, 0)']
                            } : {}}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            className="w-full h-full rounded-lg"
                          />
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ delay: 1.8, duration: 0.6 }}
                      className="flex-1 bg-white rounded-lg shadow-sm border border-gray-50 p-4 relative"
                    >
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={triggerAnimation ? { width: '25%' } : { width: 0 }}
                        transition={{ delay: 2, duration: 0.6 }}
                        className="h-4 bg-gray-100 rounded mb-4" 
                      />
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={triggerAnimation ? { width: '100%' } : { width: 0 }}
                        transition={{ delay: 2.2, duration: 0.5 }}
                        className="h-2 bg-gray-50 rounded mb-2" 
                      />
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={triggerAnimation ? { width: '100%' } : { width: 0 }}
                        transition={{ delay: 2.4, duration: 0.5 }}
                        className="h-2 bg-gray-50 rounded mb-2" 
                      />
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={triggerAnimation ? { width: '66%' } : { width: 0 }}
                        transition={{ delay: 2.6, duration: 0.4 }}
                        className="h-2 bg-gray-50 rounded" 
                      />
                      
                      {/* Floating Badge */}
                      <FloatingElement distance={5} duration={2.5}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={triggerAnimation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ delay: 2.8, type: 'spring', stiffness: 200 }}
                          className="absolute bottom-6 right-6 bg-black text-white px-4 py-2 rounded-lg text-xs font-bold shadow-xl flex items-center gap-2"
                        >
                          Ship Faster <FaRocket />
                        </motion.div>
                      </FloatingElement>
                    </motion.div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </motion.section>
    </TiltCard>
  );
};

export default ModernHeroSection;
