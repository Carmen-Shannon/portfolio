import React from "react";

const FootballApi = (props) => {
  return (
    <>
      <h2 className="heading">NFL API</h2>
      <div className="loader">
        <div className="text">
          <a href="http://144.172.67.144/athletes" target={"_blank"}>
            <p>deployed</p>
          </a>
          <a
            href="https://github.com/Carmen-Shannon/fantasyproject/tree/NFL-API"
            target={"_blank"}
          >
            <p>github</p>
          </a>
          <p>
            This is a REST api made with Java and Spring Boot. It is designed to
            deliver most major stats for a player or team in the 2021 season. It
            is made by taking data in the form of CSV files and translating it
            over to Java objects where the data gets 'cleaned' and passed into a
            persistent databse (MySQL).
          </p>
          <p>
            The relationships are created and managed in Java between the
            objects which allows the teams to contain an active roster of
            players, try changing the url of the api to
            http://144.172.67.144/teams or even add /search/*yoursearchhere*.
          </p>
          <p>
            Some notable features of this project are the design behind it. It
            was made to be able to accept and deliver accurate data without much
            work involved in translating the data itself. Since the program can
            parse CSV files, a simple excel spreadsheet with the data you wish
            to enter can be created and uploaded to the database. You can also
            use the same feature to update specific player information
          </p>
        </div>
        <div className="photocontainer">
          <img
            src={require("../views/images/NFLAPI.png")}
            alt="screenshot of return data from a search containing tom"
            className="photo"
          />
          <img
            src={require("../views/images/NFLAPI2.png")}
            alt="screenshot of return data from a search containing ne"
            className="photo"
          />
        </div>
      </div>
    </>
  );
};

export default FootballApi;
