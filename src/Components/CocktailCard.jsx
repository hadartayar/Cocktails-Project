import React, { useState } from 'react';
import "./CocktailsPageStyles.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';

export default function CocktailCard(props) {
  const cocktailData = props.cocktailData;
  const [showModal, setShowModal] = useState(false);

  const getIngredients = cocktail => {
    let i = 1;  //The ingredients starts from 1
    let ingStr = `strIngredient${i}`;
    let content = [];

    while (cocktail[ingStr] != null) {
      content.push(<p><li key={cocktail.idDrink}>{cocktail[ingStr]}</li></p>);
      i++;
      ingStr = `strIngredient${i}`;
    }
    return content;
  }

  const getMeasures = cocktail => {
    let i = 1;  //The ingredients starts from 1
    let measureStr = `strMeasure${i}`;
    let content = [];

    while (cocktail[measureStr] != null) {
      content.push(<p>{cocktail[measureStr]}</p>);
      i++;
      measureStr = `strMeasure${i}`;
    }
    return content;
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: "center"
  };

  return (
    <div className="card" style={{height:"100%"}} >
      <img className="image" src={cocktailData.strDrinkThumb} alt="" />
      <div className="cocktailInfo">
        <b className="cocktailName">{cocktailData.strDrink}</b>
        <h5>{cocktailData.strCategory}</h5>
        <div className="cocktailInstruction">{cocktailData.strInstructions}</div>
      </div>
      <div className="footer">
        <Button className="btnViewMore" variant="outlined" onClick={() => setShowModal(true)}>
          View More...
        </Button>
      </div>

      <>
        <Modal
          size="lg"
          open={showModal}
          onClose={() => setShowModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img className="modalImg" src={cocktailData.strDrinkThumb} alt="" />
            <hr></hr>
            <Typography id="modal-modal-title" className="cocktailName" variant="h6" component="h2">
              <b className="cocktailName">{cocktailData.strDrink}</b>
            </Typography>
            <h5>{cocktailData.strCategory}</h5>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {cocktailData.strInstructions}
            </Typography>
            <br></br>
            <Container>
              <Row>
                <Col>
                  <Typography>
                    <h4>Ingredients:</h4>
                    <ul>{getIngredients(cocktailData)}</ul>
                  </Typography>
                </Col>
                <Col>
                  <Typography>
                    <h4>Measures:</h4>
                    <ul>{getMeasures(cocktailData)}</ul>
                  </Typography>
                </Col>
              </Row>
            </Container>
          </Box>
        </Modal>
      </>
    </div>
  );
}
