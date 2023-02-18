import React, { useState, useEffect } from "react";
import CocktailSearchBar from "./SearchBar";
import CocktailsCardsContainer from "./CocktailsCardsContainer";

export default function SearchCocktailPage(props) {
  const [cocktails, setCocktails] = useState(null);
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1c5860ed01msha3b050b90078ac4p131b0cjsn0a25d8682038',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };

  const fetchCocktails = (cocktailName) => {
    fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${cocktailName}`, options)
      .then(response => response.json())
      .then(response => {
        let cocktails = response.drinks;
        // setCocktails(cocktails.map((cocktail) => (
        //   <CocktailCard key={cocktail.idDrink} cocktailData={cocktail} />
        // )))
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
    <div>
      {/* <CocktailSearchBar fetchCocktails={fetchCocktails} /> */}
      <CocktailSearchBar onClick={getData} />
      <CocktailsCardsContainer cocktails={cocktails} />
    </div>
  )
}
