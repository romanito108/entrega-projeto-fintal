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
import { useMediaQuery } from "@mui/material"; 
import "./Menu.css";

const pages = [
  { name: "Produtos", path: "/" },
  { name: "Booster Pokémon", path: "/category/1" },
  { name: "Booster Magic", path: "/category/2" },
  { name: "Booster Yu-gi-oh", path: "/category/3" },
  { name: "Carrinho", path: "/cart" }
];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)"); 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (

 
<AppBar position="static" sx={{ bgcolor: "#1a237e", marginBottom: "40px"  }}> 

  <Toolbar>

  <Typography
  variant="h6"
  component="div" // Permite usar como div
  sx={{
    flexGrow: 1,
    color: "#ffffff",
    textDecoration: "none",
    textAlign: "center", // Centraliza o conteúdo
  }}
>
  <Typography
    variant="h4" // Subtítulo dentro
    component="h2"
    sx={{
      margin: 2, // Remove margem padrão
      fontSize: "3.5rem", // Ajuste do tamanho da fonte
    }}
  >
    Boosteeer Shooop
  </Typography>
</Typography>


    {/* Menu Desktop */}
    {!isMobile && (
      <Box sx={{ display: "flex" }}>
        {pages.map((page) => (
          <Button
            key={page.name}
            component={Link}
            to={page.path}
            sx={{
              color: "#ffffff", // Cor do texto
              "&:hover": { bgcolor: "#3949ab" }, // Fundo ao passar o mouse
            }}
          >
            {page.name}
          </Button>
        ))}
      </Box>
    )}

    {/* Menu Mobile */}
    {isMobile && (
      <>
        <IconButton
          size="large"
          aria-label="menu"
          onClick={handleOpenNavMenu}
          sx={{ color: "white" }} // Ícone de menu
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
          sx={{
            "& .MuiPaper-root": { bgcolor: "#1a237e" }, // Cor do menu mobile
          }}
        >
          {pages.map((page) => (
            <MenuItem
              key={page.name}
              onClick={handleCloseNavMenu}
              sx={{
                color: "#ffffff", // Cor do texto
                "&:hover": { bgcolor: "#3949ab" }, // Fundo ao passar o mouse
              }}
            >
              <Link
                to={page.path}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {page.name}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </>
    )}

    {/* CartWidget (sem alterações) */}
    <CartWidget />
  </Toolbar>
</AppBar>

  );
}

export default ResponsiveAppBar;
