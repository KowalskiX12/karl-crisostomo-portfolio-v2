import { memo } from 'react';
import type { IProfileSideBar } from './ProfileSideBar.types';
import styles from './ProfileSideBar.module.scss';
import { useNavigationContext } from '@/hooks';
import useWindowResize from '@/hooks/useWindowResize';

const ProfileSideBar = memo<IProfileSideBar>(({ title, subtitle, description }) => {
  const { scrollToSection } = useNavigationContext();
  const { screenSize } = useWindowResize();

  const isMobile = screenSize.width <= 400;

  return (
    <section className={styles.container}>
      <header className={styles.headerContainer}>
        <span className={styles.title}>{title} </span>
        <sub className={styles.subtitle}>{subtitle}</sub>
        <p className={styles.description}>{description}</p>
      </header>

      {/* Navigation */}

      {!isMobile && (
        <nav className={styles.navigationContainer}>
          <span onClick={() => scrollToSection('about')}>About</span>
          <span onClick={() => scrollToSection('works')}>Experience</span>
          <span onClick={() => scrollToSection('projects')}>Projects</span>
        </nav>
      )}

      {/* Footer */}

      <div>footer</div>
    </section>
  );
});
ProfileSideBar.displayName = 'ProfileSideBar';

export default ProfileSideBar;
