import { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import * as S from "./styles";

export default function RegisterTypes({ type, sendTypeChanged }) {
  const [typeChecked, setTypeChecked] = useState(type);

  function changeType(name){
    if(name === "receita"){
      setTypeChecked("receita");
      sendTypeChanged("receita");

    } else{
      setTypeChecked("despesa");
      sendTypeChanged("despesa");
    }
  }

  return (
    <S.RegisterContainer>
      <S.RegisterTypeButton 
        checked={ typeChecked === "receita" ? true : false }
        onPress={() => changeType("receita")}  
      >
        <Icon name="arrow-up" size={25} color="green" />

        <S.RegisterLabel>
          Receita
        </S.RegisterLabel>
      </S.RegisterTypeButton>

      <S.RegisterTypeButton 
        checked={ typeChecked === "despesa" ? true : false }
        onPress={() => changeType("despesa")}  
      >
        <Icon name="arrow-down" size={25} color="red" />

        <S.RegisterLabel>
          Despesa
        </S.RegisterLabel>
      </S.RegisterTypeButton>

    </S.RegisterContainer>
  );
}