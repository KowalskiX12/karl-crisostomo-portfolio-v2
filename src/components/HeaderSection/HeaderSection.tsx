import { useNavigationContext } from '@/hooks';
import { memo } from 'react';
import type { IHeaderSectionProps } from './HeaderSection.types';
import styles from './HeaderSection.module.scss';
import classNames from 'classnames';

const HeaderSection = memo<IHeaderSectionProps>(({ className }) => {
  const { sectionView } = useNavigationContext();

  return <div className={classNames(styles.container, className)}>{sectionView}</div>;
});

HeaderSection.displayName = 'HeaderSection';

export default HeaderSection;
