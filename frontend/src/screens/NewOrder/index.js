import { useState } from "react";
import { View, Text, SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { format } from "date-fns";

import Icon from "react-native-vector-icons/FontAwesome";

import Header from "../../components/Header";
import Input from "../../components/Input";
import RegisterTypes from "../../components/RegisterTypes";
import InputArea from "../../components/InputArea";
import Button from "../../components/Button";

import * as S from "./styles";

export default function NewOrder() {
  const navigation = useNavigation();

  const [labelInput, setLabelInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [type, setType] = useState("despesa");

  function handleSubmit(){
    Keyboard.dismiss();

    if(labelInput === "" || isNaN(parseFloat(valueInput)) === "" || type === null){
      alert("Preencha todos os campos!");
      return;
    }

    Alert.alert(
      "Confirmando dados",
      `Tipo: ${type} - Valor: R$ ${parseFloat(valueInput)}`,
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Continuar",
          onPress: () => handleAdd()
        }
      ]
      )
  }

  async function handleAdd(){
    Keyboard.dismiss();

    await api.post("/receive", {
      description: labelInput,
      value: Number(valueInput),
      type: type,
      date: format(new Date(), "dd/MM/yyyy")
    })

    setLabelInput("");
    setValueInput("");
    navigation.navigate("Home");
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.Background>
        <Header title="Nova Transação" />
        <ScrollView>
          <SafeAreaView style={{marginTop: 50, alignItems: "center"}}>

            <InputArea>
              <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text>
                  <Icon name="credit-card" size={20} color="#4B4B4B" />
                </Text>

                <Input 
                  placeholder="Nome"
                  autoCorrect={true}
                  autoCapitalize={true}
                  value={labelInput}
                  onChangeText={value => setLabelInput(value)}
                />
              </View>
            </InputArea>

            <InputArea>
              <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text>
                  <Icon name="money" size={20} color="#4B4B4B" />
                </Text>

                <Input 
                  placeholder="Valor" 
                  value={valueInput}
                  onChangeText={value => setValueInput(value)}
                  keyboardType="numeric" 
                />
              </View>
            </InputArea>

            <RegisterTypes type={type} sendTypeChanged={ item => setType(item)} />

            <Button onPress={handleSubmit}>
              Registrar
            </Button>
          </SafeAreaView>
        </ScrollView>
      </S.Background>
    </TouchableWithoutFeedback>
  );
}
