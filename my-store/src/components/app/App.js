import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Container } from "semantic-ui-react";

import {HomePage, GoodsPage, CartPage} from "../pages";
import AppHeader from "../app-header";
import Navigation from "../navigation";
import NotFoundPage from "../404";

const App = () => {
  return (
    <Container>
      <AppHeader/>
      <Navigation/>
      <Switch>
        <Route
          exact path='/'
          component={HomePage}
        />
        <Route
          path='/goods'
          component={GoodsPage}
        />
        <Route
          path='/cart'
          component={CartPage}
        />
        <Route
          path='*'
          component={NotFoundPage}
        />

      </Switch>
    </Container>
  );
};

export default App;
