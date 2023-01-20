import React from "react";
import { Text } from "react-native";
import { Container } from "./styles";

interface Props {
  handlers: {
    example: string;
  };
}

const ExampleScreen: React.FC<Props> = ({ handlers }) => {
  const {} = handlers;
  return (
    <Container>
      <Text>Example</Text>
    </Container>
  );
};

export default ExampleScreen;
