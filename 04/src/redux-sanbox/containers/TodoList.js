import React, {Component} from 'react';
import { removeTodo } from "../redux/actions/todo";
import ReduxContext from "../contexts/ReduxContext";


class TodoList extends Component {

  static contextType = ReduxContext;

  state = {
    todos: []
  };

  componentDidMount() {
    this.context.subscribe(() => {
      this.setState({ todos: this.context.store.getState().todos })
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  removeTodo(id) {
    this.context.store.dispatch(removeTodo(id));
  }

  render() {

    const { todos } = this.state;

    return (
      <div>
        {todos.map(todo => {
          <div key={todo.id}>{todo.title} |||||  <span onClick={() => this.removeTodo(todo.id)}>X</span></div>
        })}
      </div>
    );
  }
}

export default TodoList;
