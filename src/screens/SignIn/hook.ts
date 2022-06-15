import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';

type NavigationProp = NativeStackNavigationProp<
  ReactNavigation.SignInStackParamList,
  'SignInScreen'
>;

export const useSignIn = () => {
  // STATE
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const navigation = useNavigation<NavigationProp>();
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 30,
  });

  // HANDLER
  const onToggleHidePassword = () => {
    crashlytics().log('call onToggleHidePassword.');
    setHidePassword(!hidePassword);
  };

  const goToHome = () => {
    crashlytics().log('User signed in.');
    navigation.navigate('HomeTabNavigator');
  };
  const goToSignUp = () => {
    crashlytics().log('call goToSignUp.');
    navigation.navigate('SignUpScreen');
  };

  // REACT HOOKS
  useEffect(() => {
    crashlytics().log('SignIn screen mounted.');
    const onStarAnalytics = async () => {
      await analytics().logLogin({
        method: 'api',
      });
    };
    onStarAnalytics();

    return () => {
      crashlytics().log('SignIn screen unmounted.');
    };
  }, []);

  return { hidePassword, offsetKeyboard, onToggleHidePassword, goToHome, goToSignUp };
};
