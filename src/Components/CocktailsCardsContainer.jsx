import React from "react";
import CocktailCard from "./CocktailCard";
import "./CocktailsPageStyles.css";

export default function CocktailsCardsContainer(props) {
  return (
    <div className="cocktailsContainer">
      {props.cocktails &&
        props.cocktails.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} cocktailData={cocktail} />
        ))}
    </div >
  );
}
