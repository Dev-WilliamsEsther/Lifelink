import {configureStore} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
    import storage from 'redux-persist/lib/storage'
    import AppReducer from "./Slice";

    const persistConfig = {
        key: 'root',
        version: 1,
        storage,
      }

      const persistedReducer = persistReducer(persistConfig, AppReducer)

    export const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
              serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    })

    export const persistor = persistStore(store)