import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthContext } from './../useAuthContext';

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [userEmail, setUserEmail] = useState();
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, name) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://172.20.10.2:8000/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    });

    const json = await response.json();
    

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      await AsyncStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      // update loading state
      setIsLoading(false);

      //Email
      setUserEmail(json.email);
    }
  };

  return { signup, isLoading, error, userEmail };
};
