import { StyleSheet } from "react-native";
import { colorsStyles, fontDynamic, fonts } from "../../styles/config.styles";

export const colors = colorsStyles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    width: "100%",
    height: "100%",
    zIndex: 1,
    position: "absolute",
    display: "flex",
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
  login: {
    flex: 2,
  },
  register: {
    flex: 1,
    display: "flex",
    flexWrap: "no-wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontSize: fontDynamic(fonts.medium),
  },
  marginHorizontal: {
    marginTop: "2%",
  },
});

export default styles;
