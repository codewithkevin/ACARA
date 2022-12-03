import { useState } from "react";

export const checkError = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const errorFunction = async (email, password, name) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://172.20.10.2:8000/api/user/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      console.log(error);
    }
    if (response.ok) {
      // update loading state
      setIsLoading(false);
      console.log("Successfully");
    }
  };

  return { errorFunction, isLoading, error };
};
