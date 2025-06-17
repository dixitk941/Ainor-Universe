import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import AnimatedImage from '../ui/AnimatedImage';
import { BsArrowRightShort } from 'react-icons/bs';

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 overflow-hidden flex items-center pt-20 z-30 digital-rain">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated 3D Shapes */}
        <motion.div 
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-500 opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-1/4 left-1/3 h-60 w-60 rounded-full bg-purple-500 opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 h-40 w-40 rounded-full bg-pink-500 opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, 30, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut"
          }}
        />

        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black/30 to-transparent"></div>
        
        {/* 3D Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTItNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bTItMmgxdjFoLTF2LTF6TTM0IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTItNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bTItMmgxdjFoLTF2LTF6TTQwIDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTItNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 perspective-1000"></div>
        
        {/* 3D Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-white/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center lg:text-left">            <motion.div 
              className="inline-block px-3 py-1 mb-6 rounded-full bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 text-white text-sm font-medium cyber-panel"
              variants={itemVariants}
            >
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
              Digital Innovation Studio
            </motion.div>
              <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight"
              variants={itemVariants}
            >
              We Create <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-3d ">
                Digital Experiences
              </span>
            </motion.h1>
              <motion.p 
              className="mt-6 text-xl text-indigo-100 max-w-lg mx-auto lg:mx-0 opacity-80 glassmorphism-text"
              variants={itemVariants}
            >
              Transforming ideas into cutting-edge digital experiences with futuristic designs and advanced technologies.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >              <Button href="#contact" size="lg" variant="cyber" className="group" is3D={true}>
                Start Your Project
                {/* <BsArrowRightShort className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /> */}
              </Button>
              <Button href="#work" size="lg" variant="neon" className="text-white" is3D={true}>
                View Our Work
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative perspective-1000"
            variants={itemVariants}
          >
            {/* 3D Glowing Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
            
            {/* 3D floating image with glare effect */}            <div className="relative z-10 float">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Digital Experiences"
                className="rounded-2xl shadow-2xl"
                tiltEnable={true}
                glareEnable={true}
                glareMaxOpacity={0.3}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                scale={1.08}
                gyroscope={true}
              />
            </div>
            
            {/* Decorative 3D elements */}
            <motion.div 
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl rotate-12 blur-xl opacity-70"
              animate={{
                rotate: [12, 20, 12],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Floating tech icons */}
            <motion.div
              className="absolute -top-5 -left-5 h-20 w-20 rounded-lg bg-white/10 backdrop-filter backdrop-blur-lg border border-white/20 flex items-center justify-center shadow-xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13c-1.168-.775-2.754-1.253-4.5-1.253-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-5 left-20 h-16 w-16 rounded-lg bg-white/10 backdrop-filter backdrop-blur-lg border border-white/20 flex items-center justify-center shadow-xl"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Clients - with 3D effect */}        <motion.div 
          className="mt-20 pt-10 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-center text-white/60 text-sm mb-6">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {['Google', 'Microsoft', 'Airbnb', 'Uber', 'Amazon'].map((client, index) => (
              <motion.div 
                key={client} 
                className="text-white/60 font-semibold text-xl glassmorphism-ultra px-5 py-3 rounded-lg cyber-panel"
                whileHover={{ 
                  scale: 1.05, 
                  color: "rgba(255, 255, 255, 0.9)",
                  boxShadow: "0 0 15px rgba(99, 102, 241, 0.5), 0 0 30px rgba(99, 102, 241, 0.3)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + (index * 0.1), duration: 0.5 }}
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* 3D Wave Separator */}
      
    </div>
  );
};

export default HeroSection;
