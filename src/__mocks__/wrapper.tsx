import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { store } from '../redux';

export const wrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <NativeBaseProvider
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    >
      <Provider store={store}>{children}</Provider>
    </NativeBaseProvider>
  );
};
