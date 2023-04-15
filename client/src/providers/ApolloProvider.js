import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_GRAPH_URL,
  cache: new InMemoryCache(),
});

export default ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
