// Dependencies
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

// Redux Store
import { appStore, persistor } from './src/store';

// Apollo Client
import { client } from './src/apollo/config';

// Components
import { AppNavigatorContainer } from './src/navigator/AppNavigator';

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigatorContainer />
      </PersistGate>
    </Provider>
  </ApolloProvider>
);

export default App;
