import React from "react";
import Data from "../components/Data";
import Form from "../components/Form";

const About = () => {
  return (
    <div className="page">
      <h1 className="title">About</h1>
      {Data()}
      <Form />
    </div>
  );
};

export default About;
