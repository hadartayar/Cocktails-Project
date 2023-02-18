import React, { useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function IngredientsContainer(props) {
  const [lgShow, setLgShow] = useState(props.visible);
  const [cocktailData, setCocktailData] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1c5860ed01msha3b050b90078ac4p131b0cjsn0a25d8682038',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetchCocktailByID(props.cockId);
  }, []);

  const fetchCocktailByID = (cocktailId) => {
  fetch(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${cocktailId}`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      let cocktail = response.drinks;
      setCocktailData(cocktail);
    })
    .catch(err => console.error(err));
  }

  const getIngredients = cocktail => {
    let i=1;  //The ingredients starts from 1
    let ingStr= `strIngredient${i}`;    
    let content = [];

    while(cocktail[ingStr]!= null){
      ingStr= `strIngredient${i}`;
      content.push(<li key={cocktail.idDrink}>{cocktail[ingStr]}</li>);
      i++;
    }
    return content;
  }

  return (
    <>
      {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
          {cocktailData.strDrink}
          </Modal.Title>
          <img className="image" src={cocktailData.strDrinkThumb} alt="" />
          <h4>{cocktailData.strCategory}</h4>
        <div className="cocktailInstruction">{cocktailData.strInstructions}</div>
        </Modal.Header>
        <Modal.Body>
          <ul>{getIngredients(cocktailData)}</ul>
        </Modal.Body>
      </Modal>
    </>
  );
}
