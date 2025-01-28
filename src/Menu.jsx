import React from "react";
import { Link } from "react-router-dom"; 
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import CartWidget from "./CartWidget";
import "./Menu.css";
const pages = [
  { name: "Produtos", path: "/" },
  { name: "Categoria 1", path: "/category/1" },
  { name: "Categoria 2", path: "/category/2" }
];

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Typography variant="h6" component="a" href="/" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Box sx={{ display: "flex" }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link} 
                to={page.path}
                sx={{ color: "white" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <CartWidget /> 
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default ResponsiveAppBar;
