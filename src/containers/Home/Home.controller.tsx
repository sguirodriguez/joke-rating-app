import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDecrement, setIncrement } from "../../redux/actions";
import HomeScreen from "./Home.screen";

const HomeController = () => {
  const { count } = useSelector((state: any) => state.countReducer);

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
    count,
  };

  return <HomeScreen handlers={handlers} />;
};

export default HomeController;
