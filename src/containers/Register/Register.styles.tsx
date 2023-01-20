import { colors, fontDynamic, fonts } from "../../styles/config.styles";

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.secondaryDark};
  padding: "6%";
`;

export const Header = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View`
  flex: 2;
`;

export const Title = styled.View`
  flex: 2;
  color: ${colors.white};
  font-size: ${fontDynamic(fonts.medium)}px;
  font-weight: 800;
`;
