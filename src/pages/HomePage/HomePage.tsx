import { ProfileSideBar } from '@/components';
import styles from './HomePage.module.scss';
import { AboutSection } from '@/containers';
import { useNavigationContext } from '@/hooks';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const HomePage = () => {
  const { setSectionView } = useNavigationContext();

  useIntersectionObserver({ setSectionView });

  return (
    <div className={styles.container}>
      <div className={styles.profileSideBarContainer}>
        <ProfileSideBar
          title="Karl Crisostomo"
          subtitle="Front End Developer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae animi molestias fugit, nesciunt reiciendis, est dolorum, recusandae repudiandae vitae quidem mollitia totam ipsa nam debitis eligendi fugiat quos eius!"
        />
      </div>

      <section id="about" data-section>
        <AboutSection />
      </section>
      <section id="works" data-section>
        <AboutSection />
      </section>
      <section id="projects" data-section>
        <AboutSection />
      </section>
    </div>
  );
};

HomePage.displayName = 'HomePage';
export default HomePage;
