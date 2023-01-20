import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import PrivateNavigator from "./Private/index";
import PublicNavigator from "./Public/index";
import { Provider } from "react-redux";
import { Store } from "../redux/store";
import { useAuth } from "../context/auth";

export default function Navigation() {
  const { signed } = useAuth();

  return (
    <Provider store={Store}>
      <NavigationContainer>
        {signed ? <PrivateNavigator /> : <PublicNavigator />}
      </NavigationContainer>
    </Provider>
  );
}
