import React from "react";

const Pokedex = (props) => {
  return (
    <>
      <h2 className="heading">Pokedex</h2>
      <div className="loader">
        <div className="text">
          <a href="http://budget-pokedex.com/" target={"_blank"}>
            <p>deployed</p>
          </a>
          <a href="https://github.com/Carmen-Shannon/pokedex" target={"_blank"}>
            <p>github</p>
          </a>
          <p>
            My pokedex is a nice demonstration of a full CRUD application using
            Flask and Python, it's using the pokeapi to get the data it needs to
            populate the web page. It has working validations on the
            login/registration platform as well as a limit to the amount of
            Pokemon you can hold in your PC at any time.
          </p>
        </div>
        <div className="photocontainer">
          <img
            src={require("../views/images/Pokedex.png")}
            className="photo"
            alt="search page resulting in charizard"
          />
          <img
            src={require("../views/images/Pokedex2.png")}
            className="photo"
            alt="home page with two pokemon in pc"
          />
        </div>
      </div>
    </>
  );
};

export default Pokedex;
