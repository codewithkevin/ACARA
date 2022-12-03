import { useState } from "react";

export const interestFunction = () => {
  const [interest, setInterest] = useState([]);
  const [music, setMusic] = useState(true);
  const [art, setArt] = useState(true);
  const [party, setParty] = useState(true);
  const [tech, setTech] = useState(true);
  const [food, setFood] = useState(true);
  const [sport, setSport] = useState(true);
  const [movie, setMovie] = useState(true);

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

  const foodfun = (event) => {
    event.preventDefault();
    if (food == true) {
      setFood((current) => !current);
      setInterest((current) => [...current, "food"]);
    } else {
      setFood((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "food";
        })
      );
    }
  };

  const moviefun = (event) => {
    event.preventDefault();
    if (movie == true) {
      setMovie((current) => !current);
      setInterest((current) => [...current, "movie"]);
    } else {
      setMovie((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "movie";
        })
      );
    }
  };

  const sportfun = (event) => {
    event.preventDefault();
    if (sport == true) {
      setSport((current) => !current);
      setInterest((current) => [...current, "sport"]);
    } else {
      setSport((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "sport";
        })
      );
    }
  };

  const partyfun = (event) => {
    event.preventDefault();
    if (party == true) {
      setParty((current) => !current);
      setInterest((current) => [...current, "party"]);
    } else {
      setParty((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "party";
        })
      );
    }
  };

  const techfun = (event) => {
    event.preventDefault();
    if (tech == true) {
      setTech((current) => !current);
      setInterest((current) => [...current, "tech"]);
    } else {
      setTech((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "tech";
        })
      );
    }
  };

  return {
    foodfun,
    partyfun,
    techfun,
    musicfun,
    artfun,
    moviefun,
    sportfun,
    interest,
    art,
    music,
    food,
    sport,
    party,
    tech,
  };
};
