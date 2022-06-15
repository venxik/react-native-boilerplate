// /* eslint-disable @typescript-eslint/no-explicit-any */
// // test-utils.jsx
// import React from 'react';
// import { render as rtlRender } from '@testing-library/react-native';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// // Import your own reducer
// import userReducer from '../userSlice';

// function render(
//   ui: any,
//   {
//     preloadedState,
//     store),
//     ...renderOptions
//   }: { preloadedState: any; store: any; renderOptions: any } = {},
// ) {
//   function Wrapper({ children }: any) {
//     return <Provider store={store}>{children}</Provider>;
//   }
//   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
// }

// // re-export everything
// export * from '@testing-library/react-native';
// // override render method
// export { render };
