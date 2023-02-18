import React, { useState, useEffect } from "react";
import PopularCocktails from "./PopularCocktails";
import LatestCocktails from "./LatestCocktails";

import HomePageStyle from "./HomePageStyle.css";
// import DrinksByCategory from "./DrinksByCategory";

export default function HomePage(props) {

  //const categories = ["Old Fashioned", "Cocktail", "Ordinary", "Punch / Party Drink", "Other / Unknown", "Homemade Liqueur"];

  return (
    <div>
      <h1>Home Page</h1>
      <div className="popularCocktails">
        <h4>5 Top Popular Cocktails:</h4>
        <PopularCocktails />
      </div>
      <div className="popularCocktails">
        <h4>Latest Cocktails:</h4>
        <LatestCocktails />
      </div>
      {/* <div  className="popularCocktails">
        <h4>Search Cocktail by Category:</h4>
        <DrinksByCategory categories={categories} />
      </div> */}
    </div>
  );
}