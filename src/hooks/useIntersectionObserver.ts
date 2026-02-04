import { useEffect, useRef, useState, useCallback, RefObject } from 'react';

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Observer une seule fois, puis arrêter
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isVisible };
};

// Hook amélioré pour les animations au scroll avec délais personnalisables
export const useScrollAnimation = (
  animationType: 'fadeIn' | 'fadeInLeft' | 'fadeInRight' | 'scale' = 'fadeIn',
  delay: number = 0,
  threshold: number = 0.15
) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Ajouter un délai avant de déclencher l'animation
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  const animationClass = isVisible
    ? animationType === 'fadeIn'
      ? 'animate-scrollFadeIn'
      : animationType === 'fadeInLeft'
      ? 'animate-scrollFadeInLeft'
      : animationType === 'fadeInRight'
      ? 'animate-scrollFadeInRight'
      : 'animate-scrollScale'
    : 'opacity-0';

  return { ref, isVisible, animationClass };
};

// Hook pour l'effet ripple sur les boutons
export const useRipple = (): [RefObject<HTMLButtonElement | null>, (e: React.MouseEvent) => void] => {
  const ref = useRef<HTMLButtonElement>(null);

  const createRipple = useCallback((event: React.MouseEvent) => {
    const button = ref.current;
    if (!button) return;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple-effect');

    const existingRipple = button.querySelector('.ripple-effect');
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(circle);

    // Nettoyer après l'animation
    setTimeout(() => {
      circle.remove();
    }, 600);
  }, []);

  return [ref, createRipple];
};
