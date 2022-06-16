import remoteConfig from '@react-native-firebase/remote-config';
import { Box, Button, FlatList, Heading, HStack, Spacer, Text, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';

export default function RemoteConfig() {
  const [config, setConfig] = useState<Array<ObjectConstructor>>([]);
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const fetchRemoteData = async () => {
    try {
      await remoteConfig().setDefaults({
        FONT: 'Raleway',
        IS_DARK: true,
        LANGUAGE: 'id',
        THEME: 'blue',
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
  return (
    <Box style={{ flex: 1 }}>
      <Heading fontSize="xl" p="4" pb="3">
        Remote Config
      </Heading>
      <FlatList
        data={config}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: 'gray.600',
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <VStack>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.key}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                >
                  {item.source}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {item.value}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.key}
      />
      <Button style={{ margin: 20 }} onPress={fetchRemoteData}>
        Fetch
      </Button>
    </Box>
  );
}
