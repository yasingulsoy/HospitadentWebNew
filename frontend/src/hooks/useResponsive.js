import { useState, useEffect } from 'react';

/**
 * Responsive design hook
 * Provides breakpoint information and device detection
 */
export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isTouch: false,
    orientation: 'portrait',
    breakpoint: 'xs',
  });

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Breakpoint detection
      let breakpoint = 'xs';
      if (width >= 1536) breakpoint = '2xl';
      else if (width >= 1280) breakpoint = 'xl';
      else if (width >= 1024) breakpoint = 'lg';
      else if (width >= 768) breakpoint = 'md';
      else if (width >= 640) breakpoint = 'sm';
      else if (width >= 475) breakpoint = 'xs';

      // Device type detection
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;
      
      // Touch detection
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Orientation detection
      const orientation = height > width ? 'portrait' : 'landscape';

      setScreenSize({
        width,
        height,
        isMobile,
        isTablet,
        isDesktop,
        isTouch,
        orientation,
        breakpoint,
      });
    };

    // Initial call
    updateScreenSize();

    // Add event listener
    window.addEventListener('resize', updateScreenSize);
    window.addEventListener('orientationchange', updateScreenSize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateScreenSize);
      window.removeEventListener('orientationchange', updateScreenSize);
    };
  }, []);

  return screenSize;
};

/**
 * Hook for conditional rendering based on screen size
 */
export const useBreakpoint = (breakpoint) => {
  const { breakpoint: currentBreakpoint } = useResponsive();
  
  const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  const currentIndex = breakpoints.indexOf(currentBreakpoint);
  const targetIndex = breakpoints.indexOf(breakpoint);
  
  return {
    isAbove: currentIndex > targetIndex,
    isBelow: currentIndex < targetIndex,
    isEqual: currentIndex === targetIndex,
    isAtLeast: currentIndex >= targetIndex,
    isAtMost: currentIndex <= targetIndex,
  };
};

/**
 * Hook for mobile-specific features
 */
export const useMobile = () => {
  const { isMobile, isTouch, orientation } = useResponsive();
  
  return {
    isMobile,
    isTouch,
    isPortrait: orientation === 'portrait',
    isLandscape: orientation === 'landscape',
    // iOS specific
    isIOS: typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent),
    // Android specific
    isAndroid: typeof navigator !== 'undefined' && /Android/.test(navigator.userAgent),
    // Safari specific
    isSafari: typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent),
  };
};

export default useResponsive;
