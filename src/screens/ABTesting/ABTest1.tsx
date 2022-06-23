import {
  AspectRatio,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  View,
} from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useABTesting } from './hook';

/**
 * @references https://firebase.google.com/docs/ab-testing/abtest-config
 */
export default function ABTest1() {
  const { experiment, color, navigation, variant, onFetch } = useABTesting();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box mt={5} flex={1} testID="ab-testing-screen">
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          alignSelf={'center'}
          _dark={{
            borderColor: 'coolGray.600',
            backgroundColor: 'gray.700',
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: 'gray.50',
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: experiment ? variant.one : variant.two,
                }}
                alt="image"
              />
            </AspectRatio>
            <Center
              bg={`${color}.500`}
              _dark={{
                bg: `${color}.400`,
              }}
              _text={{
                color: 'warmGray.50',
                fontWeight: '700',
                fontSize: 'xs',
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              PHOTOS
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                The Garden City
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: `${color}.500`,
                }}
                _dark={{
                  color: `${color}.400`,
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                The Silicon Valley of India.
              </Text>
            </Stack>
            <Text fontWeight="400">
              Bengaluru (also called Bangalore) is the center of India's high-tech industry. The
              city is also known for its parks and nightlife.
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight="400"
                >
                  6 mins ago
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
        <View flex={1} padding={5} justifyContent={'center'}>
          <Text fontSize="md" textAlign="center" fontWeight="500" mb="10">
            {experiment ? 'Baseline' : 'Variant A'}
          </Text>
          <Button testID="btn-refresh" onPress={() => onFetch()}>
            Refresh
          </Button>
          <Button mt={5} onPress={() => navigation.goBack()} testID="btn-back">
            Back
          </Button>
        </View>
      </Box>
    </SafeAreaView>
  );
}
