import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import styles, { colors } from "./Welcome.styles";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import Input from "../../components/Input/Input.components";
import Button from "../../components/Button/Button.components";

const WelcomeScreen = ({ handlers }) => {
  const { email, setEmail, password, setPassword } = handlers;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/login.jpg")}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <Fontisto name="laughing" size={40} color="white" />
          <Text style={[styles.title, { marginTop: "2%" }]}>
            Encontre piadas, compartilhe e divirta-se!
          </Text>
        </View>

        <View style={styles.body}>
          <View style={styles.login}>
            <Text style={[styles.title, { marginBottom: "2%" }]}>Login</Text>
            <Input
              placeholder="Email"
              value={email}
              onChangeText={(value) => setEmail(value)}
              style={{ width: "100%" }}
            />
            <Input
              placeholder="Senha"
              value={password}
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
              style={{ width: "100%" }}
            />
            <View style={styles.marginHorizontal} />
            <View style={styles.marginHorizontal} />
            <Button
              text={"Entrar"}
              style={{ alignSelf: "center", width: "100%" }}
              onPress={() => console.log("apertou")}
            />
          </View>
          <View style={styles.register}>
            <Text style={[styles.title, { color: colors.secondaryDefault }]}>
              Não possue conta?
            </Text>

            <Ionicons
              name="add-circle-outline"
              size={45}
              color={colors.secondaryDefault}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
