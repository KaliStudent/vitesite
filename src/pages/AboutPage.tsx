import React from 'react';
import {
  Container,
  Typography,
  Stack,
  Box,
  Avatar,
  Chip,
  LinearProgress
} from '@mui/material';
import GlassCard from '../components/GlassCard';

const AboutPage: React.FC = () => {
  const personalGoals = [
    {
      title: 'Continuous Learning',
      description: 'Stay at the forefront of technology by continuously learning new frameworks, languages, and best practices.',
      progress: 85
    },
    {
      title: 'Open Source Contribution',
      description: 'Contribute to meaningful open source projects and give back to the developer community.',
      progress: 60
    },
    {
      title: 'Mentorship',
      description: 'Help aspiring developers grow their skills and navigate their career paths.',
      progress: 70
    }
  ];

  const professionalGoals = [
    {
      title: 'Technical Leadership',
      description: 'Lead development teams and architect scalable solutions for complex business problems.',
      progress: 75
    },
    {
      title: 'Product Innovation',
      description: 'Create innovative products that solve real-world problems and improve user experiences.',
      progress: 80
    },
    {
      title: 'Global Impact',
      description: 'Work on projects that have a positive impact on communities worldwide.',
      progress: 55
    }
  ];

  const values = [
    'Innovation', 'Quality', 'Collaboration', 'Integrity', 'Growth Mindset', 
    'User-Centric', 'Sustainability', 'Accessibility'
  ];

  const interests = [
    'Artificial Intelligence', 'Sustainable Technology', 'Digital Art', 
    'Photography', 'Travel', 'Cooking', 'Hiking', 'Music Production'
  ];

  return (
    <Container maxWidth="lg" className="py-24">
      <Stack spacing={12}>
        {/* Header Section */}
        <Stack spacing={4} className="text-center">
          <Typography variant="h2" className="font-bold text-gray-900">
            About Me
          </Typography>
          <Typography variant="h6" className="text-gray-600 max-w-2xl mx-auto">
            Passionate developer with a vision for creating meaningful digital experiences
          </Typography>
        </Stack>

        {/* Personal Introduction */}
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={8} alignItems="center">
          <Box className="flex-shrink-0">
            <Avatar
              src="https://i.pravatar.cc/300?img=1"
              alt="Professional headshot"
              className="w-80 h-80 shadow-2xl border-4 border-white"
            />
          </Box>
          
          <GlassCard className="flex-1 p-8" intensity="light">
            <Typography variant="h4" className="font-bold mb-6 text-gray-900">
              Hello, I'm Alex Johnson
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience creating 
              digital solutions that make a difference. My journey began with a curiosity about 
              how things work, which led me to discover the fascinating world of programming.
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6 leading-relaxed">
              I believe in the power of technology to solve real-world problems and improve 
              people's lives. Whether it's building a seamless e-commerce platform or creating 
              an intuitive mobile app, I approach each project with enthusiasm and attention to detail.
            </Typography>
            <Typography variant="body1" className="text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open source projects, or enjoying the great outdoors. I'm always eager to learn, 
              grow, and collaborate with like-minded individuals.
            </Typography>
          </GlassCard>
        </Stack>

        {/* Goals Section */}
        <Stack spacing={8}>
          <Typography variant="h3" className="font-bold text-gray-900 text-center">
            Goals & Aspirations
          </Typography>
          
          <Stack direction={{ xs: 'column', lg: 'row' }} spacing={6}>
            {/* Personal Goals */}
            <GlassCard className="flex-1 p-8" intensity="light">
              <Typography variant="h5" className="font-semibold mb-6 text-gray-900">
                Personal Goals
              </Typography>
              <Stack spacing={4}>
                {personalGoals.map((goal, index) => (
                  <Box key={index}>
                    <Typography variant="h6" className="font-medium mb-2 text-gray-800">
                      {goal.title}
                    </Typography>
                    <Typography variant="body2" className="text-gray-600 mb-3">
                      {goal.description}
                    </Typography>
                    <Box className="flex items-center space-x-3">
                      <LinearProgress
                        variant="determinate"
                        value={goal.progress}
                        className="flex-1 h-2 rounded-full bg-gray-200"
                        sx={{
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(90deg, #10B981 0%, #34D399 100%)',
                            borderRadius: '4px'
                          }
                        }}
                      />
                      <Typography variant="body2" className="text-gray-600 font-medium">
                        {goal.progress}%
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </GlassCard>

            {/* Professional Goals */}
            <GlassCard className="flex-1 p-8" intensity="light">
              <Typography variant="h5" className="font-semibold mb-6 text-gray-900">
                Professional Goals
              </Typography>
              <Stack spacing={4}>
                {professionalGoals.map((goal, index) => (
                  <Box key={index}>
                    <Typography variant="h6" className="font-medium mb-2 text-gray-800">
                      {goal.title}
                    </Typography>
                    <Typography variant="body2" className="text-gray-600 mb-3">
                      {goal.description}
                    </Typography>
                    <Box className="flex items-center space-x-3">
                      <LinearProgress
                        variant="determinate"
                        value={goal.progress}
                        className="flex-1 h-2 rounded-full bg-gray-200"
                        sx={{
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(90deg, #6366F1 0%, #EC4899 100%)',
                            borderRadius: '4px'
                          }
                        }}
                      />
                      <Typography variant="body2" className="text-gray-600 font-medium">
                        {goal.progress}%
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </GlassCard>
          </Stack>
        </Stack>

        {/* Values & Interests */}
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={6}>
          {/* Core Values */}
          <GlassCard className="flex-1 p-8" intensity="light">
            <Typography variant="h5" className="font-semibold mb-6 text-gray-900">
              Core Values
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6 leading-relaxed">
              These values guide my work and interactions, shaping how I approach challenges 
              and collaborate with others.
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={2}>
              {values.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 font-medium hover:shadow-lg transition-all duration-300"
                />
              ))}
            </Stack>
          </GlassCard>

          {/* Interests & Hobbies */}
          <GlassCard className="flex-1 p-8" intensity="light">
            <Typography variant="h5" className="font-semibold mb-6 text-gray-900">
              Interests & Hobbies
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6 leading-relaxed">
              Beyond coding, I enjoy exploring various interests that keep me creative, 
              inspired, and balanced.
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={2}>
              {interests.map((interest) => (
                <Chip
                  key={interest}
                  label={interest}
                  className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 font-medium hover:shadow-lg transition-all duration-300"
                />
              ))}
            </Stack>
          </GlassCard>
        </Stack>

        {/* Philosophy Section */}
        <GlassCard className="p-12 text-center bg-gradient-to-r from-indigo-50 to-purple-50" intensity="light">
          <Typography variant="h4" className="font-bold mb-6 text-gray-900">
            My Philosophy
          </Typography>
          <Typography variant="h6" className="text-gray-700 max-w-3xl mx-auto leading-relaxed italic">
            "Technology is best when it brings people together. I strive to create solutions 
            that not only solve problems but also enhance human connections and experiences. 
            Every line of code is an opportunity to make someone's day a little better."
          </Typography>
          <Box className="mt-8 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
        </GlassCard>
      </Stack>
    </Container>
  );
};

export default AboutPage;