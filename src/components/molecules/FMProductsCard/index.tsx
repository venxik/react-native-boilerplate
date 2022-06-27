import React from 'react';
import { Text, Box, Image, Pressable, HStack } from 'native-base';
import { heightPercentageToDP } from '@utils';

type ProductsCardProps = {
  image: string;
  name: string;
  desc: string;
  onPress?: () => void;
};

export default function FMProductsCard({ desc, image, name, onPress }: ProductsCardProps) {
  const heightBox = heightPercentageToDP('10');
  return (
    <Pressable
      onPress={onPress}
      borderWidth="1"
      mb={'4'}
      borderRadius={'xl'}
      p={'4'}
      testID={'FMProductsCard'}
    >
      <Box height={heightBox} borderRadius="xl" mb={4}>
        <HStack>
          <Image
            width={heightBox}
            height={heightBox}
            resizeMode="contain"
            source={{ uri: image }}
            alt="image"
          />
          <Box justifyContent="center" pl={5} flex={1}>
            <Text color="manta.100" fontFamily="mono" fontWeight={800} fontSize="xs">
              {name}
            </Text>
            <Text
              color="seaflor.100"
              fontFamily="heading"
              fontWeight={600}
              fontSize="md"
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              {desc}
            </Text>
          </Box>
        </HStack>
      </Box>
    </Pressable>
  );
}
