import crashlytics from '@react-native-firebase/crashlytics';
import { Button, Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';

export default function Setting() {
  const [count, setCount] = useState(0);

  const onIncrementWNonFatal = () => {
    crashlytics().log('call onIncrementWNonFatal.');
    try {
      if (count >= 4) {
        setCount(count.push(count.length));
      }
      setCount(count + 1);
    } catch (error: Error) {
      crashlytics().recordError(error);
    }
  };

  const onIncrementWFatal = () => {
    crashlytics().log('call onIncrementWFatal.');
    try {
      if (count >= 4) {
        crashlytics().crash();
        setCount(count + 1);
        throw new Error(count + ' greater than or equal five ');
      }
      setCount(count + 1);
    } catch (error: Error) {
      crashlytics().recordError(error);
    }
  };

  useEffect(() => {
    crashlytics().log('Setting screen mounted.');
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ color: 'red', textAlign: 'center' }} fontSize={40}>
          {count}
        </Text>
      </View>
      <Button onPress={onIncrementWNonFatal}>Increment + Non-Fatal</Button>
      <Button onPress={onIncrementWFatal} style={{ marginTop: 10 }}>
        Increment + Fatal
      </Button>
      <Button bgColor={'red.500'} style={{ marginTop: 10 }} onPress={() => setCount(0)}>
        Reset
      </Button>
    </SafeAreaView>
  );
}
