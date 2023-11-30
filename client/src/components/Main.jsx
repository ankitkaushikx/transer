import React, { useState, useEffect } from "react";
import axios from "axios";
function Main() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/home")
      .then((res) => {
        const data = res.data;
        setData(data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err, "Axios Error");
      });
  }, []);

  return (
    <>
      <h1>{data}</h1>
    </>
  );
}

export default Main;
