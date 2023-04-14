import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ApolloProvider from "./providers/ApolloProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider>
    <App />
  </ApolloProvider>
);
