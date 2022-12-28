import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [data, setData] = useState({
    data: "",
  });
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:5000/data", {
          body: data.data,
        })
        .then((res) => {
          setData(res.data);
          console.log("data", data, 15);
        })
        .catch((e) => console.log(e));
    };
    getData();
    console.log(data);
  });
  return (
    <>
      <h3>{data.greetings}</h3>
    </>
  );
};

export default Data;
