import React, { useState, useEffect } from "react";
// import PopularCardsContainer from "./PopularCardsContainer";
import CocktailsCardsContainer from "./CocktailsCardsContainer";

export default function LatestCocktails() {
  const [latestCocktails, setLatestCocktails] = useState(null);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1c5860ed01msha3b050b90078ac4p131b0cjsn0a25d8682038',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };

  const fetchLatestCocktails = () => {
    fetch('https://the-cocktail-db.p.rapidapi.com/latest.php', options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        let cocktails = response.drinks;
        setLatestCocktails(cocktails);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    console.clear();
    fetchLatestCocktails();
  }, []);

  return (
    <div>
      <CocktailsCardsContainer cocktails={latestCocktails} />
    </div>
  );
}