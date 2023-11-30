// Footer.js
import React from "react";
import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ViewListIcon from "@mui/icons-material/ViewList";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

const Footer = () => {
  return (
    <Paper
      component="footer"
      elevation={3}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "#555",
      }}
    >
      <Grid container spacing={2}>
        {/* Left icons */}
        <Grid item xs={2}>
          <Fab component={Link} to="/" color="primary" size="small">
            <HomeIcon />
          </Fab>
        </Grid>
        <Grid item xs={2}>
          <Fab component={Link} to="/list" color="primary" size="small">
            <ViewListIcon />
          </Fab>
        </Grid>

        {/* Center floating icon */}
        <Grid item xs={4} style={{ position: "relative", top: "-25px" }}>
          <Fab component={Link} to="/add" color="primary" size="large">
            <AddIcon />
          </Fab>
        </Grid>

        {/* Right icons */}
        <Grid item xs={2}>
          <Fab component={Link} to="/user" color="primary" size="small">
            <AccountCircleIcon />
          </Fab>
        </Grid>
        <Grid item xs={2}>
          <Fab component={Link} to="/settings" color="primary" size="small">
            <SettingsIcon />
          </Fab>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
