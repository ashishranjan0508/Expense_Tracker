import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import logo from '../assets/logoext.svg';
import { useNavigate } from "react-router-dom";

const pages = [
  { label: 'Budget', path: '/budget' },
  { label: 'Expense', path: '/expenses' },
  { label: 'Income', path: '/income' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //  CHANGED (logout handler)
  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 2, height: 40 }}
          />

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <Button
                  key={page.label}
                  onClick={() => {
                    navigate(page.path);
                    handleCloseNavMenu();
                  }}
                  sx={{ color: 'black', display: 'block' }}
                >
                  {page.label}
                </Button>
              ))}
            </Menu>
          </Box>

          {/* Desktop nav buttons */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => {
                  navigate(page.path);
                  handleCloseNavMenu();
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* CHANGED: Logout button instead of Avatar */}
<Button
  onClick={handleLogout}
  sx={{
    ml: 2,
    backgroundColor: 'red',   
    color: 'white',           
    '&:hover': {
      backgroundColor: 'darkred',
    },
  }}
>
  Logout
</Button>


        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
