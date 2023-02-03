import { useMemo } from "react";
import {View} from "react-native";
import formatter from "../../utils/coinFormatter";
import Icon from "react-native-vector-icons/Feather";

import * as S from "./styles";

export default function BalanceItem({ data }){
  let coinformated = formatter.format(data.saldo);

  const labelName = useMemo(() => {
    if(data.tag === "saldo"){
      return{
        label: "Saldo atual",
        icon: "",
        color: "3b3dbf"
      }

    } else if(data.tag === "receita"){
      return{
        label: "Entradas",
        icon: <Icon name="arrow-up" size={25} />,
        color: "00b94a"
      }
    
    } else{
      return{
        label: "Saídas",
        icon: <Icon name="arrow-down" size={25} />,
        color: "Ef463a"
      }
    }
  }, [data])

  return(
    <S.Container bg={labelName.color}>
      <View style={{ flexDirection: "row", alignItems: "center"}}>
        <S.Label>{labelName.icon}</S.Label>
        <S.Label>{labelName.label}</S.Label>
      </View>
      <S.Balance>{coinformated}</S.Balance>
    </S.Container>
  );
}