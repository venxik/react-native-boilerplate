import React, { useEffect, useState } from 'react';
import { Box, ScrollView, Text } from 'native-base';
import { FMProductsCard } from '@components/molecules';
import { IProductsDetail, useGetProductQuery } from '@services';

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
    <Box flex={1} height={'100%'} testID={'FOProductsSection'}>
      {error ? (
        <Text alignSelf="center" testID="error-text">
          There was an error
        </Text>
      ) : isFetching ? (
        <Text alignSelf="center" testID="txt-loading">
          Loading
        </Text>
      ) : data && data.products.length > 0 ? (
        <ScrollView flex={1} p={'4'}>
          {data?.products?.map((v: IProductsDetail) => (
            <FMProductsCard desc={v.description} name={v.title} image={v.thumbnail} key={v.id} />
          ))}
        </ScrollView>
      ) : (
        <Text alignSelf={'center'} testID="txt-no-data">
          No data
        </Text>
      )}
    </Box>
  );
}
