import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Stack,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

const Navigation: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Stack className="h-full bg-white/95 backdrop-blur-lg p-6">
      <Stack direction="row" justifyContent="space-between" alignItems="center" className="mb-8">
        <Typography variant="h6" className="font-bold text-gray-900">
          Portfolio
        </Typography>
        <IconButton onClick={handleDrawerToggle} className="text-gray-600">
          <CloseIcon />
        </IconButton>
      </Stack>
      <Stack spacing={3}>
        {navItems.map((item) => (
          <Button
            key={item.path}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            className={`justify-start text-left p-4 rounded-2xl transition-all ${
              location.pathname === item.path
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
    </Stack>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100"
        elevation={0}
      >
        <Toolbar className="px-6 lg:px-12">
          <Typography
            variant="h6"
            component={Link}
            to="/"
            className="flex-grow font-bold text-gray-900 no-underline hover:text-indigo-600 transition-colors"
          >
            Portfolio
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="text-gray-700"
            >
              <DehazeIcon />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={1}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  className={`px-6 py-2 rounded-full transition-all ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        className="md:hidden"
        PaperProps={{
          className: 'w-80 bg-transparent'
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;