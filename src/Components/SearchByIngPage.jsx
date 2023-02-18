import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CocktailsCardsContainer from "./CocktailsCardsContainer";

export default function SearchByIngPage(props) {
  const [cocktails, setCocktails] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1c5860ed01msha3b050b90078ac4p131b0cjsn0a25d8682038',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };

  const fetchCocktails = (ingredient) => {
    fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${ingredient}`, options)
      .then(response => response.json())
      .then(response => {
        let cocktails = response.drinks;
        console.log(response.drinks);
        setCocktails(cocktails);
      })
      .catch(err => console.error(err));
  }

  const getData = (ing) => {
    console.log(ing);
    fetchCocktails(ing);
  }


  return (
    <div className="search">
      <SearchBar onClick={getData} />
      <CocktailsCardsContainer cocktails={cocktails} />
    </div >
  );

}