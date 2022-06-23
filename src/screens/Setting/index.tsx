import crashlytics from '@react-native-firebase/crashlytics';
import inAppMessaging from '@react-native-firebase/in-app-messaging';
import { Button } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSetting } from './hook';

export default function Setting() {
  const { navigation, handleDisplayNotification } = useSetting();
  return (
    <SafeAreaView
      style={{ flex: 1, padding: 20, justifyContent: 'center' }}
      testID="setting-screen"
    >
      <Button onPress={() => crashlytics().crash()} testID="btn-crashlytics">
        Crashlytics Demo
      </Button>
      <Button
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('RemoteConfigScreen')}
        testID="btn-remote-config"
      >
        Remote Config Demo
      </Button>
      <Button
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('ABTest1')}
        testID="btn-ab-testing"
      >
        A/B Testing Demo
      </Button>
      <Button
        style={{ marginTop: 20 }}
        onPress={() => handleDisplayNotification()}
        testID="btn-notification"
      >
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
