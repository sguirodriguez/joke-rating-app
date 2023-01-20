import styled from "styled-components/native";
import { colors, fontDynamic, fonts } from "../../styles/config.styles";

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 6%;
`;

export const Header = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View`
  flex: 2;
`;

export const Login = styled.View`
  flex: 2;
`;

export const Register = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: ${fontDynamic(fonts.medium)}px;
  font-weight: 800;
`;

export const ButtonRegister = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondaryDefault};
  shadow-color: #000;
`;
