import React from 'react';
import { Container, Header, Button} from "semantic-ui-react";
import { createStore, bindActionCreators } from "redux";

import reducer from "./reducer";
import * as actions from "./actions";


const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const updateState = () => {
  console.log(store.getState());
};

store.subscribe(updateState);

const AppReduxTest = () => {

  return (
    <Container>

      <Header as='h1'>AppReduxTest</Header>
      <Header as='h2'></Header>

      <Button primary onClick={ inc }>INC</Button>

      <Button primary onClick={ dec }>DEC</Button>

      <Button primary onClick={ () => {
        const payload = Math.floor(Math.random()*10);
        rnd(payload);
      }}>RANDOM</Button>

    </Container>
  );
};

export default AppReduxTest;
