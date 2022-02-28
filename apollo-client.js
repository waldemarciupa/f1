import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://f1-graphql.herokuapp.com',
  cache: new InMemoryCache(),
});

export default client;
