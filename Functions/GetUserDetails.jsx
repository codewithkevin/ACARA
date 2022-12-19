import { useState } from "react";
import { useAuthContext } from "./../Hooks/Auth/useAuthContext";

export const GetUserDetails = () => {
  const { user } = useAuthContext();
  const [details, setDetails] = useState(user.details);
  const [username, setUsername] = useState();
  const [interest, setInterest] = useState([]);
  const [email, setEmail] = useState();

  const getData = async () => {
    details.map((item) => {
      setUsername(item.username);
      setEmail(item.email);
      setInterest(item.interest);
    });
  };

  return { getData, email, interest, details, username };
};
