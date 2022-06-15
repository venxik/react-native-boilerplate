import React from 'react';
import { render } from '@testing-library/react-native';
import FMProductsCard from '../FMProductsCard';
import { wrapper } from '../../../__mocks__/wrapper';

describe('FMProductsCard screen', () => {
  it('Render FMProductsCard correctly', () => {
    const mockedFn = jest.fn();
    const screen = render(
      <FMProductsCard
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
