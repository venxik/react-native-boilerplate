import messaging from '@react-native-firebase/messaging';
import { NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import notifee, { EventType } from '@notifee/react-native';
import { useLayout, useNotification } from './hooks';
import Router from './navigation';
import { persistor, store } from './redux';
import { themes } from './theme';
import { fetchConfig } from './utils';

useLayout().setupLayoutAnimation();
fetchConfig();

function App() {
  const { displayNotification } = useNotification();

  async function requestUserPermission() {
    await messaging().requestPermission();
    // const authStatus = await messaging().requestPermission();
    // const enabled =
    //   authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    //   authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    // if (enabled) {
    //   // console.log('Authorization status:', authStatus);
    // } else {
    //   // console.log('User declined permissions');
    // }
  }

  useEffect(() => {
    requestUserPermission();

    notifee.onBackgroundEvent(async ({ type }) => {
      // if (type === EventType.PRESS) {
      // console.log('User pressed the notification.', detail.pressAction.id);
      // }
    });

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      // Get message image
      // const avatar = remoteMessage.notification.android.imageUrl;

      // Show an alert to the user
      displayNotification(remoteMessage.notification.title, remoteMessage.notification.body);
    });

    // return subscribe;
  }, []);
  return (
    <NativeBaseProvider theme={themes}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}
export default App;
