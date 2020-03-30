import React from 'react';
import './App.css';
import { Button, Container} from "@material-ui/core";

import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Todo list Kostia</h1>
        <Button variant="contained" color="primary">Add task</Button>
        <hr/>

        <TodoList/>

      </Container>
    </div>
  );
}

export default App;
