import React from 'react';
import { render } from '@testing-library/react-native';
import { wrapper } from '../../../__mocks__/wrapper';
import FMUsersCard from '../FMUsersCard';

describe('FMUsersCard screen', () => {
  it('Render FMUsersCard correctly', () => {
    const mockedFn = jest.fn();
    const screen = render(
      <FMUsersCard
        desc="testing"
        image="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
        name="Apple"
        key={1}
        onPress={mockedFn}
      />,
      { wrapper },
    );
    expect(screen).toBeTruthy();
  });
});
