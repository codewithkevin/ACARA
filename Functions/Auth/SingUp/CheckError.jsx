import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const checkError = () => {
  const navigation = useNavigation();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const errorFunction = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://172.20.10.2:8000/api/user/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (response.ok) {
      setIsLoading(false);
    }

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      console.log(error);
    }
  };

  return { setIsLoading, errorFunction, isLoading, error, setError };
};
