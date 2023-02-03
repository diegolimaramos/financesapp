import { useContext, useState } from "react";
import { Platform, View, Text, ScrollView, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";
import useTogglePasswordVisibility from "../../hooks/useTogglePasswordVisibility";
import phoneMask from "../../utils/telephoneMask";

import Input from "../../components/Input";
import Button from "../../components/Button";

import * as S from "./styles";
import InputArea from "../../components/InputArea";

import Icon from 'react-native-vector-icons/Feather';

export default function SignUp() {
  const navigation = useNavigation();

  const { signUp } = useContext(AuthContext);
  const { passwordVisibility, icon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    Keyboard.dismiss();

    if (nome === "" || email === "" || phone === "" || password === "") {
      alert("Preencha todos os campos!");
      return;
    }

    signUp(nome, email, phone, password);
    navigation.goBack();
  }

  return (
    <S.Background>
      <ScrollView>
        <S.Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>

          <S.Title>Crie sua conta</S.Title>

          <InputArea>
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Text>
                <Icon name="user" size={20} color="#4B4B4B" />
              </Text>

              <Input
                placeholder="Nome"
                autoCorrect={false}
                autoCapitalize="none"
                value={nome}
                onChangeText={(value) => setNome(value)}
              />
            </View>
          </InputArea>

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
                <Icon name="phone" size={20} color="#4B4B4B" />
              </Text>

              <Input
                placeholder="Celular"
                autoCorrect={false}
                autoCapitalize="none"
                value={phoneMask(phone)}
                onChangeText={(value) => setPhone(value)}
                keyboardType="numeric" 
                maxLength={15}
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
                onChangeText={(valueInput) => setPassword(valueInput)}
              />

              <S.ButtonPassword onPress={handlePasswordVisibility} >
                {icon}
              </S.ButtonPassword>
            </View>
          </InputArea>

          <Button onPress={handleSignUp}>
            Cadastrar
          </Button>

        </S.Container>
      </ScrollView>
    </S.Background>
  );
}
