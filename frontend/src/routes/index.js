import { useContext } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import { AuthContext } from "../contexts/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import logo from "../assets/logo.png";

function Routes() {
  const { signed, loadingAuth } = useContext(AuthContext);

  if (loadingAuth) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Image source={logo} style={{ marginBottom: 20, width: 80, height: 80 }}/>
        <ActivityIndicator size="large" color="#3E4685" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
