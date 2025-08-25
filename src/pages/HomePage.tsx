import React from 'react';
import {
  Container,
  Typography,
  Button,
  Stack,
  Box,
  Chip,
  LinearProgress
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GlassCard from '../components/GlassCard';

const HomePage: React.FC = () => {
  const skills = [
    { name: 'React & TypeScript', level: 95 },
    { name: 'Node.js & Express', level: 88 },
    { name: 'Python & Django', level: 82 },
    { name: 'AWS & Cloud Services', level: 78 },
    { name: 'UI/UX Design', level: 85 }
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 
    'PostgreSQL', 'MongoDB', 'GraphQL', 'Next.js', 'Tailwind CSS', 'Figma'
  ];

  return (
    <Box className="min-h-screen">
      {/* Hero Section */}
      <Box
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        {/* Background Image */}
        <Box
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/flagged/photo-1576697010744-a40aedd2dcca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3Jrc3BhY2UlMjBvZmZpY2UlMjBkZXNrfGVufDB8MHx8fDE3NTYxMTE3NzV8MA&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Floating Elements */}
        <Box className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <Box className="absolute bottom-32 right-16 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl animate-pulse" />
        <Box className="absolute top-1/3 right-1/4 w-16 h-16 bg-emerald-400/20 rounded-full blur-lg animate-pulse" />

        <Container maxWidth="lg" className="relative z-10">
          <Stack spacing={6} alignItems="center" className="text-center">
            <GlassCard className="p-12 max-w-4xl" intensity="medium">
              <Typography
                variant="h1"
                className="text-white font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
              >
                Creative Developer & Designer
              </Typography>
              <Typography
                variant="h5"
                className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                Crafting digital experiences that blend innovative technology with 
                beautiful design. Let's build something amazing together.
              </Typography>
              <Stack direction="row" spacing={3} justifyContent="center" className="flex-wrap gap-4">
                <Button
                  component={Link}
                  to="/portfolio"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIosIcon />}
                  className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  View My Work
                </Button>
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  size="large"
                  className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </Stack>
            </GlassCard>
          </Stack>
        </Container>
      </Box>

      {/* Skills Showcase */}
      <Container maxWidth="lg" className="py-20">
        <Stack spacing={8}>
          <Stack spacing={4} className="text-center">
            <Typography variant="h2" className="font-bold text-gray-900">
              Skills & Expertise
            </Typography>
            <Typography variant="h6" className="text-gray-600 max-w-2xl mx-auto">
              Passionate about cutting-edge technologies and creating seamless user experiences
            </Typography>
          </Stack>

          <Stack direction={{ xs: 'column', lg: 'row' }} spacing={6}>
            {/* Skills Progress */}
            <GlassCard className="flex-1 p-8" intensity="light">
              <Typography variant="h5" className="font-semibold mb-6 text-gray-900">
                Technical Proficiency
              </Typography>
              <Stack spacing={4}>
                {skills.map((skill) => (
                  <Box key={skill.name}>
                    <Stack direction="row" justifyContent="space-between" className="mb-2">
                      <Typography variant="body1" className="font-medium text-gray-800">
                        {skill.name}
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        {skill.level}%
                      </Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      className="h-2 rounded-full bg-gray-200"
                      sx={{
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #6366F1 0%, #EC4899 100%)',
                          borderRadius: '4px'
                        }
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </GlassCard>

            {/* Technology Stack */}
            <GlassCard className="flex-1 p-8" intensity="light">
              <Typography variant="h5" className="font-semibold mb-6 text-gray-900">
                Technology Stack
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={2}>
                {technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 font-medium hover:shadow-lg transition-all duration-300 cursor-pointer"
                  />
                ))}
              </Stack>
              <Box className="mt-8">
                <Typography variant="body1" className="text-gray-700 leading-relaxed">
                  Always exploring new technologies and frameworks to stay at the forefront 
                  of web development. Currently diving deep into AI integration and 
                  serverless architectures.
                </Typography>
              </Box>
            </GlassCard>
          </Stack>

          {/* CTA Section */}
          <GlassCard className="p-12 text-center bg-gradient-to-r from-indigo-50 to-purple-50" intensity="light">
            <Typography variant="h4" className="font-bold mb-4 text-gray-900">
              Ready to Start Your Project?
            </Typography>
            <Typography variant="h6" className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with modern technology and creative design
            </Typography>
            <Stack direction="row" spacing={3} justifyContent="center" className="flex-wrap gap-4">
              <Button
                component={Link}
                to="/portfolio"
                variant="contained"
                size="large"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Explore Portfolio
              </Button>
              <Button
                component={Link}
                to="/about"
                variant="outlined"
                size="large"
                className="border-indigo-500 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Learn More About Me
              </Button>
            </Stack>
          </GlassCard>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomePage;