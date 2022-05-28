import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

const HomeScreen = ({ handlers }) => {
  const { increment, decrement } = handlers;
  return (
    <>
      <Text>HOME</Text>
      <TouchableOpacity onPress={() => increment()}>
        <Text>INCREMENTAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => decrement()}>
        <Text>DECREMENTAR</Text>
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;
