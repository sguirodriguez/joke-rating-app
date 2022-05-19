import React from "react";
import WelcomeController from "../../containers/Welcome/Welcome.controller";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";

const { Navigator, Screen } = createStackNavigator();

const optionsDefault = {
  options: { headerShown: false, gestureEnabled: false },
};

const PublicNavigator = () => {
  return (
    <Navigator
      gestureEnabled={false}
      screenOptions={{ animationEnabled: false }}
      keyboardHandlingEnabled={false}
    >
      <Screen
        name="Welcome"
        component={WelcomeController}
        {...optionsDefault}
      />

      {/* <Screen name="SignIn" component={SignInController} {...optionsDefault} /> */}

      {/* {routes.map((route, index) => (
        <Screen
          key={index}
          name={route.name}
          component={route.component}
          {...optionsDefault}
        />
      ))} */}
    </Navigator>
  );
};

export default PublicNavigator;
