// Home.js
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <div>
        <h2>List of Elements</h2>
        <ul>
          {Array.from({ length: 100 }, (_, index) => (
            <li key={index}>{index + 1}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
