import React from "react";
import react from "../img/react.png";
import python from "../img/python.png";
import Form from "../components/Form";

const Home = () => {
  return (
    <div className="page">
      <h1 className="title">PrismaticDevs</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={react} style={{ height: "7em" }} alt="React" />
        <h1 style={{ paddingRight: "1em" }}>&</h1>
        <img src={python} alt="Flask" />
      </div>
      <Form />
    </div>
  );
};

export default Home;
