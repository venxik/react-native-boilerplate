import React from 'react';

import { FASelect } from '@components/atoms';
import { render } from '@mocks';

describe('FASelect', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FASelect data={[]} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const { getByTestId } = render(
      <FASelect
        testID="test-select"
        data={[
          {
            value: '1',
            label: 'UX Research',
          },
          {
            value: '2',
            label: 'Web Development',
          },
          {
            value: '1',
            label: 'UX Research',
          },
        ]}
      />,
    );

    expect(getByTestId('test-select')).toBeTruthy();
  });
});
