// Dependencies
import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// Reducers
import toggleMenuReducerFn from './reducers/toggleMenu.reducer';

const rootReducer = combineReducers({
  isOpen: toggleMenuReducerFn,
});

// Middleware: Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'isOpen'
  ],
  blacklist: [],
  stateReconciler: autoMergeLevel2
};

// Middleware: Redux Persist Persisted Reducer
const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export default persistedRootReducer;
