import { StyleSheet } from "react-native";
import { colorsStyles, fontDynamic, fonts } from "../../styles/config.styles";

const colors = colorsStyles;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.primaryDefault,
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: fontDynamic(fonts.medium),
  },
});

export default styles;
