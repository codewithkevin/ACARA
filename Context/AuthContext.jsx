import { createContext, useReducer, useEffect } from "react";
import { AuthReducer } from "./../Reducers/AuthReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, { user: null });

  console.log("AuthContext state: ", state);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        const  jsonUser = JSON.parse(user)
        if (jsonUser) {
          dispatch({ type: "LOGIN", payload: user });
        }
      } catch {}
    };
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
