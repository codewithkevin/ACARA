import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const ConfirmCode = () => {
  const navigation = useNavigation();
  const [error, setError] = useState(error);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

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
      setIsError(true);
      console.log(error);
    }
    if (response.ok) {
      setIsLoading(false);
      setIsConfirm(true);
      console.log("Code Confirmed");
    }
  };

  return { confirmCode, isConfirm, isError, error };
};
