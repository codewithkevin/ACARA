import { useState, useEffect } from "react";

export const SendCode = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const sendMail = async (email) => {
    setError(null);

    const response = await fetch("http://172.20.10.2:8000/api/user/sendmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      console.log(error);
    }
    if (response.ok) {
      setIsLoading(false);
      console.log(`Code Sent to ${email}`);
    }
  };

  return { sendMail };
};
