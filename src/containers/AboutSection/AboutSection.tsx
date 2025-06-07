import { memo } from 'react';
import styles from './AboutSection.styles.module.scss';

const AboutSection = memo(() => (
  <section className={styles.container}>
    <p className={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure saepe illo ut voluptas?
      Praesentium, tempora aliquam. Eligendi saepe a molestiae laudantium blanditiis in ut quod
      commodi praesentium, ipsa temporibus iusto.
    </p>
  </section>
));

AboutSection.displayName = 'AboutSection';

export default AboutSection;
