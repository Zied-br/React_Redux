import { DONE, DELETE, ADD, EDIT } from "./types";
export const doneTask = (payload) => {
  return { type: DONE, payload: payload };
};
export const deleteTask = (id) => {
  return { type: DELETE, payload: id };
};
export const addTask = (Task) => {
  return {
    type: ADD,
    payload: Task,
  };
};
export const editTask = (Task) => {
  return {
    type: EDIT,
    payload: Task,
  };
};
