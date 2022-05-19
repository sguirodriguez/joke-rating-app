import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles, { colors } from "./Register.styles";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import Input from "../../components/Input/Input.components";
import Button from "../../components/Button/Button.components";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = ({ handlers }) => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = handlers;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
        <Fontisto name="angle-left" size={28} color="white" />
      </TouchableOpacity>
      <View style={styles.header}>
        <MaterialCommunityIcons name="account-plus" size={60} color="white" />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Registre-se</Text>
        <Input
          placeholder="Nome"
          value={name}
          onChangeText={(value) => setName(value)}
          style={{ width: "100%", color: colors.white }}
        />
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
        <Input
          placeholder="Confirmar Senha"
          value={confirmPassword}
          secureTextEntry={true}
          onChangeText={(value) => setConfirmPassword(value)}
          style={{ width: "100%", color: colors.white }}
        />
        <View style={styles.marginHorizontal} />
        <View style={styles.marginHorizontal} />
        <Button
          text={"Cadastrar-se"}
          style={{
            alignSelf: "center",
            width: "100%",
            backgroundColor: colors.secondaryDefault,
          }}
          onPress={() => console.log("apertou")}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;
