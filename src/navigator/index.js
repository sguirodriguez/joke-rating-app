import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import PrivateNavigator from "./Private/index";
import PublicNavigator from "./Public/index";
import { Provider } from "react-redux";
import { Store } from "../redux/store";

export default function Navigation() {
  const [userToken, setUserToken] = useState(true);

  return (
    <Provider store={Store}>
      <NavigationContainer>
        {userToken ? <PrivateNavigator /> : <PublicNavigator />}
      </NavigationContainer>
    </Provider>
  );
}
