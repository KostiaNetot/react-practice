import React, {Component} from 'react';
import { addTodo } from "../redux/actions/todo";
import ReduxContext from "../contexts/ReduxContext";


class AddTodoForm extends Component {
static contextType = ReduxContext;

state = {
  title: ''
};

addTodo() {
  this.context.dispatch(addTodo({
    id: Date.now(),
    title: this.state.title,
    completed: false
  }));
}

  render() {
    return (
      <div>
        <input value={this.state.title} onChange={e => this.setState({title: e.target.value})} type='text'/>
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}

export default AddTodoForm;
