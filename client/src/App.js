import { Router } from "./Router";
import { ToastContainer } from "react-toastify";

import ApolloProvider from "./providers/ApolloProvider";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <ApolloProvider>
      <Router />
      <ToastContainer />
    </ApolloProvider>
  );
};
