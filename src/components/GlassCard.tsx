import React from 'react';
import { Paper, PaperProps } from '@mui/material';

interface GlassCardProps extends PaperProps {
  children: React.ReactNode;
  intensity?: 'light' | 'medium' | 'strong';
}
export default GlassCard;
