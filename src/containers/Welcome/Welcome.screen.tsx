import React from "react";
import {
  Body,
  ButtonRegister,
  Container,
  Content,
  Header,
  Image,
  Login,
  Register,
  Title,
} from "./Welcome.styles";
import { colors } from "../../styles/config.styles";
import { Fontisto, AntDesign } from "@expo/vector-icons";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = ({ handlers }: any) => {
  const { email, setEmail, password, setPassword, handleSignIn } = handlers;
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={require("../../assets/images/login.jpg")} />
      <Content>
        <Header>
          <Fontisto name="laughing" size={40} color="white" />
          <Title>Ofertas imperdíveis!</Title>
        </Header>

        <Body>
          <Login>
            <Title>Login</Title>
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

            <Button
              text={"Entrar"}
              style={{ alignSelf: "center", width: "100%" }}
              onPress={() => handleSignIn()}
            />
          </Login>
          <Register>
            <Title>Não possue conta?</Title>

            <ButtonRegister
              onPress={() => navigation.navigate("Register" as never)}
            >
              <AntDesign name="plus" size={30} color="white" />
            </ButtonRegister>
          </Register>
        </Body>
      </Content>
    </Container>
  );
};

export default WelcomeScreen;
