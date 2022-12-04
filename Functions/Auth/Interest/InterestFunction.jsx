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
  const [finance, setFinance] = useState(true);
  const [trip, setTrip] = useState(true);
  const [education, setEducation] = useState(true);
  const [exibihition, setExibihition] = useState(true);

  const financefun = (event) => {
    event.preventDefault();
    if (finance == true) {
      setFinance((current) => !current);
      setInterest((current) => [...current, "finance"]);
    } else {
      setFinance((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "finance";
        })
      );
    }
  };

  const tripfun = (event) => {
    event.preventDefault();
    if (trip == true) {
      setTrip((current) => !current);
      setInterest((current) => [...current, "trip"]);
    } else {
      setTrip((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "trip";
        })
      );
    }
  };

  const educationfun = (event) => {
    event.preventDefault();
    if (education == true) {
      setEducation((current) => !current);
      setInterest((current) => [...current, "education"]);
    } else {
      setEducation((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "education";
        })
      );
    }
  };

  const exibihitionfun = (event) => {
    event.preventDefault();
    if (exibihition == true) {
      setExibihition((current) => !current);
      setInterest((current) => [...current, "exhibition"]);
    } else {
      setExibihition((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "exhibition";
        })
      );
    }
  };

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
    financefun,
    finance,
    tripfun,
    trip,
    educationfun,
    education,
    exibihitionfun,
    exibihition,
    foodfun,
    partyfun,
    techfun,
    musicfun,
    movie,
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
