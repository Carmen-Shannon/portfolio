import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const [show, setShow] = useState(true);
  const [lastPos, setLastPos] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > lastPos) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastPos(() => {
      return window.scrollY;
    });
  };

  const onContact = () => {
    window.open("mailto:carmen.shannon16@gmail.com");
  };

  const resetHandler = () => {
    let activeCards = document.getElementsByClassName("card active");
    if (activeCards.length > 0) {
      activeCards[0].className = "card inactive";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
  }, [lastPos]);
  return (
    <div className={`${show ? "headercontainer" : "headercontainer hidden"}`}>
      <Link to="/" className="link" onClick={resetHandler}>
        <h4>HOME</h4>
      </Link>
      <div className="rightcontainer">
        <Link to="#" className="link" onClick={onContact}>
          <h4>CONTACT</h4>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
