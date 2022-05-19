import Navigator from "./src/navigator";
import { View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { isIos, StatusBarHeight } from "./src/styles/config.styles";
isIos;

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!isIos && <View style={{ paddingTop: StatusBarHeight }} />}
      <StatusBar style={isIos ? "dark" : "light"} backgroundColor="black" />
      <Navigator />
    </SafeAreaView>
  );
}
