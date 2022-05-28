export const SET_INCREMENT = "SET_INCREMENT";
export const SET_DECREMENT = "SET_DECREMENT";

export const setIncrement = () => {
  return {
    type: SET_INCREMENT,
    payload: 1,
  };
};

export const setDecrement = () => {
  return {
    type: SET_DECREMENT,
    payload: 1,
  };
};
