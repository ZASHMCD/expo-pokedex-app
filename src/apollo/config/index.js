// Dependencies
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Constants
import {
  POKEAPI_URI
} from '../../constants';

// Apollo Client
export const client = new ApolloClient({
  uri: !POKEAPI_URI ? '' : POKEAPI_URI,
  cache: new InMemoryCache(),
  credentials: 'same-origin',
});
