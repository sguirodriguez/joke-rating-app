import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import PrivateNavigator from "./Private/index";
import PublicNavigator from "./Public/index";

export default function Navigation() {
  const [userToken, setUserToken] = useState(true);

  return (
    <NavigationContainer>
      {userToken ? <PrivateNavigator /> : <PublicNavigator />}
    </NavigationContainer>
  );
}
