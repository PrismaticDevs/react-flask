import React from "react";
import Data from "../components/Data";

const About = () => {
  return (
    <div className="page">
      <h1 className="title">About</h1>
      {Data()}
    </div>
  );
};

export default About;
