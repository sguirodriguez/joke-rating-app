import { StyleSheet } from "react-native";
import { colorsStyles, wp } from "../../styles/config.styles";

export const colors = colorsStyles;

const styles = StyleSheet.create({
  input: {
    color: colors.black,
    height: 40,
    width: wp("85%"),
    borderRadius: 5,
    backgroundColor: colors.transparent,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    paddingLeft: 8,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayDark,
  },
});

export default styles;
