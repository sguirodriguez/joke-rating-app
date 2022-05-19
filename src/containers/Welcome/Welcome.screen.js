import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles, { colors } from "./Welcome.styles";
import { Fontisto, AntDesign } from "@expo/vector-icons";
import Input from "../../components/Input/Input.components";
import Button from "../../components/Button/Button.components";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = ({ handlers }) => {
  const { email, setEmail, password, setPassword } = handlers;
  const navigation = useNavigation();
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
              style={{ width: "100%", color: colors.white }}
            />
            <Input
              placeholder="Senha"
              value={password}
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
              style={{ width: "100%", color: colors.white }}
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

            <TouchableOpacity
              style={styles.buttonRegister}
              onPress={() => navigation.navigate("Register")}
            >
              <AntDesign name="plus" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
