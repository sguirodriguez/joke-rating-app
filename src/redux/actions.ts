export const actions = {
  SET_INCREMENT: "SET_INCREMENT",
  SET_DECREMENT: "SET_DECREMENT",
};

export const setIncrement = () => {
  return {
    type: actions.SET_INCREMENT,
    payload: 1,
  };
};

export const setDecrement = () => {
  return {
    type: actions.SET_DECREMENT,
    payload: 1,
  };
};
