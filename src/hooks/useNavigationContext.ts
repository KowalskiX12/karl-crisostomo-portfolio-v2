import NavigationContext from '@/context/NavigationContext';
import { useContext } from 'react';

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};
