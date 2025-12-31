import React from 'react';
import { motion } from 'framer-motion';

// Floating 3D-like animated elements for visual interest
// These appear on the right side of sections like in magier.com

const FloatingElements = ({ variant = 'default' }) => {
  
  // ==========================================
  // VARIANT 1: Tasks & Documents (For Hero/Subscription sections)
  // ==========================================
  if (variant === 'tasks') {
    return (
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[500px] pointer-events-none hidden lg:block">
        {/* Main Document Card */}
        <motion.div
          className="absolute top-10 right-20 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 p-4"
          initial={{ opacity: 0, y: 50, rotateY: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateY: -5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          animate={{ y: [0, -10, 0] }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Design Brief</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-gray-100 rounded-full w-full"></div>
            <div className="h-2 bg-gray-100 rounded-full w-4/5"></div>
            <div className="h-2 bg-gray-100 rounded-full w-3/5"></div>
          </div>
        </motion.div>

        {/* To-Do Card */}
        <motion.div
          className="absolute top-40 right-0 w-40 bg-white rounded-2xl shadow-xl border border-gray-100 p-4"
          initial={{ opacity: 0, x: 50, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          animate={{ y: [0, 8, 0], rotate: [2, -2, 2] }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">To do</span>
            <span className="px-2 py-0.5 bg-red-100 text-red-500 text-xs font-bold rounded-full">3</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-indigo-500 rounded"></div>
              <div className="h-2 bg-gray-100 rounded-full flex-1"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-indigo-500 rounded bg-indigo-500 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="h-2 bg-gray-100 rounded-full flex-1"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
              <div className="h-2 bg-gray-100 rounded-full flex-1"></div>
            </div>
          </div>
        </motion.div>

        {/* Floating Document Layers */}
        <motion.div
          className="absolute bottom-20 right-16 w-36 h-24 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Layer 3 (back) */}
          <motion.div 
            className="absolute w-full h-full bg-indigo-50 rounded-xl shadow-sm border border-indigo-100"
            style={{ transform: 'translateZ(-20px) translateY(-8px) translateX(8px)' }}
            animate={{ y: [-8, -12, -8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="p-3 space-y-1.5">
              <div className="h-1.5 bg-indigo-200/50 rounded-full w-full"></div>
              <div className="h-1.5 bg-indigo-200/50 rounded-full w-4/5"></div>
            </div>
          </motion.div>
          
          {/* Layer 2 (middle) */}
          <motion.div 
            className="absolute w-full h-full bg-indigo-100/80 rounded-xl shadow-md border border-indigo-200"
            style={{ transform: 'translateZ(-10px) translateY(-4px) translateX(4px)' }}
            animate={{ y: [-4, -8, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          >
            <div className="p-3 space-y-1.5">
              <div className="h-1.5 bg-indigo-300/50 rounded-full w-full"></div>
              <div className="h-1.5 bg-indigo-300/50 rounded-full w-3/4"></div>
            </div>
          </motion.div>
          
          {/* Layer 1 (front) */}
          <motion.div 
            className="absolute w-full h-full bg-white rounded-xl shadow-lg border border-gray-100"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <div className="p-3 space-y-1.5">
              <div className="h-1.5 bg-gray-200 rounded-full w-full"></div>
              <div className="h-1.5 bg-gray-200 rounded-full w-4/5"></div>
              <div className="h-1.5 bg-gray-200 rounded-full w-2/3"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Small floating icons */}
        <motion.div
          className="absolute top-32 right-48 w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shadow-lg"
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-4 w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shadow-lg"
          animate={{ y: [0, 6, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </motion.div>
      </div>
    );
  }

  // ==========================================
  // VARIANT 2: Services/Features (Code & Design)
  // ==========================================
  if (variant === 'services') {
    return (
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[450px] pointer-events-none hidden lg:block">
        {/* Browser Window */}
        <motion.div
          className="absolute top-0 right-10 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          animate={{ y: [0, -8, 0] }}
        >
          {/* Browser Header */}
          <div className="bg-gray-50 px-3 py-2 flex items-center gap-1.5 border-b border-gray-100">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            <div className="ml-2 flex-1 h-4 bg-gray-200 rounded-full"></div>
          </div>
          {/* Browser Content */}
          <div className="p-3">
            <div className="h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg mb-2"></div>
            <div className="space-y-1.5">
              <div className="h-2 bg-gray-100 rounded-full w-full"></div>
              <div className="h-2 bg-gray-100 rounded-full w-3/4"></div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Phone */}
        <motion.div
          className="absolute top-28 right-0 w-28 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, x: 30, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: -5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          animate={{ y: [0, 6, 0], rotate: [3, -3, 3] }}
        >
          {/* Phone Notch */}
          <div className="h-5 bg-gray-50 flex justify-center items-end pb-1">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full"></div>
          </div>
          {/* Phone Content */}
          <div className="p-2">
            <div className="h-32 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl mb-2"></div>
            <div className="flex gap-1">
              <div className="flex-1 h-6 bg-indigo-500 rounded-lg"></div>
              <div className="flex-1 h-6 bg-gray-100 rounded-lg"></div>
            </div>
          </div>
          {/* Phone Home Indicator */}
          <div className="h-5 flex justify-center items-center">
            <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </motion.div>

        {/* Code Snippet */}
        <motion.div
          className="absolute bottom-20 right-14 w-44 bg-gray-900 rounded-xl shadow-xl p-3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          animate={{ y: [0, -6, 0] }}
        >
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
          <div className="space-y-1 font-mono text-[10px]">
            <div className="flex">
              <span className="text-purple-400">const</span>
              <span className="text-blue-300 ml-1">website</span>
              <span className="text-white ml-1">=</span>
            </div>
            <div className="flex pl-2">
              <span className="text-yellow-300">{"{"}</span>
              <span className="text-green-300 ml-1">fast:</span>
              <span className="text-orange-300 ml-1">true</span>
            </div>
            <div className="flex pl-2">
              <span className="text-green-300">modern:</span>
              <span className="text-orange-300 ml-1">true</span>
              <span className="text-yellow-300">{"}"}</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Badge */}
        <motion.div
          className="absolute top-48 right-52 px-3 py-1.5 bg-indigo-500 text-white text-xs font-medium rounded-full shadow-lg"
          animate={{ y: [0, -5, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ✨ Premium
        </motion.div>
      </div>
    );
  }

  // ==========================================
  // VARIANT 3: Work/Portfolio
  // ==========================================
  if (variant === 'portfolio') {
    return (
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[400px] pointer-events-none hidden lg:block">
        {/* Project Cards Stack */}
        <motion.div className="absolute top-10 right-10 w-48">
          {/* Card 3 */}
          <motion.div
            className="absolute w-full h-32 bg-purple-100 rounded-2xl shadow-md"
            style={{ transform: 'translateY(-16px) translateX(16px) rotate(6deg)' }}
            animate={{ rotate: [6, 8, 6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Card 2 */}
          <motion.div
            className="absolute w-full h-32 bg-indigo-100 rounded-2xl shadow-lg"
            style={{ transform: 'translateY(-8px) translateX(8px) rotate(3deg)' }}
            animate={{ rotate: [3, 5, 3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />
          {/* Card 1 (front) */}
          <motion.div
            className="relative w-full h-32 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="h-20 bg-gradient-to-br from-indigo-500 to-purple-500"></div>
            <div className="p-2">
              <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          className="absolute bottom-16 right-4 w-36 bg-white rounded-2xl shadow-xl border border-gray-100 p-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          animate={{ y: [0, 5, 0] }}
        >
          <div className="text-3xl font-bold text-indigo-500 mb-1">50+</div>
          <div className="text-xs text-gray-500">Projects Delivered</div>
          <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-indigo-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '85%' }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        {/* Rating Badge */}
        <motion.div
          className="absolute top-40 right-0 px-4 py-2 bg-yellow-100 rounded-xl shadow-lg"
          animate={{ x: [0, -5, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★★★★★</span>
          </div>
          <div className="text-xs text-yellow-700 font-medium">5.0 Rating</div>
        </motion.div>
      </div>
    );
  }

  // ==========================================
  // DEFAULT: Simple floating elements
  // ==========================================
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[350px] pointer-events-none hidden lg:block">
      <motion.div
        className="absolute top-10 right-10 w-16 h-16 bg-indigo-100 rounded-2xl shadow-lg"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-32 right-24 w-12 h-12 bg-purple-100 rounded-xl shadow-lg"
        animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-20 right-16 w-20 h-20 bg-indigo-50 rounded-2xl shadow-lg"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
};

export default FloatingElements;
