import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import * as S from "./styles";

export default function Header({ title }){
  const navigation = useNavigation();

  return(
    <S.Container>
      <S.ButtonMenu onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={35} color="#3E4685" />
      </S.ButtonMenu>

      {title && (
        <S.Title>{title}</S.Title>
      )}
    </S.Container>
  );
}