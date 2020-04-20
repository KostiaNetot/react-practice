import React from 'react';
import { Provider } from 'react-redux';
import store from "./redux/storeConfig";
import AsyncApp from "./AsyncApp";

const RedditApp = () => {
  return (
    <Provider store={store}>
      <AsyncApp />
    </Provider>
  );
};

export default RedditApp;
