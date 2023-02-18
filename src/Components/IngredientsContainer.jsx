import React from "react";
import { Box } from "@mui/material";

//import IngCard from "./IngCard";
// import "./IngredientsPageStyles.css";

export default function IngredientsContainer(props) {
  const Item = (props) => {
    const { sx, ...other } = props;
    return (
      <Box
        className="BoxItem"
        sx={{
          // bgcolor: global.config.theme === "dark" ? "#424242" : "#d3dbe8",
          // color: global.config.theme === "dark" ? "white" : "#black",
          p: 0.4,
          m: 0.4,
          marginLeft: 0,
          borderRadius: 0.75,
          textAlign: "center",
          fontSize: "1.1rem",
          fontWeight: "700",
          display: "flex",
          justifyContent: "space-between",
          ...sx,
        }}
        {...other}
      />
    );
  };


    return (
      <div xs={12} md={5}>
        <Item>
          <u>{props.text}</u> {props.data}
        </Item>
      </div>
    );
}
