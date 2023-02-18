import React, { useState } from "react";
import { grey } from "@mui/material/colors";
import "./CocktailsPageStyles.css";


import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function SearchBar(props) {
  const [input, setInput] = useState("");
  //const [ingredient, setIngredient] = useState(null);

  const fetchCocktailByName = () => {
    input.length > 2 && props.onClick(input);
  };

  const handleClick =() =>{
    props.onClick(input);
  }

  const inputHandler = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="searchBar">
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        id="outlined-basic"
        className="searchInput"
        variant="filled"
        placeholder="Search Cocktail by name"
        inputProps={{ 'aria-label': 'search cocktail by name' }}
        onChange={inputHandler}
        onKeyPress={(e) => e.key === "Enter" && fetchCocktailByName()}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleClick}
        onMouseEnter={(e) => {
          e.target.style.background = grey[400];
          e.target.style.borderRadius = "5px";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "none";
        }}>
        <SearchIcon />
      </IconButton>
    </div>
  );
}
