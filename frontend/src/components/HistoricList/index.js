import { TouchableWithoutFeedback, Alert } from "react-native";
import * as S from "./styles";

import formatter from "../../utils/coinFormatter";

export default function HistoricList({ data, deleteItem }){
  let coinformated = formatter.format(data.value);

  function handleDeleteItem(){
    Alert.alert(
      "Atenção",
      "Você tem certeza que deseja deletar esse registro?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Continuar",
          onPress: () => deleteItem(data.id)
        }
      ]
    )
  }

  return(
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <S.Container style={{borderBottomWidth: 1, borderBottomColor: "#F2F8FD"}}>
        <S.ValueText tipo={data.type}>
          { data.type === "despesa" ? `-${coinformated}` : coinformated }
        </S.ValueText>

        <S.Description>
          {data.description}
        </S.Description>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}