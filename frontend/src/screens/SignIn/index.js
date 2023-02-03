import { useContext, useState } from "react";
import { Platform, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/logo.png";

import { AuthContext } from "../../contexts/auth";
import useTogglePasswordVisibility from "../../hooks/useTogglePasswordVisibility";

import InputArea from "../../components/InputArea";
import Input from "../../components/Input";
import Button from "../../components/Button";

import Icon from 'react-native-vector-icons/Feather';

import * as S from "./styles";

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { passwordVisibility, icon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const { signIn } = useContext(AuthContext);

  function handleLogin() {
    if (email === "" || password === "") {
      alert("Preencha todos os campos!");
      return;
    }
    
    signIn(email, password);
  }

  return (
    <S.Background>
      <S.Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <S.Logo source={logo} />

        <InputArea>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <Text>
              <Icon name="mail" size={20} color="#4B4B4B" />
            </Text>

            <Input
              placeholder="E-mail"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
          </View>
        </InputArea>

        <InputArea>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <Text>
              <Icon name="lock" size={20} color="#4B4B4B" />
            </Text>

            <Input
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              secureTextEntry={passwordVisibility}
              onChangeText={(value) => setPassword(value)}
            />

            <S.ButtonPassword onPress={handlePasswordVisibility} >
              {icon}
            </S.ButtonPassword>
          </View>
        </InputArea>

        <Button onPress={handleLogin}>
          Entrar
        </Button>

        <S.AreaNewAccount>
          <Text style={{color: "#A3A4A7"}}>Novo no app? </Text>
          
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <S.LinkText>Crie sua conta!</S.LinkText>
          </TouchableOpacity>
        </S.AreaNewAccount>
      </S.Container>
    </S.Background>
  );
}
