import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const navLinks = {
    Home: "/",
    About: "/about",
    Contact: "/contact",
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" style={{ fontFamily: "Nunito" }}>
            Transer
          </Typography>
          <div
            style={{ display: "flex", gap: "20px", flexWrap: "wrap", visibility: isDrawerOpen ? "hidden" : "visible" }}
          >
            {Object.keys(navLinks).map((itemName, index) => (
              <a
                key={index}
                href={navLinks[itemName]}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontFamily: "Nunito",
                }}
              >
                <Typography variant="h6" style={{ fontFamily: "Nunito" }}>
                  {itemName}
                </Typography>
              </a>
            ))}
          </div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          {Object.keys(navLinks).map((itemName, index) => (
            <ListItem button key={index}>
              <a href={navLinks[itemName]} style={{ textDecoration: "none", color: "inherit", fontFamily: "Nunito" }}>
                {itemName}
              </a>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
