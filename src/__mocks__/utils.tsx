import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/index';

function renderWithProviders({ children }: PropsWithChildren<any>): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}

export { renderWithProviders };
