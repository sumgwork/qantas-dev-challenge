import ApolloClient from "apollo-client";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import Error from "./pages/Error";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

// Hooking to the GraphQL Server - preparing client
const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:3001/graphql" }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Layout>
            <Navbar />
            <Switch>
              <Route path="/faq" exact component={FAQ} />
              <Route path="/" exact component={Home} />
              <Route path="**" component={Error} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
