import React from 'react';
import { act, cleanup, render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router, {
  HomeTabNavigator,
  SettingStackNavigator,
  SignInStackNavigator,
  SplashNavigator,
} from '../index';
import { wrapper } from '../../__mocks__/wrapper';

afterEach(cleanup);

describe('Navigation Test', () => {
  it('renders the SplashNavigator', async () => {
    const { toJSON } = render(
      <NavigationContainer>
        <SplashNavigator />
      </NavigationContainer>,
      { wrapper },
    );
    expect(toJSON).toBeDefined();
  });

  it('renders the SignInNavigator', async () => {
    const { toJSON } = render(
      <NavigationContainer>
        <SignInStackNavigator />
      </NavigationContainer>,
      { wrapper },
    );
    expect(toJSON).toBeDefined();
  });

  it('renders the SettingNavigator', async () => {
    const { toJSON } = render(
      <NavigationContainer>
        <SettingStackNavigator />
      </NavigationContainer>,
      { wrapper },
    );
    expect(toJSON).toBeDefined();
  });

  it('renders the HomeTabNavigator', async () => {
    const { toJSON } = render(
      <NavigationContainer>
        <HomeTabNavigator />
      </NavigationContainer>,
      { wrapper },
    );
    expect(toJSON).toBeDefined();
  });

  it('should render SignIn after SplashScreen', () => {
    jest.useFakeTimers();
    const { toJSON } = render(<Router />, { wrapper });
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(toJSON).toBeDefined();
  });
});
