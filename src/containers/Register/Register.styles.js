import { StyleSheet } from "react-native";
import { colorsStyles, fontDynamic, fonts } from "../../styles/config.styles";

export const colors = colorsStyles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryDark,
    padding: "6%",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 2,
  },
  title: {
    color: colors.white,
    fontSize: fontDynamic(fonts.medium),
    fontWeight: "bold",
  },
  marginHorizontal: {
    marginTop: "2%",
  },
});

export default styles;
