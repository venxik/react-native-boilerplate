import inAppMessaging from '@react-native-firebase/in-app-messaging';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'native-base';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNotification } from '../../hooks';

export default function Setting() {
  const navigation = useNavigation();
  const { displayNotification } = useNotification();

  const handleDisplayNotification = async () => {
    // Display notification
    displayNotification('NotificationTitle', 'NotificationBody');
  };

  useEffect(() => {
    // const installationsForDefaultApp = firebase.installations().getId();
    // installationsForDefaultApp.then((res) => console.log(res)).catch((err) => console.log(err));
    async function bootstrap() {
      await inAppMessaging().setMessagesDisplaySuppressed(true);
    }
    bootstrap();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('RemoteConfigScreen')}>Remote Config Demo</Button>
      <Button style={{ marginTop: 20 }} onPress={() => navigation.navigate('ABTest1')}>
        A/B Testing Demo
      </Button>
      <Button style={{ marginTop: 20 }} onPress={() => handleDisplayNotification()}>
        Local Push Notification Demo
      </Button>
      <Button
        style={{ marginTop: 20 }}
        onPress={async () => inAppMessaging().setMessagesDisplaySuppressed(true)}
      >
        In App Messaging Demo
      </Button>
    </SafeAreaView>
  );
}
