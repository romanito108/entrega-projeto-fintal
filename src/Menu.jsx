import React, { useState } from "react";
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
import CartWidget from "./CartWidget";
import { useMediaQuery } from "@mui/material"; // Para verificar a largura da tela
import "./Menu.css";

const pages = [
  { name: "Produtos", path: "/" },
  { name: "Categoria 1", path: "/category/1" },
  { name: "Categoria 2", path: "/category/2" },
  { name: "Carrinho", path: "/cart" }
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)"); // Verificando se é mobile

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Typography variant="h6" component="a" href="/" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>

          {/* Menu para desktop */}
          {!isMobile && (
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
          )}

          {/* Menu para mobile */}
          {isMobile && (
            <>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                sx={{ color: "white" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Link to={page.path} style={{ textDecoration: "none", color: "inherit" }}>
                      {page.name}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}

          <CartWidget /> 
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default ResponsiveAppBar;
