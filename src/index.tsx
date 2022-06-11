import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { persistor, store } from './redux';
import Router from './navigation';
import { useLayout } from './hooks';
import { NativeBaseProvider } from 'native-base';
import { themes } from './theme';

useLayout().setupLayoutAnimation();

function App() {
  return (
    <NativeBaseProvider theme={themes}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <Router />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}
export default App;
