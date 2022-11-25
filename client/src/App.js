import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Admin from './pages/Admin';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import {Login} from '../src/components/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import SideBar from './components/Sidebar';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import EditProduct from './components/Admin/EditProduct';
import { Footer } from './components/Footer'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [showNav, setShowNav] = useState(true);
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <SideBar />
            <Routes>
              <Route
                path="/admin"
                element={<Admin />}
              />

              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/success"
                element={<Success />}
              />
              <Route
                path="/orderHistory"
                element={<OrderHistory />}
              />
              <Route
                path="/products/:id"
                element={<Detail />}
              />
              <Route
                path="/admin/products/:id"
                element={<EditProduct />}
              />
              <Route
                path="*"
                element={<NoMatch />}
              />
            </Routes>
            <Footer />
          </StoreProvider>

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
