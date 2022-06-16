import React from 'react';
import App from '../index';
import { render } from '../__mocks__/wrapper';

describe('Testing App', () => {
  test('should render App correctly', () => {
    const rendered = render(<App />);

    expect(rendered).toMatchSnapshot();
  });
});
