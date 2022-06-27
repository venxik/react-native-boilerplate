import React from 'react';

import { FAIcon } from '@components/atoms';
import { render } from '@mocks';

describe('FAIcon', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FAIcon />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const container = render(
      <FAIcon testID="icon-example" name="home" size={30} color={'primary.500'} />,
    );

    expect(container).toBeTruthy();
  });
});
