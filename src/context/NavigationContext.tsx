import { createContext, useCallback, useMemo, useState } from 'react';

interface INavigationProviderProps {
  children: React.ReactNode;
}

export type sectionType = 'about' | 'works' | 'projects';

interface NavigationContextType {
  scrollToSection: (sectionId: sectionType) => void;
  sectionView: sectionType | null;
  setSectionView: (section: sectionType) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  scrollToSection: () => undefined,
  sectionView: null,
  setSectionView: () => undefined,
});

export const NavigationProvider = ({ children }: INavigationProviderProps) => {
  const [sectionView, setSectionView] = useState<sectionType | null>(null);

  const scrollToSection = useCallback((sectionId: sectionType) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setSectionView(sectionId);
    }
  }, []);

  const value = useMemo(
    () => ({ scrollToSection, sectionView, setSectionView }),
    [scrollToSection, sectionView],
  );

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
};

export default NavigationContext;
