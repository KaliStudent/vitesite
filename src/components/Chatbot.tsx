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
          bgcolor: alpha(theme.palette.background.paper, 0.80),
          color: theme.palette.text.primary,
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.8)}`
        }}
      >
        <Toolbar sx={{ px: { xs: 2, lg: 6 } }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            style={{ textDecoration: 'none' }}
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: theme.palette.text.primary,
              '&:hover': { color: theme.palette.primary.main },
            }}
          >
            Portfolio
          </Typography>

          {isMobile ? (
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: theme.palette.text.primary }}
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
                  variant={isActive(item.path) ? 'contained' : 'text'}
                  sx={{
                    borderRadius: 999,
                    px: 3, py: 1,
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
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: { width: 320, bgcolor: 'transparent', boxShadow: 'none' }
        }}  // style Drawer paper via PaperProps.sx
        sx={{ display: { md: 'none' } }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;

import React, { useState } from 'react';
import {
  Fab, Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, Stack, Typography, Avatar, Paper, IconButton
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    id: 1,
    text: "Hi! I'm here to help you learn more about this portfolio. What would you like to know?",
    sender: 'bot',
    timestamp: new Date()
  }]);
  const [inputValue, setInputValue] = useState('');
  const [showHandoff, setShowHandoff] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const userMessage: Message = { id: messages.length + 1, text: inputValue, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage.text);
      const botMessage: Message = { id: userMessage.id + 1, text: botResponse, sender: 'bot', timestamp: new Date() };
      setMessages(prev => [...prev, botMessage]);
      if (userMessage.text.toLowerCase().includes('contact') || userMessage.text.toLowerCase().includes('hire')) {
        setShowHandoff(true);
      }
    }, 600);
  };

  const getBotResponse = (input: string): string => {
    const s = input.toLowerCase();
    if (s.includes('skills') || s.includes('technology')) return "I specialize in modern web development with React, TypeScript, Node.js, and cloud technologies. I'm passionate about creating user-friendly applications with clean, maintainable code.";
    if (s.includes('experience') || s.includes('work')) return "I have experience building full-stack applications, working with agile teams, and delivering scalable solutions. Check out my portfolio section for detailed project examples!";
    if (s.includes('education') || s.includes('degree')) return "I hold a degree in Computer Science and continuously update my skills through online courses and certifications.";
    if (s.includes('contact') || s.includes('hire')) return "I'd love to discuss potential opportunities! Use the contact form, or I can connect you directly.";
    return "Ask me about skills, experience, education, or getting in touch.";
  };

  const gradient = `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`;

  return (
    <>
      <Fab
        color="primary"
        aria-label="chat"
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 1300,
          background: gradient,
          color: theme.palette.getContrastText(theme.palette.primary.main),
          boxShadow: theme.shadows[6],
          '&:hover': { boxShadow: theme.shadows[8], filter: 'brightness(1.05)' },
        }}
        size="large"
      >
        <ChatBubbleOutlineIcon />
      </Fab>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            bgcolor: alpha(theme.palette.background.paper, 0.95),
            backdropFilter: 'blur(12px)',
            border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
            boxShadow: theme.shadows[10],
            color: theme.palette.text.primary,
          }
        }}
      >
        <DialogTitle
          sx={{
            background: gradient,
            color: theme.palette.getContrastText(theme.palette.primary.main),
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight={600}>Portfolio Assistant</Typography>
            <IconButton onClick={() => setOpen(false)} sx={{ color: 'inherit' }}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>

        <DialogContent sx={{ p: 3 }}>
          <Stack spacing={2} sx={{ maxHeight: 384, overflowY: 'auto' }}>
            {messages.map((message) => {
              const isUser = message.sender === 'user';
              return (
                <Stack key={message.id} direction="row" spacing={2} sx={{ justifyContent: isUser ? 'flex-end' : 'flex-start' }}>
                  {!isUser && (
                    <Avatar sx={{ width: 32, height: 32, background: gradient, color: theme.palette.getContrastText(theme.palette.primary.main) }}>🤖</Avatar>
                  )}
                  <Paper
                    elevation={1}
                    sx={{
                      p: 1.5,
                      maxWidth: 360,
                      borderRadius: 3,
                      ...(isUser
                        ? {
                            color: theme.palette.getContrastText(theme.palette.primary.main),
                            background: gradient,
                            boxShadow: theme.shadows[3],
                          }
                        : {
                            bgcolor: alpha(theme.palette.background.paper, 0.6),
                            color: theme.palette.text.primary,
                            border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                          }),
                    }}
                  >
                    <Typography variant="body2">{message.text}</Typography>
                  </Paper>
                </Stack>
              );
            })}
          </Stack>

          {showHandoff && (
            <Paper
              sx={{
                mt: 2,
                p: 2,
                borderRadius: 3,
                bgcolor: alpha(theme.palette.success.light, 0.15),
                border: `1px solid ${alpha(theme.palette.success.main, 0.3)}`,
                color: theme.palette.success.dark,
              }}
              elevation={0}
            >
              <Typography variant="body2" sx={{ mb: 1 }}>
                Would you like to speak directly with the portfolio owner?
              </Typography>
              <Button
                onClick={() => { 
                  setMessages(prev => [...prev, { id: prev.length + 1, text: "Great! I've notified the portfolio owner. They'll reach out soon.", sender: 'bot', timestamp: new Date() }]);
                  setShowHandoff(false);
                }}
                variant="contained"
                size="small"
                sx={{
                  background: `linear-gradient(90deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`,
                  color: theme.palette.getContrastText(theme.palette.success.main),
                }}
              >
                Yes, connect me
              </Button>
            </Paper>
          )}
        </DialogContent>

        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
            <TextField
              fullWidth
              placeholder="Ask me anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              variant="outlined"
              size="small"
            />
            <IconButton
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              sx={{
                background: gradient,
                color: theme.palette.getContrastText(theme.palette.primary.main),
                '&:hover': { filter: 'brightness(1.05)' },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Chatbot;
