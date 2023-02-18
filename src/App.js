import React from 'react';
import './App.css';
import SearchCocktail from './Components/SearchCocktailPage';
import SearchByIng from './Components/SearchByIngPage';

import HomePage from './Components/HomePage';
import ResponsiveAppBar from "./Components/ResponsiveAppBar";

function App() {
  return (
    <div className="App">
      {/* <ResponsiveAppBar/> */}
      <SearchByIng />
      {/* <SearchCocktail/> */}
    </div>
  );
}

export default App;
