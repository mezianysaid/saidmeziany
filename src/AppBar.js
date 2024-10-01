import * as React from "react";
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
import logo from "./assets/Images/logo.PNG";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";

import "./App.css";

// import said from './assets/Images/3.jpg'
const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "About Us",
    path: "/aboutus",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const Navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = (path) => {
    setAnchorElNav(null);
    Navigate(`${path}`, { replace: true });
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  const onNavigateTo = (path) => {
    setAnchorElNav(null);
    Navigate(`${path}`, { replace: true });
  };
  return (
    <AppBar position="static" className="appBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Card
            sx={{
              display: { xs: "none", md: "flex" },
              width: 40,
              height: 40,
              borderRadius: "50%",
            }}
          >
            <img src={logo} alt="myLogo" width="100%" height="100%" />
          </Card>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              ml: 5,
              display: { xs: "none", md: "flex" },
              // fontFamily:'sans-serif',
              fontWeight: 900,
              letterSpacing: ".4rem",
              color: "#00f5d4",
              textDecoration: "none",
            }}
          >
            MEZIANY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}> </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}> </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => handleCloseNavMenu(page.path)}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MEZIANY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => onNavigateTo(page.path)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: "700",
                  borderColor: "white",
                  borderWidth: 1,
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Meziany Said">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Said" src={logo} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
