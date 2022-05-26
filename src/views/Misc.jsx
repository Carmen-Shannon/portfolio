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
          <a href="https://carmen-shannon.github.io/Snake/" target={"_blank"}>
            <p>Play snake</p>
          </a>
          <a href="https://github.com/Carmen-Shannon/Snake" target={"_blank"}>
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
      <div className="loader">
          <div className="text">

          </div>
          
      </div>
    </>
  );
};

export default Misc;
