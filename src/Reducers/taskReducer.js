import { v4 as uuidv4 } from "uuid";
import { DONE, DELETE, ADD, EDIT } from "../Actions/types";
const initialState = {
  listTask: [
    {
      id: uuidv4(),
      description: "Write codes",
      isDone: true,
    },
    {
      id: uuidv4(),
      description: "resolve problems",
      isDone: false,
    },
    {
      id: uuidv4(),
      description: "reading",
      isDone: true,
    },
    {
      id: uuidv4(),
      description: "surfing",
      isDone: false,
    },
  ],
};
const taskReducer = (state = initialState.listTask, { type, payload }) => {
  switch (type) {
    case DELETE:
      return [...state.filter((elt) => elt.id !== payload)];
    case DONE:
      return [
        ...state.map((elt) =>
          elt.id === payload ? { ...elt, isDone: !elt.isDone } : elt
        ),
      ];
    case ADD:
      return [...state, payload];
    case EDIT:
      return [
        ...state.map((elt) =>
          elt.id === payload.id
            ? { ...elt, description: payload.description }
            : elt
        ),
      ];
    default:
      return state;
  }
};

export default taskReducer;
