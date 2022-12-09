import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const checkError = () => {
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const errorFunction = async (email, password) => {
    setIsLoading(true);
    setErrorMessage(null);

    const response = await fetch("http://172.20.10.2:8000/api/user/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setErrorMessage(json.error);
      setMessage("There was an error");
      console.log(errorMessage);
    }
    if (response.ok) {
      setIsLoading(false);
      setMessage("");
      setErrorMessage("");
    }
  };

  useEffect(() => {
    errorFunction();
  }, []);

  return { errorFunction, isLoading, errorMessage, setErrorMessage, message };
};
