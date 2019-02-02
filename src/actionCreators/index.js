// example
// TODO: change action types
import {ADD_TODO} from './../actionTypes';

export const addTodo = (id, name) => ({
  type: ADD_TODO,
  payload: {
    id,
    name,
  },
});
