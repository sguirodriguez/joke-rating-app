import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "./src/navigator";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { isIos, StatusBarHeight } from "./src/styles/config.styles";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {!isIos && <View style={{ paddingTop: StatusBarHeight }} />}
        <StatusBar style="dark" />
        <Navigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
