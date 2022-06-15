import React from 'react';
import { render, fireEvent, waitFor } from '../../__mocks__/wrapper';
import Home from '../Home';

describe('Home screen', () => {
  it('renders Home screen correctly', async () => {
    const screen = render(<Home />);
    await waitFor(() => expect(screen).toBeDefined());
  });

  it('should show text input', async () => {
    const { getByTestId } = render(<Home />);
    fireEvent.press(getByTestId('btn-products'));
    // await waitFor(() => expect(getByTestId('input-products')).toBeDefined());
    expect(getByTestId('input-products')).toBeDefined();
  });
});
