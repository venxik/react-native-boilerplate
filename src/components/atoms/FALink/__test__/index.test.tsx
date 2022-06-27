import React from 'react';

import { FALink } from '@components/atoms';
import { render } from '@mocks';

describe('FALink', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FALink testID="link-example">Test</FALink>);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const { getByText } = render(<FALink testID="link-example">Test</FALink>);

    expect(getByText('Test')).toBeTruthy();
  });

});
