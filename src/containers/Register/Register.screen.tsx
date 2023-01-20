import React from "react";
import { TouchableOpacity } from "react-native";
import { Body, Container, Header, Title } from "./Register.styles";
import { colors } from "../../styles/config.styles";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = ({ handlers }: any) => {
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
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("Welcome" as never)}>
        <Fontisto name="angle-left" size={28} color="white" />
      </TouchableOpacity>
      <Header>
        <MaterialCommunityIcons name="account-plus" size={60} color="white" />
      </Header>
      <Body>
        <Title>Registre-se</Title>
        <Input
          placeholder="Nome"
          value={name}
          autoCapitalize="words"
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

        <Button text={"Cadastrar-se"} onPress={() => console.log("apertou")} />
      </Body>
    </Container>
  );
};

export default RegisterScreen;
