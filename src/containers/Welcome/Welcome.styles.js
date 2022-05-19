import { StyleSheet } from "react-native";
import {
  colorsStyles,
  fontDynamic,
  fonts,
  wp,
} from "../../styles/config.styles";

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
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontSize: fontDynamic(fonts.medium),
    fontWeight: "bold",
  },
  marginHorizontal: {
    marginTop: "2%",
  },
  buttonRegister: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondaryDefault,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default styles;
