import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const ConfirmCode = () => {
  const navigation = useNavigation();
  const [error, setError] = useState(error);
  const [isLoading, setIsLoading] = useState(true);

  const confirmCode = async (confirm, email, password) => {
    setIsLoading(true);
    setError("");

    const response = await fetch(
      "http://172.20.10.2:8000/api/user/confirmcode",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirm }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      console.log(error);
      console.log("Error");
    }
    if (response.ok) {
      setIsLoading(false);
      console.log("Code Confirmed");
      navigation.navigate("interest", {
        email: email,
        password: password,
      });
    }
  };

  return { confirmCode };
};
