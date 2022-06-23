import { Box, Button, FlatList, Heading, HStack, Spacer, Text, VStack } from 'native-base';
import React from 'react';
import { RefreshControl } from 'react-native';
import { useRemoteConfig } from './hook';

export default function RemoteConfig() {
  const { config, refreshing, navigation, onRefresh, fetchRemoteData } = useRemoteConfig();
  return (
    <Box style={{ flex: 1 }} testID="remote-config-screen">
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
        keyExtractor={(item) => item.key as string}
      />
      <Button style={{ marginHorizontal: 20 }} onPress={fetchRemoteData}>
        Fetch
      </Button>
      <Button style={{ margin: 20 }} onPress={() => navigation.goBack()} testID="btn-back">
        Back
      </Button>
    </Box>
  );
}
