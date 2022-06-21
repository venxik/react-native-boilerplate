import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import analytics from '@react-native-firebase/analytics';
import { getRemoteValue, refreshConfig } from '../../utils';

export const useABTesting = () => {
  //STATE
  const [experiment, setExperiment] = useState<boolean>(true);
  const [color, setColor] = useState<string>('');
  const navigation = useNavigation();
  const [variant] = useState({
    one: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
    two: 'https://img.beritasatu.com/cache/investor/798x449-2/1597369327.jpg',
  });

  //HOOKS
  const onFetch = async () => {
    refreshConfig();
    const isexperiment = getRemoteValue('experiment_1');
    await analytics().logEvent('card_view', {
      experiment_1: isexperiment,
    });
    setExperiment(isexperiment === 'true');
    setColor(isexperiment === 'true' ? 'blue' : 'violet');
  };
  useEffect(() => {
    onFetch();
  }, []);

  return {
    experiment,
    color,
    navigation,
    variant,
    onFetch,
  };
};
