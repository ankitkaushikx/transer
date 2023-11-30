import React from "react";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

function GoogleLoginButton() {
  const handleGoogleLogin = () => {};

  return (
    <Button
      variant="contained"
      color="error" // You can customize the color
      startIcon={<GoogleIcon />} // Google icon
      onClick={handleGoogleLogin}
      style={{ marginTop: "8px" }}
    >
      Login with Google
    </Button>
  );
}

export { GoogleLoginButton };
