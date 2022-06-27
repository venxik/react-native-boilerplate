import React from 'react';

import { FABadge } from '@components/atoms';
import { render } from '@mocks';

describe('FABadge', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FABadge testID="badge-example">Test</FABadge>);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const { getByText } = render(<FABadge testID="badge-example">Test</FABadge>);

    expect(getByText('Test')).toBeTruthy();
  });
});
