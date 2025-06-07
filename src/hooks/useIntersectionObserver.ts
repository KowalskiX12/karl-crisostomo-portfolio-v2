import type { sectionType } from '@/context/NavigationContext';
import { useEffect, useRef } from 'react';

interface IUseIntersectionObserverProps {
  setSectionView: (section: sectionType) => void;
}

const useIntersectionObserver = ({ setSectionView }: IUseIntersectionObserverProps) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionView(entry.target.id as sectionType);
          }
        });
      },
      { threshold: 0.5 },
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setSectionView]);
};

export default useIntersectionObserver;
