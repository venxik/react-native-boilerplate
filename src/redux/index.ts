/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import logger from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { combinedMiddleware } from '../services';
import { rootPersistConfig, rootReducer } from './rootReducer';

/**
 * Setup redux store
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let createDebugger: (() => any) | null = null;

if (__DEV__ && !process.env.JEST_WORKER_ID) {
  createDebugger = require('redux-flipper').default;
}

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    __DEV__ && !process.env.JEST_WORKER_ID
      ? getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        })
          .concat(combinedMiddleware)
          .concat(logger)
          .concat(createDebugger?.())
      : getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).concat(combinedMiddleware),
});

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

const useReduxDispatch = () => useDispatch<AppDispatch>();
const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Initial Redux Query
 */

export { store, persistor, useSelector, useDispatch, useReduxDispatch, useReduxSelector };

// export * from './modules';
