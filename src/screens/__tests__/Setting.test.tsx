import React from 'react';
import { act, render } from '@testing-library/react-native';
import Setting from '../Setting';
import { wrapper } from '../../__mocks__/wrapper';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('Setting screen', () => {
  it('should setting screen can render', () => {
    act(() => jest.advanceTimersByTime(500));
    const setting = render(<Setting />, { wrapper }).toJSON();
    expect(setting).toMatchSnapshot();
  });
});
