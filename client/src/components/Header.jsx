import React, { useEffect, useState } from "react";
import axios from "axios";
function Header() {
  const [nav, setNav] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/header")
      .then((res) => {
        console.log("Nav Data", res.data);
        setNav(res.data);
      })
      .catch((error) => {
        console.log("Axios Error Header", error);
      });
  }, []);

  return (
    <>
      <ul>
        {Object.keys(nav).map((itemName, index) => {
          return (
            <li key={index}>
              <a href="{nav[itemName]}">{itemName}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Header;
