import { Dimensions, StatusBar, Platform } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const colorsStyles = {
  primaryDark: "#10172C",
  primaryDefault: "#293B70",

  secondaryDefault: "#F06F93",
  secondaryDark: "#783749",

  grayDark: "#BBC3CF",
  grayMedium: "#CACFDA",
  grayDefault: "#D6DAE2",
  grayLighter: "#F4F5F7",
  grayLight: "#E6E7E9",

  white: "#FFFFFF",
  black: "#000",
  transparent: "transparent",
};
export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;

export const fonts = {
  highLarge: 18,
  large: 16,
  regular: 14,
  medium: 12,
  small: 10,
};

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height, width } = Dimensions.get("window");

export const isIPhoneX = () =>
  Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS
    ? (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XSMAX_WIDTH && height === XSMAX_HEIGHT)
    : false;

export const StatusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0,
});

export const isIos = Platform.OS === "ios";

const standardLength = width > height ? width : height;
const offset =
  width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight;

const deviceHeight =
  isIPhoneX() || Platform.OS === "android"
    ? standardLength - offset
    : standardLength;

export function fontDynamic(fontSize, standardScreenHeight = 610) {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}
