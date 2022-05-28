import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDecrement, setIncrement } from "../../redux/actions";
import HomeScreen from "./Home.screen";

const HomeController = () => {
  const { count } = useSelector((state) => state.countReducer);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(setIncrement());
  };

  const decrement = () => {
    dispatch(setDecrement());
  };

  const handlers = {
    increment,
    decrement,
  };

  return <HomeScreen handlers={handlers} />;
};

export default HomeController;
