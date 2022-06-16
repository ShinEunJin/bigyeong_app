import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import RootNavigation from './src/routes/RootNavigation';

const link = createUploadLink({ uri: 'https://shin.loca.lt/graphql' });

const client = new ApolloClient({
  link: link as unknown as ApolloLink,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootNavigation />
    </ApolloProvider>
  );
};

export default App;
