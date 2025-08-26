import React from 'react';
import { Paper, PaperProps } from '@mui/material';

interface GlassCardProps extends PaperProps {
  children: React.ReactNode;
  intensity?: 'light' | 'medium' | 'strong';
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  intensity = 'medium', 
  className = '', 
  ...props 
}) /*=> {
  const intensityClasses = {
    light: 'bg-white/10 backdrop-blur-sm border border-white/20',
    medium: 'bg-white/20 backdrop-blur-md border border-white/30',
    strong: 'bg-white/30 backdrop-blur-lg border border-white/40'
  };

  return (
    <Paper
      elevation={0}
      className={`${intensityClasses[intensity]} rounded-3xl shadow-xl ${className}`}
      {...props}
    >
      {children}
    </Paper>
  );
}; */

export default GlassCard;
