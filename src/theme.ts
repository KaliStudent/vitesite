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
      color: '#3B3D3F',
      default: '#0f1115',             // --bg
      paper:   '#161a22',  
    }

  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Space Grotesk", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
});
