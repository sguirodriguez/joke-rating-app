import React from "react";
import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useAuth } from "../../context/auth";
import { useTranslateContext } from "../../context/translate";
import { getBanks } from "../../services/auth";
import { Container } from "./Home.styles";

const HomeScreen = ({ handlers }: any) => {
  const { increment, decrement, count } = handlers;
  const { signOut } = useAuth();
  const { translate, setLanguage } = useTranslateContext();

  return (
    <Container>
      <View style={{ marginTop: 20 }}></View>
      <Text style={{ fontSize: 30 }}>{translate.signup.welcome}</Text>
      <View style={{ marginTop: 40 }}></View>

      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Button title="INGLES" onPress={() => setLanguage("en_US")}></Button>
        <Button title="PORTUGUES" onPress={() => setLanguage("pt_BR")}></Button>
      </View>

      <Text style={{ fontSize: 18 }}>CONTAGEM REDUX: {count}</Text>
      <View style={{ marginTop: 10 }}></View>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <TouchableOpacity
          onPress={() => increment()}
          style={{ marginRight: 5 }}
        >
          <Text style={{ fontSize: 18, color: "blue" }}>ADICIONAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => decrement()}>
          <Text style={{ fontSize: 18, color: "red" }}> SUBTRAIR</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }}></View>
      <Button title="TESTE CHAMADA DE API" onPress={() => getBanks()}></Button>
      <View style={{ marginTop: 20 }}></View>
      <Button title="SAIR DO APLICATIVO" onPress={() => signOut()}></Button>
    </Container>
  );
};

export default HomeScreen;
