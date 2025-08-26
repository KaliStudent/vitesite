import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton, Drawer, Stack,
  useMediaQuery, useTheme
} from '@mui/material';
import { alpha } from '@mui/material/styles';
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
  const isActive = (p: string) => location.pathname === p;

  const handleDrawerToggle = () => setMobileOpen((o) => !o);

  const drawer = (
    <Stack
      sx={{
        height: '100%',
        bgcolor: alpha(theme.palette.background.paper, 0.95),
        color: theme.palette.text.primary,
        backdropFilter: 'blur(12px)',
        p: 3,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <Typography variant="h6" fontWeight={700}>Portfolio</Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: theme.palette.text.secondary }}>
          <CloseIcon />
        </IconButton>
      </Stack>

      <Stack spacing={1.5}>
        {navItems.map((item) => (
          <Button
            key={item.path}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            variant={isActive(item.path) ? 'contained' : 'text'}
            sx={{
              justifyContent: 'flex-start',
              borderRadius: 3,
              px: 2, py: 1.5,
              ...(isActive(item.path)
                ? {
                    color: theme.palette.getContrastText(theme.palette.primary.main),
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    boxShadow: theme.shadows[4],
                  }
                : {
                    color: theme.palette.text.primary,
                    '&:hover': { bgcolor: alpha(theme.palette.text.primary, 0.08) },
                  }),
            }}
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
        elevation={0}
        sx={{
          bgcolor: alpha(theme.palette.background.paper
