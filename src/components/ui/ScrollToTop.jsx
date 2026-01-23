import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Automatically scrolls to top when navigating between pages
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo(0, 0);
    
    // Also reset any scroll-locked body styles
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }, [pathname]);

  return null;
};

export default ScrollToTop;
