import React from 'react';
import { Paper, PaperProps } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

interface GlassCardProps extends PaperProps {
  children: React.ReactNode;
  intensity?: 'light' | 'medium' | 'strong';
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  intensity = 'medium',
  className = '',
  ...props
}) => {
  const theme = useTheme();

  // Tune translucency once here; works in both light & dark palettes
  const levels = {
    light:  { bgA: 0.08, borderA: 0.20, blur: 4 },
    medium: { bgA: 0.16, borderA: 0.30, blur: 8 },
    strong: { bgA: 0.24, borderA: 0.40, blur: 12 },
  }[intensity];

  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{
        bgcolor: alpha(theme.palette.background.paper, levels.bgA),
        borderColor: alpha(theme.palette.divider, levels.borderA),
        backdropFilter: `blur(${levels.blur}px)`,
        WebkitBackdropFilter: `blur(${levels.blur}px)`,
        borderRadius: theme.shape.borderRadius,
        color: theme.palette.text.primary,
      }}
      className={className} // keep spacing/layout classes if you pass them
      {...props}
    >
      {children}
    </Paper>
  );
};

export default GlassCard;
