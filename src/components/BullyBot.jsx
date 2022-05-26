import React from "react";

const BullyBot = (props) => {
  return (
    <>
      <h2 className="heading">BullyBot</h2>
      <div className="loader">
        <div className="text">
          <a href="https://top.gg/bot/918618182518968372" target={"_blank"}>
            <p>deployed</p>
          </a>
          <a
            href="https://github.com/Carmen-Shannon/BullyBot2"
            target={"_blank"}
          >
            <p>github</p>
          </a>
          <p>
            BullyBot is currently being used in over 12 servers with a 24/7
            runtime. I use a VPS running Ubuntu 20 and am able to keep constant
            uptime by using process manager.
          </p>
          <p>BullyBot was originally written in python -</p>
          <a
            href="https://github.com/Carmen-Shannon/BullyBot"
            target={"_blank"}
          >
            <p>github</p>
          </a>
          <p>
            It was using Discord.py which is no longer maintained and so it was
            then re-written in Discord.js. The functionality remains virtually
            the same, some notable features are the ability to play audio from
            YouTube via a built-in search function, and a persistent database
            that stores each user a unique entry with data that gets tracked as
            you play the built in games using MongoDB and Mongoose.
          </p>
        </div>
        <div className="photocontainer">
          <img
            src={require("../views/images/BullyBot.png")}
            className="photo"
            alt="screenshot of the blackjack 21 game"
          />
          <img
            src={require("../views/images/BullyBot2.png")}
            className="photo"
            alt="screenshot of play command"
          />
          <img
            src={require("../views/images/BullyBot3.png")}
            className="photo"
            alt="screenshot of bot playing music"
          />
        </div>
      </div>
    </>
  );
};

export default BullyBot;
