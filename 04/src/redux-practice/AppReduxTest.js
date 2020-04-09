import React from 'react';
import { createStore, bindActionCreators } from "redux";
import { Provider } from 'react-redux';

import reducer from "./reducer";
import * as actions from "./actions";
import Counter from "./components/Counter";


const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const updateState = () => {
  console.log(store.getState());
};

store.subscribe(updateState);

const AppReduxTest = () => {


  return (
    <Provider store={store}>
      <Counter
        counter={store.getState()}
        inc={inc}
        dec={dec}
        rnd={() => {
          const value = Math.floor(Math.random()*10);
          rnd(value)
        }}
      />
    </Provider>

  );
};

export default AppReduxTest;
