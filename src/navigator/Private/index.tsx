import React from "react";
import { View, TouchableOpacity } from "react-native";
import { routes as profileRoutes } from "./profile.routes";
import { routes as homeRoutes } from "./home.routes";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../styles/config.styles";

const { Navigator, Screen } = createStackNavigator();
const optionsDefault = {
  options: { headerShown: false, gestureEnabled: false },
};

const HomeNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        animationEnabled: false,
        keyboardHandlingEnabled: false,
      }}
    >
      {homeRoutes?.map((route, index) => (
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

const ProfileNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        animationEnabled: false,
        keyboardHandlingEnabled: false,
      }}
    >
      {profileRoutes?.map((route, index) => (
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

const handleIcon = (routeName: string, isFocused: boolean) => {
  const iconTranslator: any = {
    Profile: (
      <MaterialCommunityIcons
        name="face-man-profile"
        size={30}
        color={isFocused ? colors.primaryDefault : "black"}
      />
    ),
    Home: (
      <Entypo
        name="home"
        size={30}
        color={isFocused ? colors.primaryDefault : "black"}
      />
    ),
  };

  return iconTranslator[routeName];
};

function TabBar({ state, descriptors, navigation }: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: 4,
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ width: 40, height: 40 }}
          >
            {handleIcon(route?.name, isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const { Navigator: BottomNavigator, Screen: BottomScreen } =
  createBottomTabNavigator();

const PrivateNavigator = () => {
  return (
    <BottomNavigator
      initialRouteName="Home"
      tabBar={(props) => <TabBar {...props} />}
    >
      <BottomScreen
        options={{ headerShown: false }}
        name="Home"
        component={HomeNavigator}
      />
      <BottomScreen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileNavigator}
      />
    </BottomNavigator>
  );
};

export default PrivateNavigator;
