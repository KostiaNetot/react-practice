import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../actions/todo";


export default function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case UPDATE_TODO:
      return state.map(todo => todo.id === action.payload.id ? {...todo, ...action.payload} : todo);
    default: return state;
  }
}
