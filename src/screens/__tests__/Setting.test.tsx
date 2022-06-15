import React from 'react';
import { render } from '../../__mocks__/wrapper';
import Setting from '../Setting';
import { wrapper } from '../../__mocks__/wrapper';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

describe('Setting screen', () => {
  it('Render Setting screen', () => {
    const setting = render(<Setting />, { wrapper });
    expect(setting).toBeTruthy();
  });
});
