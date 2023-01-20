import { colors, fontDynamic, fonts } from "../../styles/config.styles";
import styled from "styled-components/native";

export const ButtonComponent = styled.TouchableOpacity`
  background-color: ${colors.primaryDefault};
  width: 200px;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-size: ${fontDynamic(fonts.medium)}px;
  font-weight: 800;
`;
