"use client";

import { useEffect } from "react";

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Simple smooth scroll fallback
    const smoothScroll = () => {
      const anchors = document.querySelectorAll('a[href^="#"]');
      
      anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
          const target = document.querySelector(href || '');
          
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    };

    smoothScroll();

    // Parallax effect for floating elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      document.querySelectorAll('.floating-phone').forEach(element => {
        (element as HTMLElement).style.transform = `translateY(${rate}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>{children}</>;
};
