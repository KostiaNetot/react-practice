export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = newTodo => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
};

export const removeTodo = removedId => {
  return {
    type: REMOVE_TODO,
    payload: removedId
  }
};

export const updateTodo = updatedTodo => {
  return {
    type: UPDATE_TODO,
    payload: updatedTodo
  }
};
