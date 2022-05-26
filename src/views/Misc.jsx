import React from "react";

const Misc = (props) => {
  return (
    <>
      <h2 className="heading">Small Projects</h2>
      <div className="loader">
        <div className="text">
          <p>
            Feel free to check out any of these small projects, some are works
            in progress while others are proofs of concept.
          </p>
        </div>
      </div>
      <div className="loader">
        <div className="text">
          <a
            href="https://carmen-shannon.github.io/Snake/"
            target={"_blank"}
            rel="noreferrer"
          >
            <p>Play snake</p>
          </a>
          <a
            href="https://github.com/Carmen-Shannon/Snake"
            target={"_blank"}
            rel="noreferrer"
          >
            <p>github</p>
          </a>
          <p>
            This small game was made using purely vanilla Javascript, HTML and
            CSS. It shows how to update data on a webpage in real-time as well
            as understanding of the basic functionality of web languages. Use
            'WASD' keys to move.
          </p>
        </div>
        <div className="photocontainer">
          <img
            src={require("./images/Snake2.png")}
            alt="screenshot of snake"
            className="photo"
          />
        </div>
      </div>
      <h2 className="heading">MERN Full CRUD App</h2>
      <div className="loader">
        <div className="text">
          <a href="https://github.com/Carmen-Shannon/MERN-Blackbelt">
            <p>github</p>
          </a>
          <p>
            This is a demonstration of a full CRUD application built using the
            MERN stack as part of a final exam. It has working validations and
            optional input fields and was created in less than five hours.
          </p>
        </div>
        <div className="photocontainer">
          <img
            src={require("../views/images/MERN.png")}
            alt="screenshot of mern app"
            className="photo"
          />
          <img
            src={require("../views/images/MERN2.png")}
            alt="screenshot of mern app"
            className="photo"
          />
          <img
            src={require("../views/images/MERN3.png")}
            alt="screenshot of MERN app"
            className="photo"
          />
        </div>
      </div>
      <h2 className="heading">Pac Man clone</h2>
      <div className="loader">
        <div className="text">
          <a
            href="https://carmen-shannon.github.io/PacMan/main/"
            target={"_blank"}
            rel="noreferrer"
          >
            <p>play pacman (kind of)</p>
          </a>
          <a
            href="https://github.com/Carmen-Shannon/PacMan"
            target={"_blank"}
            rel="noreferrer"
          >
            <p>github</p>
          </a>
          <p>
            This project was made in vanilla javascript and is ultimately just a
            demonstration similar to snake regarding the ability to use the
            Javascript DOM to update and change the page dynamically.
          </p>
        </div>
        <div className="photocontainer">
          <img
            src={require("../views/images/Pacman.png")}
            alt="pacman game"
            className="photo"
          />
        </div>
      </div>
    </>
  );
};

export default Misc;
