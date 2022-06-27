import React from 'react';

import { FATextArea } from '@components/atoms';
import { render, fireEvent } from '@mocks';

describe('FATextArea', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FATextArea />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with children prop', () => {
    const container = render(<FATextArea numberOfLines={4} placeholder="Test Input" />);

    expect(container).toBeTruthy();
  });

  it('should can change text textArea', () => {
    const { getByTestId } = render(
      <FATextArea testID="test-textArea" numberOfLines={4} placeholder="Test TextArea" />,
    );

    const textAreaEmail = getByTestId('test-textArea');
    expect(textAreaEmail).toBeTruthy();
    fireEvent.changeText(textAreaEmail, 'email@testing.com');
  });
});
