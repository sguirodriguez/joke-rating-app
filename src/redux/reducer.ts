import { actions } from "./actions";

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.SET_INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case actions.SET_DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

export default countReducer;
