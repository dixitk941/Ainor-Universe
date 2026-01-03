import React from 'react';
import { motion } from 'framer-motion';
import { FaClipboardList, FaTasks, FaRocket } from 'react-icons/fa';
import TiltCard from '../ui/TiltCard';
import { FadeUp, StaggerContainer, StaggerItem, MaskReveal, DrawLine } from '../ui/AnimationComponents';
import { SpotlightCard } from '../ui/ScrollAnimations';

const steps = [
  {
    id: 1,
    icon: <FaClipboardList className="text-gray-300 text-5xl" />,
    title: 'Subscribe to a plan',
    description: 'Choose a monthly plan that fits your needs. No contracts, cancel anytime.',
  },
  {
    id: 2,
    icon: <FaTasks className="text-gray-300 text-5xl" />,
    title: 'Request as you go',
    description: "Add unlimited requests to your board. We'll work on them one by one.",
  },
  {
    id: 3,
    icon: <FaRocket className="text-gray-300 text-5xl" />,
    title: 'Receive delivery',
    description: 'Get regular updates and fast turnarounds. Approve and move to the next task.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="pt-10" id="process">
      <FadeUp>
        <h2 className="text-3xl font-bold tracking-tight mb-8 px-2 text-center md:text-left">
          How It Works
        </h2>
      </FadeUp>

      {/* Connecting Line */}
      <div className="hidden md:block relative mb-4">
        <DrawLine className="absolute top-1/2 left-0 right-0" />
      </div>

      <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <StaggerItem key={step.id}>
            <TiltCard tiltAmount={8} scale={1.02} glareMaxOpacity={0.1}>
              <SpotlightCard>
                <div className="bg-white rounded-2xl p-6 shadow-soft relative h-full">
                  {/* Step Number Badge */}
                  <motion.span
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: index * 0.15 + 0.2, stiffness: 200 }}
                    className="absolute -top-3 -left-3 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg border-2 border-[#F5F5F5] z-10"
                  >
                    {step.id}
                  </motion.span>

                  {/* Icon Area with Animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                    className="h-40 bg-gray-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative"
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -8, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 3 + index * 0.5, 
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      {step.icon}
                    </motion.div>
                    
                    {/* Subtle pulse background */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.1, 0.2, 0.1]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl"
                    />
                  </motion.div>

                  {/* Content */}
                  <MaskReveal>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  </MaskReveal>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                    className="text-sm text-gray-500"
                  >
                    {step.description}
                  </motion.p>
                </div>
              </SpotlightCard>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};

export default HowItWorksSection;
