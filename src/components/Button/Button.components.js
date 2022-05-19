import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./Button.styles";

const Button = (props) => {
  const {
    onPress = () => {},
    style,
    opacity,
    text = "texto",
    textStyle,
  } = props;

  return (
    <TouchableOpacity
      activeOpacity={opacity}
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
