import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the server
    axios
      .post("http://localhost:5000/test/submit", formData, {})
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
