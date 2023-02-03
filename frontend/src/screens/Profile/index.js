import { useContext } from "react";
import { Text } from "react-native";
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";
import Button from "../../components/Button";
import * as S from "./styles";

import phoneMask from "../../utils/telephoneMask";

import Icon from "react-native-vector-icons/FontAwesome";


export default function Profile() {
  const { user } = useContext(AuthContext);

  function warning(){
    alert("Tente mais tarde!");
  }

  return (
    <S.Container>
      <Header title="Perfil" /> 

      <S.PhotoArea>
        <Icon name="user-circle-o" size={90} color="#A3A4A7" />

        <S.BtnPhoto onPress={warning}>
          <Icon name="camera" size={20} color="#3E4685" />
        </S.BtnPhoto>

        <S.NameText numberOfLines={1}>{user && user.name}</S.NameText>
      </S.PhotoArea>

      <S.DataArea style={{elevation: 4}}>
        <S.DataHeader>
          <Text style={{ color: "#3E4685", fontSize: 16, fontWeight: "bold", }}>Dados cadastrais</Text>
          <Icon name="edit" size={20} color="#3E4685" />
        </S.DataHeader>

        <S.DataBody style={{borderBottomWidth: 1, borderBottomColor: "#F2F8FD"}}>
          <S.Label>Nome: </S.Label>
          <S.DataLabel>{user && user.name}</S.DataLabel>
        </S.DataBody>

        <S.DataBody style={{borderBottomWidth: 1, borderBottomColor: "#F2F8FD"}}>
          <S.Label>E-mail: </S.Label>
          <S.DataLabel>{user && user.email}</S.DataLabel>
        </S.DataBody>

        <S.DataBody style={{borderBottomWidth: 1, borderBottomColor: "#F2F8FD"}}>
          <S.Label>Celular: </S.Label>
          <S.DataLabel>{user && phoneMask(user.phone)}</S.DataLabel>
        </S.DataBody>

        <S.DataBody style={{borderBottomWidth: 1, borderBottomColor: "#F2F8FD"}}>
          <S.Label>Senha: </S.Label>
          <S.DataLabel>******</S.DataLabel>
        </S.DataBody>

        <S.DataBody style={{ justifyContent: "center"}}>
          <Button onPress={warning}>
            Editar
          </Button>
        </S.DataBody>
      </S.DataArea>
    </S.Container>
  );
}
