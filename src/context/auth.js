import { createContext, useContext, useEffect, useState } from "react";
import * as authenticate from "../services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { constants } from "../config/constants";
import { View, ActivityIndicator } from "react-native";
import { colors } from "../styles/config.styles";
import api from "../config/request";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [investor, setInvestor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageInvestor = await AsyncStorage.getItem(constants.INVESTOR);
      const storageToken = await AsyncStorage.getItem(constants.INVESTOR_TOKEN);

      setLoading(false);

      if (storageInvestor && storageToken) {
        api.defaults.headers.common["api_token"] = JSON.parse(storageToken);
        setInvestor(JSON.parse(storageInvestor));
      }
    }

    loadStorageData();
  }, []);

  const signIn = async () => {
    const { data, error } = await authenticate.signIn();

    setInvestor(data?.investor);

    api.defaults.headers.common["api_token"] = data?.token;

    await AsyncStorage.setItem(
      constants.INVESTOR,
      JSON.stringify(data?.investor)
    );

    await AsyncStorage.setItem(
      constants.INVESTOR_TOKEN,
      JSON.stringify(data?.token)
    );
  };

  const signOut = async () => {
    await AsyncStorage.clear();
    return setInvestor(null);
  };

  return (
    <AuthContext.Provider
      value={{ investor, signed: !!investor, signIn, signOut }}
    >
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color={colors.grayDark} />
        </View>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
