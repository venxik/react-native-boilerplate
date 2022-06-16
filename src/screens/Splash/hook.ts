import crashlytics from '@react-native-firebase/crashlytics';
import { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

export const useSplash = () => {
  // STATE
  const rotateValueHolder = new Animated.Value(0);

  // HANDLER
  const startImageRotateFunction = () => {
    crashlytics().log('call startImageRotateFunction.');
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // REACT HOOKS
  useEffect(() => {
    crashlytics().log('Splash screen mounted.');
    startImageRotateFunction();

    return () => {
      crashlytics().log('Splash screen unmounted.');
    };
  }, []);

  return {
    rotateData,
    startImageRotateFunction,
  };
};
