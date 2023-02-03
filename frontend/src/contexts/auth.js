import { useState, createContext, useEffect } from "react";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage(){
      const storageUser = await AsyncStorage.getItem("@finToken");

      if(storageUser){
        const response = await api.get("/me", {
          headers:{
            "Authorization": `Bearer ${storageUser}`
          }
        })
        .catch(()=>{
          setUser(null);
        })

        api.defaults.headers["Authorization"] = `Bearer ${storageUser}`;
        setUser(response.data);
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, [])

  async function signUp(nome, email, phone, password) {
    setLoadingAuth(true);
  
    try {
      const response = await api.post("/users", {
        name: nome,
        email: email,
        phone: phone,
        password: password,
      });
  
      setLoadingAuth(false);
  
    } catch (error) {
      console.log("Erro ao cadastrar!", error);
      setLoadingAuth(false);
    }
  }

  async function signIn(email, password) {
    setLoadingAuth(true);

    try {
      const response = await api.post("/login", {
        email: email,
        password: password,
      });

      const { id, name, phone, token } = response.data;

      await AsyncStorage.setItem("@finToken", token);

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      setUser({ id, name, email, phone });

      setLoadingAuth(false);

    } catch (error) {
      console.log("Erro ao logar!", error);
      setLoadingAuth(false);
    }
  }

  async function signOut(){
    await AsyncStorage.clear()
    .then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, signOut, loadingAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
