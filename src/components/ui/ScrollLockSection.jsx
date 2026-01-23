import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ScrollLockSection - Locks page scroll while section content scrolls
 * When user reaches this section, page scroll stops and inner content scrolls
 * Page scroll resumes after section content is fully scrolled
 */
const ScrollLockSection = ({ 
  children,
  items = [],
  renderItem,
  renderStickyContent,
  className = '',
  stickyPosition = 'left', // 'left' or 'right'
  bgColor = 'bg-white',
  darkMode = false,
}) => {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [hasEnteredFromTop, setHasEnteredFromTop] = useState(false);
  const lastScrollY = useRef(0);
  const isScrolling = useRef(false);

  const totalItems = items.length;

  // Handle wheel events when section is locked
  const handleWheel = useCallback((e) => {
    if (!isLocked) return;

    e.preventDefault();
    
    if (isScrolling.current) return;
    isScrolling.current = true;

    const direction = e.deltaY > 0 ? 1 : -1;
    
    setCurrentIndex(prev => {
      const newIndex = prev + direction;
      
      // If scrolling down and at last item, unlock and continue page scroll
      if (newIndex >= totalItems) {
        setIsLocked(false);
        setHasEnteredFromTop(true);
        setTimeout(() => {
          window.scrollBy({ top: 100, behavior: 'smooth' });
        }, 100);
        return totalItems - 1;
      }
      
      // If scrolling up and at first item, unlock and continue page scroll
      if (newIndex < 0) {
        setIsLocked(false);
        setHasEnteredFromTop(false);
        setTimeout(() => {
          window.scrollBy({ top: -100, behavior: 'smooth' });
        }, 100);
        return 0;
      }
      
      return newIndex;
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  }, [isLocked, totalItems]);

  // Observe section visibility and lock/unlock scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const scrollingDown = window.scrollY > lastScrollY.current;
        lastScrollY.current = window.scrollY;

        // Check if section is centered in viewport
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const isCentered = Math.abs(sectionCenter - viewportCenter) < viewportHeight * 0.3;

        if (entry.isIntersecting && isCentered) {
          // Entering from top (scrolling down)
          if (scrollingDown && !hasEnteredFromTop && currentIndex < totalItems - 1) {
            setIsLocked(true);
          }
          // Entering from bottom (scrolling up)
          if (!scrollingDown && hasEnteredFromTop && currentIndex > 0) {
            setIsLocked(true);
            setCurrentIndex(totalItems - 1);
          }
        }
      },
      { threshold: [0.3, 0.5, 0.7] }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [currentIndex, totalItems, hasEnteredFromTop]);

  // Add/remove wheel event listener based on lock state
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('wheel', handleWheel, { passive: false });
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isLocked, handleWheel]);

  // Handle touch events for mobile
  const touchStartY = useRef(0);
  
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = useCallback((e) => {
    if (!isLocked) return;
    
    e.preventDefault();
    
    if (isScrolling.current) return;
    
    const touchY = e.touches[0].clientY;
    const diff = touchStartY.current - touchY;
    
    if (Math.abs(diff) > 50) {
      isScrolling.current = true;
      const direction = diff > 0 ? 1 : -1;
      
      setCurrentIndex(prev => {
        const newIndex = prev + direction;
        
        if (newIndex >= totalItems) {
          setIsLocked(false);
          setHasEnteredFromTop(true);
          return totalItems - 1;
        }
        
        if (newIndex < 0) {
          setIsLocked(false);
          setHasEnteredFromTop(false);
          return 0;
        }
        
        return newIndex;
      });
      
      touchStartY.current = touchY;
      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    }
  }, [isLocked, totalItems]);

  useEffect(() => {
    if (isLocked) {
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    }
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isLocked, handleTouchMove]);

  return (
    <section 
      ref={sectionRef}
      className={`relative min-h-screen ${bgColor} ${className}`}
      onTouchStart={handleTouchStart}
    >
      <div className="h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${stickyPosition === 'right' ? 'lg:flex-row-reverse' : ''}`}>
            {/* Sticky Content Side */}
            <div className={stickyPosition === 'right' ? 'lg:order-2' : ''}>
              {renderStickyContent ? renderStickyContent(currentIndex, totalItems) : (
                <div className={`p-8 rounded-3xl ${darkMode ? 'bg-white/10 text-white' : 'bg-gray-50'}`}>
                  <h2 className="text-3xl font-bold mb-4">Scroll to explore</h2>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-500'}>
                    Keep scrolling to see more content
                  </p>
                  {/* Progress indicators */}
                  <div className="flex gap-2 mt-8">
                    {items.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          idx === currentIndex 
                            ? `w-8 ${darkMode ? 'bg-white' : 'bg-primary'}` 
                            : `w-4 ${darkMode ? 'bg-white/30' : 'bg-gray-300'}`
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Scrolling Content Side */}
            <div className={`relative h-[70vh] overflow-hidden ${stickyPosition === 'right' ? 'lg:order-1' : ''}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="h-full flex items-center"
                >
                  {renderItem ? renderItem(items[currentIndex], currentIndex) : (
                    <div className={`p-8 rounded-3xl ${darkMode ? 'bg-white/10' : 'bg-white shadow-soft'}`}>
                      {items[currentIndex]?.content || `Item ${currentIndex + 1}`}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Lock indicator */}
      {isLocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <div className={`px-4 py-2 rounded-full text-sm font-medium ${
            darkMode ? 'bg-white/20 text-white' : 'bg-black/80 text-white'
          }`}>
            <span className="flex items-center gap-2">
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                ↕
              </motion.span>
              Scroll to navigate • {currentIndex + 1}/{totalItems}
            </span>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default ScrollLockSection;
