import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const Data = () => {
  const [data, setData] = useState({
    data: "",
  });
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:5001/data", {
          body: data.data,
        })
        .then((res) => {
          const d = res.data;
          if (d !== null) {
            setData(d);
          }
        })
        .catch((e) => console.log(e));
    };
    if (data.data === "") {
      getData();
    }
  }, [data]);
  return (
    <>
      <div style={{ textAlign: "center", padding: "3em" }}>
        The data displayed below is being fetched from a back end webserver
        built with a Python module called Flask.
      </div>
      <article
        style={{
          display: "flex",
          alignItems: " center",
          justifyContent: "center",
        }}
      >
        {typeof data.greetings === "undefined" ? (
          <Spinner />
        ) : (
          data.greetings.map((greeting, i) => (
            <h2 style={{ margin: 1 }} key={i}>
              {greeting}
            </h2>
          ))
        )}
      </article>
    </>
  );
};

export default Data;
