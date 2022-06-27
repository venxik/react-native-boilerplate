import React from 'react';

import { FASwitch } from '@components/atoms';
import { render } from '@mocks';

describe('FASwitch', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FASwitch />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const { getByTestId } = render(<FASwitch testID="test-switch" size="md" />);

    expect(getByTestId('test-switch')).toBeTruthy();
  });
});
