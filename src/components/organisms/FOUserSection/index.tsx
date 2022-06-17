import React from 'react';
import { Box, ScrollView, Text } from 'native-base';
import { useGetUserListQuery } from '../../../services';
import { FMUsersCard } from '../../molecules';

export default function FOUserSection(): JSX.Element {
  const { isFetching, data, error } = useGetUserListQuery();

  return (
    <Box flex={1} testID={'FOUserSection'}>
      {error && <Text testID="error-text">There was an error</Text>}
      {isFetching && <Text>Loading</Text>}
      {data && (
        <ScrollView flex={1} p={'4'}>
          {data?.users?.map(
            (v: { lastName: string; firstName: string; image: string; id: number }) => (
              <FMUsersCard desc={v.lastName} name={v.firstName} image={v.image} key={v.id} />
            ),
          )}
        </ScrollView>
      )}
    </Box>
  );
}
