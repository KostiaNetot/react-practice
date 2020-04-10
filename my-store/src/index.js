import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import StoreService from "./services";
import { StoreServiceProvider } from "./components/store-sevice-context";

import store from "./Store";

const storeService = new StoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <StoreServiceProvider value={storeService}>
        <Router>

          <App/>

        </Router>
      </StoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
