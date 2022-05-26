import React from "react";
import BullyBot from "../components/BullyBot";
import FootballApi from "../components/FootballApi";
import Pokedex from "../components/Pokedex";

const Products = (props) => {
  return (
    <>
      <BullyBot />
      <Pokedex />
      <FootballApi />
    </>
  );
};

export default Products;
