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
          const d = res.data;
          setData(d);
          console.log("data", data, 15);
        })
        .catch((e) => console.log(e));
    };
    getData();
    console.log(data);
  });
  return (
    <>
      <div style={{ textAlign: "center", padding: "3em" }}>
        The data displayed below is fetched from a a back end webserver built
        with a Python module called Flask.
      </div>
      <article
        style={{
          display: "flex",
          alignItems: " center",
          justifyContent: "center",
        }}
      >
        {typeof data.greetings === "undefined" ? (
          <h2>Loading...</h2>
        ) : (
          data.greetings.map((greeting, i) => <h4 key={i}>{greeting}</h4>)
        )}
      </article>
    </>
  );
};

export default Data;
