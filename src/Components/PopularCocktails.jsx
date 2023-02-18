import React, { useState, useEffect } from "react";
import PopularCardsContainer from "./PopularCardsContainer";
import CocktailsCardsContainer from "./CocktailsCardsContainer";

export default function PopularCocktails() {
  const [popularCocktails, setPopularCocktails] = useState(null);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1c5860ed01msha3b050b90078ac4p131b0cjsn0a25d8682038',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };
  
  const fetchPopularCocktails = () => {
  fetch('https://the-cocktail-db.p.rapidapi.com/popular.php', options)
    .then(response => response.json())
    .then(response =>{ 
      console.log(response)
      let cocktails= response.drinks;
      setPopularCocktails(cocktails.slice(0,5));
    })
    .catch(err => console.error(err));
  };

  useEffect(() => {
    console.clear();
    fetchPopularCocktails();
  }, []);

  return (
    <div>
      <CocktailsCardsContainer cocktails={popularCocktails}/>
    </div>
  );
}