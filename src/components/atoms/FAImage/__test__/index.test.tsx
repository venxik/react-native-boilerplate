import React from 'react';

import { FAImage } from '@components/atoms';
import { render } from '@mocks';

describe('FAImage', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FAImage />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const container = render(
      <FAImage
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        size="xs"
      />,
    );

    expect(container).toBeTruthy();
  });
});
