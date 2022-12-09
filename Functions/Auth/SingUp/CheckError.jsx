import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const checkError = () => {
  const navigation = useNavigation();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const errorFunction = async (email, password) => {
    setIsLoading(true);
    setError("");

    const response = await fetch("http://172.20.10.2:8000/api/user/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      console.log(error);
    }
    if (response.ok) {
      setIsLoading(false);
      setError("");
    }
  };

  return { errorFunction, isLoading, error, setError };
};
