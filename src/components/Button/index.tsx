import React from "react";
import { ButtonComponent, Text } from "./styles";

interface Props {
  onPress: () => any;
  style?: any;
  opacity?: number;
  text?: string;
  textStyle?: any;
}

const Button: React.FC<Props> = ({
  onPress = () => {},
  style,
  opacity,
  text = "texto",
  textStyle,
}) => {
  return (
    <ButtonComponent activeOpacity={opacity} style={style} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </ButtonComponent>
  );
};

export default Button;
