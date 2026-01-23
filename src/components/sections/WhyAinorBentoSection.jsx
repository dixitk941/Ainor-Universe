import React from 'react';
import { motion } from 'framer-motion';
import { FaCreditCard, FaBolt, FaChartLine, FaUsers, FaCode } from 'react-icons/fa';
import TiltCard from '../ui/TiltCard';
import { FadeUp, StaggerContainer, StaggerItem, AnimatedCounter, BlurReveal } from '../ui/AnimationComponents';
import { SpotlightCard } from '../ui/ScrollAnimations';

const WhyAinorBentoSection = () => {
  return (
    <section className="pt-10" id="why-ainor">
      <FadeUp>
        <h2 className="text-3xl font-bold tracking-tight mb-8 px-2">Why Ainor?</h2>
      </FadeUp>

      <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {/* Feature 1: Subscription (Large) */}
        <StaggerItem className="md:col-span-2">
          <TiltCard tiltAmount={5} scale={1.01} glareMaxOpacity={0.08}>
            <SpotlightCard className="h-full">
              <div className="bg-white rounded-3xl p-8 shadow-soft relative overflow-hidden h-full flex flex-col justify-between">
                <div className="relative z-10 max-w-sm">
                  <motion.div
                    initial={{ rotate: -10, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white mb-4"
                  >
                    <FaCreditCard />
                  </motion.div>
                  <BlurReveal delay={0.1}>
                    <h3 className="text-2xl font-bold mb-2">Subscription-based Model</h3>
                  </BlurReveal>
                  <BlurReveal delay={0.2}>
                    <p className="text-gray-500">
                      No hourly billing or fixed quotes. Pay a flat monthly fee and get unlimited requests.
                    </p>
                  </BlurReveal>
                </div>
                
                {/* Animated Background */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 bg-gradient-radial from-blue-400 via-gray-100 to-transparent" 
                />
                <motion.div 
                  animate={{ 
                    x: [0, 10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-50" 
                />
              </div>
            </SpotlightCard>
          </TiltCard>
        </StaggerItem>

        {/* Feature 2: Speed */}
        <StaggerItem>
          <TiltCard tiltAmount={10} scale={1.02} glareMaxOpacity={0.1}>
            <SpotlightCard className="h-full">
              <div className="bg-white rounded-3xl p-6 shadow-soft h-full flex flex-col justify-between border border-gray-50">
                <div className="flex justify-between items-start">
                  <motion.div
                    animate={{ 
                      boxShadow: ['0 0 0 0 rgba(234, 179, 8, 0)', '0 0 0 8px rgba(234, 179, 8, 0.2)', '0 0 0 0 rgba(234, 179, 8, 0)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center"
                  >
                    <FaBolt />
                  </motion.div>
                  <motion.span 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.3 }}
                    className="text-xs font-bold bg-yellow-100 text-yellow-800 px-2 py-1 rounded"
                  >
                    Fast
                  </motion.span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Lightning Fast</h3>
                  <p className="text-sm text-gray-500">
                    Initial designs in <AnimatedCounter value={48} suffix=" hours" className="font-bold text-yellow-600" />. Updates every 2 days.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </TiltCard>
        </StaggerItem>

        {/* Feature 3: Scalable */}
        <StaggerItem>
          <TiltCard tiltAmount={10} scale={1.02} glareMaxOpacity={0.1}>
            <SpotlightCard className="h-full">
              <div className="bg-white rounded-3xl p-6 shadow-soft h-full flex flex-col justify-between border border-gray-50">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4"
                >
                  <FaChartLine />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Scalable Solutions</h3>
                  <p className="text-sm text-gray-500">
                    Built to grow with your business from day one.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </TiltCard>
        </StaggerItem>

        {/* Feature 4: Team (Large) */}
        <StaggerItem className="md:col-span-2">
          <TiltCard tiltAmount={5} scale={1.01} glareMaxOpacity={0.05}>
            <div className="bg-[#111318] rounded-3xl p-8 shadow-soft relative overflow-hidden h-full text-white flex flex-col justify-between">
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="w-10 h-10 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center text-white mb-4"
                >
                  <FaUsers />
                </motion.div>
                <BlurReveal delay={0.1}>
                  <h3 className="text-2xl font-bold mb-2">Your Dedicated Tech Team</h3>
                </BlurReveal>
                <BlurReveal delay={0.2}>
                  <p className="text-gray-400 max-w-md">
                    Senior developers and designers at your fingertips. It's like having an in-house team without the hiring headaches.
                  </p>
                </BlurReveal>
              </div>
              
              <motion.div 
                animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-0 right-0 p-8 opacity-20"
              >
                <FaCode className="text-[120px]" />
              </motion.div>
            </div>
          </TiltCard>
        </StaggerItem>

        {/* Feature 5: Predictable Costs */}
        <StaggerItem>
          <TiltCard tiltAmount={10} scale={1.02} glareMaxOpacity={0.15}>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 shadow-soft h-full flex flex-col justify-between text-white">
              <motion.div
                animate={{ 
                  boxShadow: ['0 0 0 0 rgba(255, 255, 255, 0)', '0 0 0 8px rgba(255, 255, 255, 0.1)', '0 0 0 0 rgba(255, 255, 255, 0)']
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center mb-4"
              >
                <FaCreditCard />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold mb-1">Predictable Costs</h3>
                <p className="text-sm text-white/80">
                  Fixed monthly payments. No surprise expenses or hidden fees.
                </p>
              </div>
            </div>
          </TiltCard>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
};

export default WhyAinorBentoSection;
