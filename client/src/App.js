import { Router } from "./Router";
import ApolloProvider from "./providers/ApolloProvider";

export const App = () => {
  return (
    <ApolloProvider>
      <Router />
    </ApolloProvider>
  );
};
