import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { wrapper } from '../../__mocks__/wrapper';
import Home from '../Home';

describe('Home screen', () => {
  it('renders Home screen correctly', () => {
    const splash = render(<Home />, { wrapper });
    expect(splash).toBeDefined();
  });

  it('should show text input', () => {
    const { getByTestId } = render(<Home />, { wrapper });
    fireEvent.press(getByTestId('btn-products'));
    expect(getByTestId('input-products')).toBeDefined();
  });
});
