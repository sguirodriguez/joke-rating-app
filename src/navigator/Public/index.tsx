import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";

const { Navigator, Screen } = createStackNavigator();

const optionsDefault = {
  options: { headerShown: false, gestureEnabled: false },
};

const PublicNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        animationEnabled: true,
        keyboardHandlingEnabled: false,
      }}
    >
      {routes?.map((route, index) => (
        <Screen
          key={index}
          name={route?.name}
          component={route?.component}
          {...optionsDefault}
        />
      ))}
    </Navigator>
  );
};

export default PublicNavigator;
