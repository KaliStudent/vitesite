import React, { useState } from 'react';
import {
  Container,
  Typography,
  Stack,
  Box,
  TextField,
  Button,
  IconButton,
  Alert,
  Snackbar
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PinDropIcon from '@mui/icons-material/PinDrop';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PersonIcon from '@mui/icons-material/Person';
import GlassCard from '../components/GlassCard';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MailOutlineIcon className="text-indigo-600" />,
      label: 'Email',
      value: 'alex.johnson@example.com',
      href: 'mailto:alex.johnson@example.com'
    },
    {
      icon: <PhoneIcon className="text-indigo-600" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: <PinDropIcon className="text-indigo-600" />,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <IntegrationInstructionsIcon className="text-gray-700" />,
      label: 'GitHub',
      href: 'https://github.com/alexjohnson'
    },
    {
      icon: <PersonIcon className="text-gray-700" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/alexjohnson'
    }
  ];

  return (
    <Container maxWidth="lg" className="py-24">
      <Stack spacing={12}>
        {/* Header */}
        <Stack spacing={4} className="text-center">
          <Typography variant="h2" className="font-bold text-gray-900">
            Let's Work Together
          </Typography>
          <Typography variant="h6" className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </Typography>
        </Stack>

        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={8}>
          {/* Contact Form */}
          <GlassCard className="flex-1 p-8" intensity="light">
            <Typography variant="h4" className="font-bold mb-6 text-gray-900">
              Send a Message
            </Typography>
            
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                    className="rounded-2xl"
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                    className="rounded-2xl"
                  />
                </Stack>
                
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  variant="outlined"
                  className="rounded-2xl"
                />
                
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  multiline
                  rows={6}
                  variant="outlined"
                  className="rounded-2xl"
                />
                
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </GlassCard>

          {/* Contact Info & Map */}
          <Stack spacing={6} className="lg:w-96">
            {/* Contact Information */}
            <GlassCard className="p-8" intensity="light">
              <Typography variant="h5" className="font-semibold mb-6 text-gray-900">
                Contact Information
              </Typography>
              
              <Stack spacing={4}>
                {contactInfo.map((info, index) => (
                  <Stack key={index} direction="row" spacing={3} alignItems="center">
                    <Box className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center">
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="body2" className="text-gray-600 font-medium">
                        {info.label}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        className="text-gray-900 font-semibold hover:text-indigo-600 transition-colors cursor-pointer"
                        component="a"
                        href={info.href}
                      >
                        {info.value}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>

              <Box className="mt-8 pt-6 border-t border-gray-200">
                <Typography variant="body1" className="text-gray-700 mb-4">
                  Follow me on social media:
                </Typography>
                <Stack direction="row" spacing={2}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      href={social.href}
                      target="_blank"
                      className="bg-gray-100 hover:bg-indigo-100 transition-all duration-300"
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </GlassCard>

            {/* Map */}
            <GlassCard className="p-0 overflow-hidden" intensity="light">
              <iframe
                src="https://maps.google.com/maps?width=100%25&height=300&hl=en&q=37.7749,-122.4194&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="San Francisco Location"
              />
            </GlassCard>
          </Stack>
        </Stack>

        {/* Availability Section */}
        <GlassCard className="p-12 text-center bg-gradient-to-r from-emerald-50 to-teal-50" intensity="light">
          <Typography variant="h4" className="font-bold mb-4 text-gray-900">
            Currently Available for New Projects
          </Typography>
          <Typography variant="h6" className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on innovative projects. Whether you need a full-stack developer, 
            a technical consultant, or someone to bring your ideas to life, let's connect!
          </Typography>
          <Stack direction="row" spacing={4} justifyContent="center" className="flex-wrap gap-4">
            <Box className="text-center">
              <Typography variant="h3" className="font-bold text-emerald-600 mb-2">
                24h
              </Typography>
              <Typography variant="body1" className="text-gray-700">
                Response Time
              </Typography>
            </Box>
            <Box className="text-center">
              <Typography variant="h3" className="font-bold text-indigo-600 mb-2">
                5+
              </Typography>
              <Typography variant="body1" className="text-gray-700">
                Years Experience
              </Typography>
            </Box>
            <Box className="text-center">
              <Typography variant="h3" className="font-bold text-purple-600 mb-2">
                50+
              </Typography>
              <Typography variant="body1" className="text-gray-700">
                Projects Completed
              </Typography>
            </Box>
          </Stack>
        </GlassCard>
      </Stack>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success" 
          className="rounded-2xl"
        >
          Thank you for your message! I'll get back to you within 24 hours.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactPage;