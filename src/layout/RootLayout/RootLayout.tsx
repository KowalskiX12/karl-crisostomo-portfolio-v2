import { HeaderSection } from '@/components';
import { Outlet } from 'react-router-dom';
import styles from './RootLayout.module.scss';

const RootLayout = () => {
  return (
    <>
      <HeaderSection className={styles.styledHeaderSection} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

RootLayout.displayName = 'RootLayout';

export default RootLayout;
