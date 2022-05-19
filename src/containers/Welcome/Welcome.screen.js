import React from "react";
import { View, Image, Text } from "react-native";

const WelcomeScreen = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../../assets/images/login.jpg")}
        />
        <Text>teste</Text>
      </View>
    </>
  );
};

export default WelcomeScreen;
