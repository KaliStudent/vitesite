import React, { useState } from 'react';
import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
  Typography,
  Avatar,
  Paper,
  IconButton
} from '@mui/material';
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
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help you learn more about this portfolio. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showHandoff, setShowHandoff] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);

      // Show handoff option for certain queries
      if (inputValue.toLowerCase().includes('contact') || inputValue.toLowerCase().includes('hire')) {
        setShowHandoff(true);
      }
    }, 1000);
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('skills') || lowerInput.includes('technology')) {
      return "I specialize in modern web development with React, TypeScript, Node.js, and cloud technologies. I'm passionate about creating user-friendly applications with clean, maintainable code.";
    } else if (lowerInput.includes('experience') || lowerInput.includes('work')) {
      return "I have experience building full-stack applications, working with agile teams, and delivering scalable solutions. Check out my portfolio section for detailed project examples!";
    } else if (lowerInput.includes('education') || lowerInput.includes('degree')) {
      return "I hold a degree in Computer Science and continuously update my skills through online courses and certifications. Lifelong learning is key in our field!";
    } else if (lowerInput.includes('contact') || lowerInput.includes('hire')) {
      return "I'd love to discuss potential opportunities! You can reach out through the contact form, or I can connect you directly with me for a more detailed conversation.";
    } else {
      return "That's a great question! I can tell you about skills, experience, education, or help you get in touch. What interests you most?";
    }
  };

  const handleHandoff = () => {
    const handoffMessage: Message = {
      id: messages.length + 1,
      text: "Great! I've notified the portfolio owner about your interest. They'll reach out to you soon through your preferred contact method.",
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, handoffMessage]);
    setShowHandoff(false);
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="chat"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-2xl hover:shadow-3xl transition-all duration-300 z-50"
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
          className: 'rounded-3xl bg-white/95 backdrop-blur-lg border border-white/20 shadow-2xl'
        }}
      >
        <DialogTitle className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-3xl">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" className="font-semibold">
              Portfolio Assistant
            </Typography>
            <IconButton onClick={() => setOpen(false)} className="text-white">
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>

        <DialogContent className="p-6">
          <Stack spacing={2} className="max-h-96 overflow-y-auto">
            {messages.map((message) => (
              <Stack
                key={message.id}
                direction="row"
                spacing={2}
                className={message.sender === 'user' ? 'justify-end' : 'justify-start'}
              >
                {message.sender === 'bot' && (
                  <Avatar className="bg-gradient-to-r from-indigo-500 to-purple-600 w-8 h-8">
                    🤖
                  </Avatar>
                )}
                <Paper
                  className={`p-3 max-w-xs rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                  elevation={1}
                >
                  <Typography variant="body2">{message.text}</Typography>
                </Paper>
              </Stack>
            ))}
          </Stack>

          {showHandoff && (
            <Paper className="mt-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl">
              <Typography variant="body2" className="mb-2 text-emerald-800">
                Would you like to speak directly with the portfolio owner?
              </Typography>
              <Button
                onClick={handleHandoff}
                variant="contained"
                size="small"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
              >
                Yes, connect me
              </Button>
            </Paper>
          )}
        </DialogContent>

        <DialogActions className="p-6 pt-0">
          <Stack direction="row" spacing={2} className="w-full">
            <TextField
              fullWidth
              placeholder="Ask me anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              variant="outlined"
              size="small"
              className="rounded-full"
            />
            <IconButton
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg"
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