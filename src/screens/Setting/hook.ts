import inAppMessaging from '@react-native-firebase/in-app-messaging';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useNotification } from '../../hooks';

export const useSetting = () => {
  //STATE
  const navigation = useNavigation();
  const { displayNotification } = useNotification();

  //HANDLER
  const handleDisplayNotification = async () => {
    // Display notification
    displayNotification('NotificationTitle', 'NotificationBody');
  };

  //HOOKS
  useEffect(() => {
    // const installationsForDefaultApp = firebase.installations().getId();
    // installationsForDefaultApp.then((res) => console.log(res)).catch((err) => console.log(err));
    async function bootstrap() {
      await inAppMessaging().setMessagesDisplaySuppressed(true);
    }
    bootstrap();
  }, []);

  return {
    navigation,
    handleDisplayNotification,
  };
};
