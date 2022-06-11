import React from 'react';
import { render } from '@testing-library/react-native';
import Setting from '../../src/screens/Setting';

describe('Setting screen', () => {
  it('Render Setting screen', () => {
    const setting = render(<Setting />);
    expect(setting).toBeTruthy();
  });
});
