import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import PrivateNavigator from "./Private";
import PublicNavigator from "./Public/index";

export default function Navigation() {
  const [userToken, setUserToken] = useState("");

  return (
    <NavigationContainer>
      {/* {userToken ? <PrivateNavigator /> : <PublicNavigator />} */}
      <PublicNavigator />
    </NavigationContainer>
  );
}
