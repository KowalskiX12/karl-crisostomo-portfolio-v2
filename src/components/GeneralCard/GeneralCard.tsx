import { memo } from 'react';
import type { IGeneralCardProps } from './GeneralCard.types';
import styles from './GeneralCard.module.scss';

const GeneralCard = memo<IGeneralCardProps>(({ children }) => (
  <div className={styles.container}>{children}</div>
));

GeneralCard.displayName = 'GeneralCard';

export default GeneralCard;
