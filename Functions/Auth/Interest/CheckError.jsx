import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const CheckError = () => {
  const navigation = useNavigation();
  const [error, setError] = useState(error);
  const [isLoading, setIsLoading] = useState(true);

  const errorFunction = async (interest, email, password) => {
    setIsLoading(true);
    setError(error);

    const response = await fetch(
      "http://172.20.10.2:8000/api/user/checkinterest",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ interest }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      console.log(error);
    }
    if (response.ok) {
      setIsLoading(false);
      navigation.navigate("profile", {
        email: email,
        password: password,
        interest: interest,
      });
    }
  };

  return { errorFunction, isLoading, error, setError };
};
