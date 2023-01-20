import { colors } from "../../styles/config.styles";
import styled from "styled-components/native";
import { TextInput } from "react-native";

export const InputComponent = styled(TextInput)`
  width: 100%;
  height: 40px;
  color: ${colors.black};
  border-radius: 5px;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
  border-width: 0.2px;
  padding-left: 10px;
  border-color: ${colors.grayLight};
`;
