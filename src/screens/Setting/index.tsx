import { useNavigation } from '@react-navigation/native';
import { Button } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNotification } from '../../hooks';

export default function Setting() {
  const navigation = useNavigation();
  const { displayNotification } = useNotification();

  const handleDisplayNotification = async () => {
    // Display notification
    displayNotification('NotificationTitle', 'NotificationBody');
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('RemoteConfigScreen')}>Remote Config Demo</Button>
      <Button style={{ marginTop: 20 }} onPress={() => navigation.navigate('ABTest1')}>
        A/B Testing Demo
      </Button>
      <Button style={{ marginTop: 20 }} onPress={() => handleDisplayNotification()}>
        Local Push Notification Demo
      </Button>
    </SafeAreaView>
  );
}
