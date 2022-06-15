import { render } from '@testing-library/react-native';
import React from 'react';
import App from '../index';

describe('Testing App', () => {
  test('should render App correctly', () => {
    const rendered = render(<App />);

    expect(rendered).toMatchSnapshot();
  });
});
