import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollRestorationOptions {
  delay?: number;
  behavior?: 'auto' | 'smooth';
}

export const useScrollRestoration = (options: ScrollRestorationOptions = {}) => {
  const location = useLocation();
  const { delay = 300, behavior = 'smooth' } = options;

  useEffect(() => {
    // Check if we have scroll restoration data in location state
    if (location.state && typeof location.state === 'object') {
      const state = location.state as any;
      
      if (state.scrollPosition !== null && state.scrollPosition !== undefined) {
        // Delay to ensure page is fully rendered
        const timeoutId = setTimeout(() => {
          window.scrollTo({
            top: state.scrollPosition,
            behavior
          });
          
          // Clear the stored position after use
          sessionStorage.removeItem('portfolioScrollPosition');
          sessionStorage.removeItem('portfolioReturnSection');
        }, delay);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [location.state, delay, behavior]);
};

export const storeScrollPosition = (section: string = 'projects') => {
  try {
    sessionStorage.setItem('portfolioScrollPosition', window.scrollY.toString());
    sessionStorage.setItem('portfolioReturnSection', section);
  } catch (error) {
    // Handle cases where sessionStorage is not available
    console.warn('Could not store scroll position:', error);
  }
};

export const getStoredScrollData = () => {
  try {
    const scrollPosition = sessionStorage.getItem('portfolioScrollPosition');
    const returnSection = sessionStorage.getItem('portfolioReturnSection');

    return {
      scrollPosition: scrollPosition ? parseInt(scrollPosition) : null,
      returnSection: returnSection || 'projects'
    };
  } catch (error) {
    // Handle cases where sessionStorage is not available
    console.warn('Could not get stored scroll data:', error);
    return {
      scrollPosition: null,
      returnSection: 'projects'
    };
  }
};

export const clearStoredScrollData = () => {
  try {
    sessionStorage.removeItem('portfolioScrollPosition');
    sessionStorage.removeItem('portfolioReturnSection');
  } catch (error) {
    // Handle cases where sessionStorage is not available
    console.warn('Could not clear stored scroll data:', error);
  }
};
