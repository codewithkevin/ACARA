import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const checkError = () => {
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const errorFunction = async (email, password) => {
    setIsLoading(true);
    setError(true);
    // setErrorMessage(null);

    const response = await fetch("http://172.20.10.2:8000/api/user/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setErrorMessage(json.error);
      setError(true);
      console.log(errorMessage);
      console.log("Error: " + error);
    }
    if (response.ok) {
      setIsLoading(false);
      setError(false);
      console.log("Error: " + error);
    }
  };

  useEffect(() => {
    errorFunction();
  }, []);

  return {
    errorFunction,
    isLoading,
    errorMessage,
    setErrorMessage,
    error,
    setError,
  };
};
