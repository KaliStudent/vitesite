// src/theme.ts
import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    mode: 'dark',
    primary:   { main: '#8b5cf6' },   // --primary
    secondary: { main: '#38bdf8' },   // --secondary
    error:     { main: '#f43f5e' },   // close to accent for errors (optional)
    text: {
      primary:   '#e5e7eb',           // --text
      secondary: '#9aa3b2',           // --muted
    },
    divider: '#222733',               // --border
    background: {
      default: '#0f1115',             // --bg
      paper:   '#161a22',             // --surface
    },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Space Grotesk", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4
    },
    h4: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5
    },
    h6: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.5
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 16
  }
});

export default theme;
