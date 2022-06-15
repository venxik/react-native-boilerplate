import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import crashlytics from '@react-native-firebase/crashlytics';
import { call } from 'react-native-reanimated';

type NavigationProp = NativeStackNavigationProp<
  ReactNavigation.SignInStackParamList,
  'SignUpScreen'
>;
type FormData = {
  name: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const useSignUp = () => {
  // STATE
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const form = useForm<FormData>();

  const navigation = useNavigation<NavigationProp>();
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 30,
  });

  // HANDLER
  const onToggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const onSubmit = async (data) => {
    try {
      crashlytics().log('User signed up.');
      crashlytics().crash();
      await Promise.all([
        crashlytics().setAttribute('phone', data.phone),
        crashlytics().setAttribute('email', data.email),
        crashlytics().setAttributes({
          password: data.password,
          passwordConfirmation: data.passwordConfirmation,
        }),
      ]);
      call.undefined.function();
    } catch (error: Error) {
      crashlytics().recordError(error);
    }
  };

  const goToSignIn = () => navigation.navigate('SignInScreen');

  // REACT HOOKS
  useEffect(() => {
    crashlytics().log('SignUp screen mounted.');

    return () => {
      crashlytics().log('SignUp screen unmounted.');
    };
  }, []);

  return { hidePassword, offsetKeyboard, onToggleHidePassword, goToSignIn, onSubmit, form };
};
