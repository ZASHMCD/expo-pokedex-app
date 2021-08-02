// Dependencies
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';

// Root Reducer
import persistedRootReducer from './root-reducer';

const middlewares = [
  thunk
];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger());
}

// Use applyMiddleware to add the thunk and createLogger middleware to the store
const appStore = createStore(
  persistedRootReducer,
  applyMiddleware(...middlewares)
);

// Middleware: Redux Persist Persister
const persistor = persistStore(appStore);

export { appStore, persistor };
