import React from 'react';
import { render, fireEvent } from '../../__mocks__/wrapper';
import Home from '../Home';

describe('Home screen', () => {
  it('renders Home screen correctly', () => {
    const splash = render(<Home />);
    expect(splash).toBeDefined();
  });

  it('should show text input', () => {
    const { getByTestId } = render(<Home />);
    fireEvent.press(getByTestId('btn-products'));
    expect(getByTestId('input-products')).toBeDefined();
  });
});
