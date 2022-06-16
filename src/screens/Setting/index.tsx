import { useNavigation } from '@react-navigation/native';
import { Button } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Setting() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('RemoteConfigScreen')}>Remote Config Demo</Button>
      <Button style={{ marginTop: 20 }} onPress={() => navigation.navigate('ABTest1')}>
        A/B Testing Demo
      </Button>
    </SafeAreaView>
  );
}
