import React from 'react';

import { FASpinner } from '@components/atoms';
import { render } from '@mocks';

describe('FASpinner', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FASpinner>Test</FASpinner>);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const { getByTestId } = render(<FASpinner testID="spinner-example">Test</FASpinner>);

    expect(getByTestId('spinner-example')).toBeTruthy();
  });
});
