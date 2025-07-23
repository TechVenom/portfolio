import React, { useEffect } from 'react';
import { useSectionContext } from '../context/SectionContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { navigationMode } = useSectionContext();

  // Apply scroll mode class to html element when navigation mode changes
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (navigationMode === 'scroll') {
      htmlElement.classList.add('scroll-mode');
    } else {
      htmlElement.classList.remove('scroll-mode');
    }

    // Cleanup on unmount
    return () => {
      htmlElement.classList.remove('scroll-mode');
    };
  }, [navigationMode]);

  return (
    <div className="bg-dark-900 relative h-full">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Animated Grid Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }} />
      </div>

      {/* Main Content */}
      <main className="relative z-10 h-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;
