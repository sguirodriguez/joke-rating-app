import React from "react";
import { Text } from "react-native";
import { Container } from "./styles";

interface Props {
  text: string;
  textStyle: any;
}

const Button: React.FC<Props> = ({ text = "texto", textStyle }) => {
  return (
    <Container>
      <Text style={textStyle}>{text}</Text>
    </Container>
  );
};

export default Button;
