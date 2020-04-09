import React from 'react';
import store from "./redux/store";
import ReduxContext from "./contexts/ReduxContext";

import { Container } from "semantic-ui-react";

import TodoList from "./containers/TodoList";
import AddTodoForm from "./containers/AddTodoForm";


const AppReduxSandbox = () => {
  return (
    <ReduxContext.Provider value={store}>
      <Container>
        <AddTodoForm/>
        <TodoList/>
      </Container>
    </ReduxContext.Provider>
  );
};

export default AppReduxSandbox;
