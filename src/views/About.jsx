import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = (props) => {
  const onContact = () => {
    window.open("mailto:carmen.shannon16@gmail.com");
  };
  return (
    <>
      <div className="loader" id="0">
        <div className="text">
          <h2>About me:</h2>
          <p>
            I am a 25 year old software engineer with 7 years of experience in
            sales and finance. I have proficiencies in the following
            technologies:
          </p>
          <a
            href="https://github.com/Carmen-Shannon"
            target={"_blank"}
            rel="noreferrer"
          >
            <p>My github</p>
          </a>
          <ul>
            <li>MERN</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>React</li>
            <li>Node</li>
          </ul>
          <ul>
            <li>Python/Flask</li>
            <li>MySQL</li>
            <li>Python</li>
            <li>Flask</li>
          </ul>
          <ul>
            <li>Spring Boot</li>
            <li>Java</li>
            <li>Spring</li>
            <li>MySQL</li>
          </ul>
          <ul>
            <li>Other Technologies</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Vue</li>
            <li>Bash</li>
            <li>Git</li>
            <li>AWS</li>
            <li>GitHub</li>
          </ul>
          <p>
            I attended Becker College (Worcester, MA) in 2015 until 2017 where I
            pursued a career in sales.
          </p>
          <p>
            I have management and modeling experience from my time well-spent in
            the automotive sales industry.
          </p>
          <p>
            Please feel free to{" "}
            <Link to="#" className="link-span" onClick={onContact}>
              contact
            </Link>{" "}
            me regarding any business inquiries.
          </p>
        </div>
        <div className="photocontainer">
          <img
            src={require("./images/prize-photo.jpeg")}
            alt="rick from pawn stars and myself"
            className="photo"
          />
          <img
            src={require("./images/college.png")}
            alt="becker college"
            className="photo"
          />
          <img
            src={require("./images/dealer.jpeg")}
            alt="me in a car dealership"
            className="photo"
          />
        </div>
      </div>
    </>
  );
};

export default About;
