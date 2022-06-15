import React from 'react';
import { render } from '../../__mocks__/wrapper';
import Setting from '../Setting';

describe('Setting screen', () => {
  it('Render Setting screen', () => {
    const setting = render(<Setting />);
    expect(setting).toBeTruthy();
  });
});
