import remoteConfig from '@react-native-firebase/remote-config';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

export const useRemoteConfig = () => {
  // STATE
  const [config, setConfig] = useState<
    Array<{ key?: unknown; item?: unknown; source?: unknown; value?: unknown }>
  >([]);
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const navigation = useNavigation();

  //HOOKS
  const fetchRemoteData = async () => {
    try {
      await remoteConfig().setDefaults({
        font: 'Raleway',
        is_dark: true,
        language: 'id',
        theme: 'blue',
      }); // setting default value
      await remoteConfig().fetch(10); // 10 seconds cache
      /**
       * If activated is true, then we can read the data from the server.
       * If the remote data and last fetched data are the same, then activated will be false in android and old values will be returned in iOS.
       */
      const activated = await remoteConfig().fetchAndActivate(); //can read remote data if true
      if (activated || isFetched === false) {
        const values = await remoteConfig().getAll(); //returns all values set in remote
        const configs = [];
        Object.entries(values).forEach(($) => {
          const [key, entry] = $;
          configs.push({ key: key, source: entry.getSource(), value: entry.asString() });
        });
        setConfig(configs);
      }
      setIsFetched(true);
      setRefreshing(false);
    } catch (error) {}
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchRemoteData();
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted && isFetched === false) fetchRemoteData();

    return () => {
      isMounted = false;
    };
  }, [isFetched]);

  return {
    config,
    refreshing,
    navigation,
    onRefresh,
    fetchRemoteData,
  };
};
