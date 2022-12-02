import { useState } from "react";

export const interestFunction = () => {
  const [interest, setInterest] = useState([]);
  const [music, setMusic] = useState(true);
  const [art, setArt] = useState(true);

  const musicfun = (event) => {
    event.preventDefault();
    if (music == true) {
      setMusic((current) => !current);
      setInterest((current) => [...current, "music"]);
    } else {
      setMusic((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "music";
        })
      );
    }
  };

  const artfun = (event) => {
    event.preventDefault();
    if (art == true) {
      setArt((current) => !current);
      setInterest((current) => [...current, "art"]);
    } else {
      setArt((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "art";
        })
      );
    }
  };

  return { musicfun, artfun, interest };
};
