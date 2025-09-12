import { useEffect, useRef, useState } from 'react';
import particlesConfig from '../config/particles.json';

declare global {
  interface Window {
    particlesJS: any;
  }
}

interface ParticleBackgroundProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
}

export const ParticleBackground = ({ className = '', density = 'medium' }: ParticleBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadParticles = () => {
      if (typeof window !== 'undefined' && containerRef.current && !isLoaded) {
        try {
          // Check if particlesJS is available globally
          if (typeof window.particlesJS === 'undefined') {
            console.error('particles.js not available globally');
            return;
          }
          
          // Adjust particle density based on screen size and prop
          const adjustedConfig = { ...particlesConfig };
          const isMobile = window.innerWidth < 768;
          
          if (isMobile) {
            adjustedConfig.particles.number.value = density === 'high' ? 40 : density === 'medium' ? 30 : 20;
            adjustedConfig.particles.number.density.value_area = 1200;
          } else {
            adjustedConfig.particles.number.value = density === 'high' ? 100 : density === 'medium' ? 80 : 60;
            adjustedConfig.particles.number.density.value_area = 1000;
          }
          
          // Initialize particles
          window.particlesJS.load('particles-container', adjustedConfig, () => {
            console.log('Particles loaded successfully');
            setIsLoaded(true);
          });
        } catch (error) {
          console.error('Error loading particles:', error);
        }
      }
    };

    // Load particles.js script if not already loaded
    const loadScript = () => {
      if (typeof window.particlesJS === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.onload = () => {
          loadParticles();
        };
        script.onerror = () => {
          console.error('Failed to load particles.js from CDN');
        };
        document.head.appendChild(script);
      } else {
        loadParticles();
      }
    };

    loadScript();

    // Handle resize
    const handleResize = () => {
      if (isLoaded) {
        window.particlesJS && window.particlesJS.pJSDom && window.particlesJS.pJSDom[0] && window.particlesJS.pJSDom[0].pJS.fn.particlesRefresh();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded, density]);

  return (
    <div 
      id="particles-container" 
      ref={containerRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};
