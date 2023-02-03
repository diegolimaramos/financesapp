import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import NewOrder from "../screens/NewOrder";

import CustomDrawer from "../components/CustomDrawer";

import Icon from "react-native-vector-icons/Feather";

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <AppDrawer.Navigator 
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#F2F8FD",
          paddingTop: 20
        },
        drawerActiveBackgroundColor: "#3E4685",
        drawerActiveTintColor: "#F2F8FD",
        drawerInactiveTintColor: "#3E4685"
      }}
    >
      <AppDrawer.Screen 
        name="Home" 
        component={Home} 
        options={{
          drawerIcon: ({ focused }) => (
            <Icon name="home" size={25} color={focused ? "#F2F8FD" : "#3E4685"} />
          )
        }}
      />

      <AppDrawer.Screen 
        name="Perfil" 
        component={Profile}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon name="user" size={25} color={focused ? "#F2F8FD" : "#3E4685"} />
          )
        }}
      />

      <AppDrawer.Screen 
        name="Nova Transação"
        component={NewOrder}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon name="credit-card" size={25} color={focused ? "#F2F8FD" : "#3E4685"} />
          )
        }}
      />
    </AppDrawer.Navigator>
  );
}
