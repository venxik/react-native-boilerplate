import { Box, Button, Heading, Input } from 'native-base';
import React, { useState } from 'react';
import { FOProductsSection, FOUserSection } from '../../components';
import { useDebounce } from '../../hooks';
import { useHome } from './hook';

export default function Home(): JSX.Element {
  const { onTabClick, selectedData } = useHome();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  return (
    <Box flex={1} safeAreaTop>
      <Heading px={4}>Home</Heading>
      <Button.Group
        isAttached
        colorScheme="blue"
        mx={{
          base: 'auto',
          md: 0,
        }}
        mb={'4'}
        size="sm"
      >
        <Button
          testID="btn-users"
          variant={selectedData == 'users' ? 'solid' : 'outline'}
          onPress={() => onTabClick('users')}
        >
          Users
        </Button>
        <Button
          testID="btn-products"
          variant={selectedData == 'products' ? 'solid' : 'outline'}
          onPress={() => onTabClick('products')}
        >
          Products
        </Button>
      </Button.Group>
      {selectedData == 'products' && (
        <Input
          value={searchQuery}
          onChangeText={(e) => setSearchQuery(e)}
          testID={'input-products'}
        />
      )}
      <Box flex={1}>
        {selectedData == 'users' ? (
          <FOUserSection />
        ) : (
          <FOProductsSection query={debouncedSearchQuery} />
        )}
      </Box>
    </Box>
  );
}
