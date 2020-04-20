import React from 'react';
import { Provider } from 'react-redux';
import store from "./redux/storeConfig";
import HeaderApp from "./components/HeaderApp";
import ContentApp from "./components/ContentApp";


const GistsExplorerApp = () => {
  return (
    <Provider store={store} >
      <HeaderApp />
      <ContentApp/>
    </Provider>
  );
};

export default GistsExplorerApp;
