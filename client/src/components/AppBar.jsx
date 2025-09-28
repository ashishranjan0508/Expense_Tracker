import React from 'react';
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
import { useNavigate, useLocation } from "react-router-dom";

const pages = [
  { label: 'Budget', path: '/budget' },
  { label: 'Expense', path: '/expenses' },
  { label: 'Income', path: '/income' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  const getButtonColors = (pageLabel) => {
    switch (pageLabel) {
      case 'Budget':
        return {
          hover: '#CCCC00', // Darker yellow for hover
          active: '#FFD700', // Professional yellow for active
        };
      case 'Expense':
        return {
          hover: '#B22222', // Darker red for hover
          active: '#DC143C', // Red for active
        };
      case 'Income':
        return {
          hover: '#006400', // Darker green for hover
          active: '#008000', // Professional green for active
        };
      default:
        return {
          hover: 'rgba(255, 255, 255, 0.1)',
          active: 'rgba(255, 255, 255, 0.2)',
        };
    }
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
                  sx={{ 
                    color: 'black',
                    display: 'block',
                    width: '100%',
                    justifyContent: 'flex-start',
                    '&:hover': {
                      backgroundColor: getButtonColors(page.label).hover,
                    },
                    ...(location.pathname === page.path && {
                      backgroundColor: getButtonColors(page.label).active,
                      color: 'white', // Ensure text is visible on colored background
                    }),
                  }}
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
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  '&:hover': {
                    backgroundColor: getButtonColors(page.label).hover,
                  },
                  ...(location.pathname === page.path && {
                    backgroundColor: getButtonColors(page.label).active,
                  }),
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* Logout button */}
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