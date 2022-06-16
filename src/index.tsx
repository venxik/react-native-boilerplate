import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux';
import Router from './navigation';
import { useLayout } from './hooks';
import { NativeBaseProvider } from 'native-base';
import { themes } from './theme';
import { fetchConfig } from './utils';

useLayout().setupLayoutAnimation();
fetchConfig();

function App() {
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
