import analytics from '@react-native-firebase/analytics';
import { useState } from 'react';

export const useHome = () => {
  // STATE
  const [selectedData, setSelectedData] = useState<'users' | 'products'>('users');

  // HANDLER
  const onTabClick = async (contentType: 'users' | 'products') => {
    await analytics().logEvent('tab_view', {
      tab_name: contentType,
    });
    setSelectedData(contentType);
  };

  // REACT HOOKS

  return { onTabClick, selectedData };
};
