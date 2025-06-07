import { memo } from 'react';
import type { IChipProps } from './Chips.types';

const Chips = memo<IChipProps>(({ chipItems }) => (
  <div>
    {chipItems.map((chip) => (
      <div key={chip.title}> {chip.title}</div>
    ))}
  </div>
));

Chips.displayName = 'Chips';

export default Chips;
