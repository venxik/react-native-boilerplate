import React, { useEffect, useState } from 'react';
import { Box, ScrollView, Text } from 'native-base';
import { ProductsCard } from '../../molecules';
import { IProductsDetail, useGetProductQuery } from '../../../services/products';

type IFOProductsSectionProps = {
  query: string;
};

export default function FOProductsSection({ query }: IFOProductsSectionProps) {
  const [filteredSearchQuery, setFilteredSearchQuery] = useState(query);
  const { data, isFetching, error } = useGetProductQuery(filteredSearchQuery);

  useEffect(() => {
    if (query.length === 0 || query.length > 4) {
      setFilteredSearchQuery(query);
    }
  }, [query]);

  return (
    <Box flex={1} height={'100%'}>
      {error ? (
        <Text alignSelf="center">There was an error</Text>
      ) : isFetching ? (
        <Text alignSelf="center">Loading</Text>
      ) : data && data?.products.length > 0 ? (
        <ScrollView flex={1} p={'4'} testID={'scrollview'}>
          {data?.products?.map((v: IProductsDetail) => (
            <ProductsCard desc={v.description} name={v.title} image={v.thumbnail} key={v.id} />
          ))}
        </ScrollView>
      ) : (
        <Text alignSelf={'center'}>No data</Text>
      )}
    </Box>
  );
}
