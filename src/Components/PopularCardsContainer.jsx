import React from "react";
import CocktailCard from "./CocktailCard";
import "./CocktailsPageStyles.css";
import ReactCardCarousel from 'react-card-carousel';

export default function PopularCardsContainer(props) {
  return (
    <div style={{marginTop: "10px"}}>
      <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
        {props.cocktails &&
          props.cocktails.map((cocktail) => (
            <CocktailCard key={cocktail.idDrink} cocktailData={cocktail} />
          ))}
      </ReactCardCarousel >

      
    </div>
  );
}
