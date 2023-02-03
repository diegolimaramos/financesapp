import { useContext } from "react";
import { Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import * as S from "./styles";

import { AuthContext } from "../../contexts/auth";
import Icon from "react-native-vector-icons/Feather";


export default function CustomDrawer(props){
  const { user, signOut } = useContext(AuthContext);
  
  return(
    <DrawerContentScrollView {...props}>
      <S.Container>
        <Image 
          source={require("../../assets/logo.png")} 
          style={{ width: 90, height: 90 }}
          resizeMode="contain"
        />
        <S.TextWelcome>Bem-vindo(a)</S.TextWelcome>

        <S.NameUser numberOfLines={1}>
          {user && user.name}
        </S.NameUser>
      </S.Container>

      <DrawerItemList {...props} />

      <DrawerItem
        {...props} 
        label="Sair"
        inactiveTintColor="#3E4685"
        onPress={() => signOut()}
        icon={({ focused }) => (
          <Icon name="log-out" size={25} color={focused ? "#F2F8FD" : "#3E4685"} />
        )}
      />

    </DrawerContentScrollView>
  );
}