import { createContext, useReducer, useEffect } from "react";
import { AuthReducer } from "./../Reducers/AuthReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, { user: null });

  console.log("AuthContext state: ", state);

  useEffect(() => {
    
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
