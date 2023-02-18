// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import SplitButton from 'react-bootstrap/SplitButton';
import React, { useState } from 'react';
import CocktailCard from "./CocktailCard";

export default function DrinksByCategory(props) {
  const categories = props.categories;
  const [cocktails, setCocktails] = useState(null);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1c5860ed01msha3b050b90078ac4p131b0cjsn0a25d8682038',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };

  const fetchCocktailsByCat = (category) => {
    fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?c=${category}`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response.drinks);
        let drinks = response.drinks;
        let str = drinks.map((drink) => (
          <CocktailCard key={drink.idDrink} cocktailData={drink} />
        ))
        setCocktails(str);
      })
      .catch(err => console.error(err));
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    let cat = e.target.value;
    fetchCocktailsByCat(cat);
  };

  // [selectedOption, setSelectedOption] = useState(null);

  // // const change = (event) => {
  // //   setSelectedOption({ value: event.target.value });
  // // }
  return (
    <div>
      <select
        onChange={e => handleChange(e)}>
        {categories.map(cat => {
          return (
            <option value={cat}> {cat} </option>
          )
        })}
      </select>
      {cocktails}
    </div>
  );
}