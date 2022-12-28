import React from "react";
import react from "../img/react.png";
import python from "../img/python.png";

const Home = () => {
  return (
    <div className="page">
      <h1 className="title">PrismaticDevs</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={python} alt="Flask" />
        <img src={react} style={{ height: "7em" }} alt="React" />
      </div>
    </div>
  );
};

export default Home;
