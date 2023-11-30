import React, { useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { GoogleLoginButton } from "./formElements";

const LoginForm = () => {
  function ankitkaushik() {
    console.log("Helo");
  }
  useEffect(() => {
    const handleSubmit = async (e) => {
      // e.preventDefault();

      try {
        const response = await axios.post("/auth/login", {
          phone: e.target.phone.value,
          password: e.target.password.value,
        });

        console.log(response.data); // Handle successful login
      } catch (error) {
        console.error("Login failed", error);
      }
    };

    // You can call the function here if needed
    handleSubmit();

    // Clean up function (optional)
    return () => {
      // Cleanup code if needed
    };
  }, []); // Empty dependency array ensures useEffect runs once when the component mounts

  return (
    <>
      <form
        onSubmit={ankitkaushik}
        style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto" }}
      >
        <TextField label="Phone Number" name="username" variant="outlined" margin="normal" required />
        <TextField label="Password" name="password" type="password" variant="outlined" margin="normal" required />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: "16px" }}>
          Login
        </Button>
        <GoogleLoginButton />
      </form>
    </>
  );
};

export default LoginForm;
