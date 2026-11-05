'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed z-40 w-12 h-12 rounded-full bg-primary text-tertiary-fixed-dim border border-tertiary-fixed-dim/40 shadow-xl flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-primary/90 hover:scale-110 active:scale-95 focus:outline-none bottom-[94px] right-[26px] md:bottom-[108px] md:right-[38px] ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
      }`}
    >
      <span className="material-symbols-outlined text-2xl font-bold select-none" data-icon="keyboard_arrow_up">
        keyboard_arrow_up
      </span>
    </button>
  );
}
