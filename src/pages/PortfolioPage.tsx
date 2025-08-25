import React, { useState } from 'react';
import {
  Container,
  Typography,
  Stack,
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  Card,
  CardMedia,
  CardContent
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GlassCard from '../components/GlassCard';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description: string;
  gpa?: string;
}

const PortfolioPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration',
      longDescription: 'A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard. The application uses React with TypeScript for the frontend, Node.js with Express for the backend, and PostgreSQL for data storage.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1487338875411-8880f74114a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXAlMjBkZXZpY2VzJTIwc2NyZWVufGVufDB8MHx8fDE3NTYxMTE3NzV8MA&ixlib=rb-4.1.0&q=85',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example/ecommerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      longDescription: 'A sophisticated task management application designed for team collaboration. Features real-time updates using WebSockets, drag-and-drop task organization, team member assignments, deadline tracking, and progress visualization. Built with React, Node.js, Socket.io, and MongoDB.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Material-UI'],
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1615540127498-12c3049eded0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw3fHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXAlMjBkZXZpY2VzJTIwc2NyZWVufGVufDB8MHx8fDE3NTYxMTE3NzV8MA&ixlib=rb-4.1.0&q=85',
      demoUrl: 'https://tasks.example.com',
      githubUrl: 'https://github.com/example/taskmanager'
    },
    {
      id: 3,
      title: 'Mobile Weather App',
      description: 'React Native weather application with location services',
      longDescription: 'A beautiful and intuitive weather application built with React Native. Features include current weather conditions, 7-day forecast, location-based weather updates, weather alerts, and beautiful animated weather icons. Integrates with OpenWeatherMap API and uses device GPS for location services.',
      technologies: ['React Native', 'TypeScript', 'OpenWeatherMap API', 'AsyncStorage'],
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw5fHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXAlMjBkZXZpY2VzJTIwc2NyZWVufGVufDB8MHx8fDE3NTYxMTE3NzV8MA&ixlib=rb-4.1.0&q=85',
      demoUrl: 'https://weather.example.com',
      githubUrl: 'https://github.com/example/weather-app'
    }
  ];

  const education: Education[] = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      year: '2020',
      description: 'Focused on software engineering, algorithms, and web development. Graduated Magna Cum Laude.',
      gpa: '3.8/4.0'
    },
    {
      id: 2,
      degree: 'AWS Certified Solutions Architect',
      institution: 'Amazon Web Services',
      year: '2022',
      description: 'Professional certification in cloud architecture and AWS services implementation.'
    },
    {
      id: 3,
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Tech Academy',
      year: '2021',
      description: 'Intensive 6-month program covering modern web development technologies and best practices.'
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Container maxWidth="lg" className="py-24">
      <Stack spacing={8}>
        {/* Header */}
        <Stack spacing={4} className="text-center">
          <Typography variant="h2" className="font-bold text-gray-900">
            Portfolio & Credentials
          </Typography>
          <Typography variant="h6" className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my work, education, and professional achievements
          </Typography>
        </Stack>

        {/* Project Filter */}
        <Stack direction="row" spacing={2} justifyContent="center" className="flex-wrap gap-2">
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setFilter(category)}
              className={`cursor-pointer transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            />
          ))}
        </Stack>

        {/* Projects Grid */}
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={`${project.title} - Tran Mau Tri Tam ★ on Unsplash`}
                className="h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <CardContent className="p-6">
                <Typography variant="h6" className="font-semibold mb-2 text-gray-900">
                  {project.title}
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      className="bg-indigo-100 text-indigo-800 text-xs"
                    />
                  ))}
                  {project.technologies.length > 3 && (
                    <Chip
                      label={`+${project.technologies.length - 3}`}
                      size="small"
                      className="bg-gray-100 text-gray-600 text-xs"
                    />
                  )}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Education Section */}
        <Stack spacing={6}>
          <Typography variant="h3" className="font-bold text-gray-900 text-center">
            Education & Certifications
          </Typography>
          
          <Box className="relative">
            {/* Timeline Line */}
            <Box className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600" />
            
            <Stack spacing={6}>
              {education.map((edu, index) => (
                <Stack key={edu.id} direction="row" spacing={4} className="relative">
                  {/* Timeline Dot */}
                  <Box className="relative z-10 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Typography variant="body2" className="text-white font-bold">
                      {edu.year}
                    </Typography>
                  </Box>
                  
                  <GlassCard className="flex-1 p-6" intensity="light">
                    <Typography variant="h6" className="font-semibold mb-2 text-gray-900">
                      {edu.degree}
                    </Typography>
                    <Typography variant="subtitle1" className="text-indigo-600 mb-2 font-medium">
                      {edu.institution}
                    </Typography>
                    {edu.gpa && (
                      <Typography variant="body2" className="text-gray-600 mb-2">
                        GPA: {edu.gpa}
                      </Typography>
                    )}
                    <Typography variant="body2" className="text-gray-700">
                      {edu.description}
                    </Typography>
                  </GlassCard>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Stack>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          className: 'rounded-3xl bg-white/95 backdrop-blur-lg border border-white/20 shadow-2xl'
        }}
      >
        {selectedProject && (
          <>
            <Box className="relative">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} - Tran Mau Tri Tam ★ on Unsplash`}
                className="w-full h-64 object-cover"
              />
              <IconButton
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white"
              >
                <CloseIcon />
              </IconButton>
            </Box>
            
            <DialogContent className="p-8">
              <Typography variant="h4" className="font-bold mb-4 text-gray-900">
                {selectedProject.title}
              </Typography>
              <Typography variant="body1" className="text-gray-700 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </Typography>
              
              <Typography variant="h6" className="font-semibold mb-3 text-gray-900">
                Technologies Used
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={2} className="mb-6">
                {selectedProject.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 font-medium"
                  />
                ))}
              </Stack>
            </DialogContent>
            
            <DialogActions className="p-8 pt-0">
              <Stack direction="row" spacing={2}>
                {selectedProject.demoUrl && (
                  <Button
                    href={selectedProject.demoUrl}
                    target="_blank"
                    variant="contained"
                    endIcon={<ArrowForwardIosIcon />}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full"
                  >
                    Live Demo
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button
                    href={selectedProject.githubUrl}
                    target="_blank"
                    variant="outlined"
                    className="border-indigo-500 text-indigo-600 hover:bg-indigo-50 px-6 py-2 rounded-full"
                  >
                    View Code
                  </Button>
                )}
              </Stack>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default PortfolioPage;