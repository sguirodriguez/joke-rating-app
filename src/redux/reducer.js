import { SET_INCREMENT, SET_DECREMENT } from "./actions";

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case SET_DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

export default countReducer;
