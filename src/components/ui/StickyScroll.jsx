import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';

// Helper component for default sticky visual with transforms
const DefaultStickyVisual = ({ smoothProgress }) => {
  const rotateY = useTransform(smoothProgress, [0, 1], [0, -15]);
  const rotateX = useTransform(smoothProgress, [0, 1], [0, 5]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.1, 1]);
  const floatRotate1 = useTransform(smoothProgress, [0, 1], [0, 180]);
  const floatX = useTransform(smoothProgress, [0, 1], [0, 50]);
  const floatRotate2 = useTransform(smoothProgress, [0, 1], [0, -180]);
  const floatY = useTransform(smoothProgress, [0, 1], [0, -50]);

  return (
    <div className="relative">
      <motion.div
        style={{ rotateY, rotateX }}
        className="relative"
      >
        <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-blue-600 p-1">
          <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
            <motion.div style={{ scale }} className="text-8xl">
              🚀
            </motion.div>
          </div>
        </div>
        {/* Animated background elements */}
        <motion.div 
          style={{ rotate: floatRotate1, x: floatX }}
          className="absolute -top-8 -right-8 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"
        />
        <motion.div 
          style={{ rotate: floatRotate2, y: floatY }}
          className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-200 rounded-full blur-2xl opacity-60"
        />
      </motion.div>
    </div>
  );
};

// Helper component for scrolling content with transform
const ScrollingContent = ({ items, smoothProgress }) => {
  const y = useTransform(smoothProgress, [0, 1], ['0%', `-${(items.length - 1) * 100}%`]);
  
  return (
    <motion.div style={{ y }}>
      {items.map((item, idx) => (
        <ScrollItem key={idx} item={item} index={idx} />
      ))}
    </motion.div>
  );
};

/**
 * StickyScrollReveal - Content scrolls on one side while other side stays fixed
 */
export const StickyScrollReveal = ({ 
  items = [], 
  contentPosition = 'right', // 'left' or 'right' - where the scrolling content appears
  stickyContent = null, // Custom sticky content component
  className = ''
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: `${items.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${contentPosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
            {/* Sticky Side */}
            <div className="w-full lg:w-1/2">
              {stickyContent || <DefaultStickyVisual smoothProgress={smoothProgress} />}
            </div>

            {/* Scrolling Content Side */}
            <div className="w-full lg:w-1/2 h-[60vh] lg:h-[80vh] overflow-hidden relative">
              <ScrollingContent items={items} smoothProgress={smoothProgress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrollItem = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="h-[60vh] lg:h-[80vh] flex items-center"
    >
      <motion.div
        initial={{ opacity: 0.3, x: 50 }}
        animate={{ opacity: isInView ? 1 : 0.3, x: isInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="space-y-4 p-6 md:p-8 rounded-3xl bg-white shadow-soft">
          {item.icon && (
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color || 'from-primary to-blue-600'} flex items-center justify-center`}>
              <item.icon className="text-2xl text-white" />
            </div>
          )}
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">
            Step {index + 1}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#111318]">
            {item.title}
          </h3>
          <p className="text-gray-500 leading-relaxed">
            {item.description}
          </p>
          {item.features && (
            <ul className="space-y-2 pt-4">
              {item.features.map((feature, fidx) => (
                <li key={fidx} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Helper component for horizontal scroll transforms
const HorizontalScrollContent = ({ items, smoothProgress }) => {
  const x = useTransform(smoothProgress, [0, 1], ['0%', `-${(items.length - 1) * 100}%`]);
  
  return (
    <motion.div 
      className="flex h-full"
      style={{ x }}
    >
      {items.map((item, idx) => (
        <HorizontalScrollItem key={idx} item={item} index={idx} total={items.length} />
      ))}
    </motion.div>
  );
};

/**
 * HorizontalStickyScroll - Horizontal scroll effect while scrolling vertically
 */
export const HorizontalStickyScroll = ({ 
  items = [],
  className = ''
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: `${items.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full overflow-hidden">
          <HorizontalScrollContent items={items} smoothProgress={smoothProgress} />
        </div>
      </div>
    </div>
  );
};

const HorizontalScrollItem = ({ item, index, total }) => {
  return (
    <div className="min-w-full h-screen flex items-center justify-center px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {item.icon && (
          <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${item.color || 'from-primary to-blue-600'} flex items-center justify-center`}>
            <item.icon className="text-4xl text-white" />
          </div>
        )}
        <span className="text-sm font-semibold text-primary tracking-wider uppercase">
          {index + 1} / {total}
        </span>
        <h3 className="text-3xl md:text-5xl font-bold text-[#111318] mt-4 mb-4">
          {item.title}
        </h3>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          {item.description}
        </p>
      </div>
    </div>
  );
};

// Helper for parallax scroll transforms
const ParallaxLayer = ({ children, progress, speed, direction }) => {
  const y = useTransform(progress, [0, 1], [direction === 'up' ? 0 : -100 * speed, direction === 'up' ? -100 * speed : 0]);
  
  return (
    <motion.div style={{ y }} className="relative">
      {children}
    </motion.div>
  );
};

/**
 * ParallaxStickyScroll - Parallax layers that move at different speeds
 */
export const ParallaxStickyScroll = ({ 
  layers = [], // Array of { content: JSX, speed: number, direction: 'up' | 'down' }
  className = ''
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
    >
      {layers.map((layer, idx) => (
        <ParallaxLayer 
          key={idx} 
          progress={smoothProgress} 
          speed={layer.speed || 1} 
          direction={layer.direction || 'up'}
        >
          {layer.content}
        </ParallaxLayer>
      ))}
    </div>
  );
};

/**
 * NumberCounterScroll - Animated number counter triggered by scroll
 */
export const NumberCounterScroll = ({ 
  items = [], // Array of { value: number, label: string, prefix: string, suffix: string }
  className = ''
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <NumberCounterItem 
            key={idx} 
            item={item} 
            progress={smoothProgress}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
};

const NumberCounterItem = ({ item, progress, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const animatedValue = useTransform(progress, [0, 1], [0, item.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-6 rounded-2xl bg-white shadow-soft"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {item.prefix}
        <motion.span>{Math.round(animatedValue.get())}</motion.span>
        {item.suffix}
      </div>
      <div className="text-sm text-gray-500">{item.label}</div>
    </motion.div>
  );
};

/**
 * StickyTabs - Sticky tab navigation with scroll-linked content
 */
export const StickyTabs = ({ 
  tabs = [], // Array of { id: string, label: string, icon: Component, content: JSX }
  activeTab,
  onTabChange,
  className = ''
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Tab Navigation */}
      <div className="sticky top-20 z-20 bg-white/80 backdrop-blur-md py-4 border-b border-gray-100">
        <div className="flex justify-center gap-2 flex-wrap">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab.icon && <tab.icon />}
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl w-full mx-auto py-8"
        >
          {tabs.find(t => t.id === activeTab)?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Named exports object
const StickyScrollComponents = {
  StickyScrollReveal,
  HorizontalStickyScroll,
  ParallaxStickyScroll,
  NumberCounterScroll,
  StickyTabs
};

export default StickyScrollComponents;
