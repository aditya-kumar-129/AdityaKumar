import React from 'react';
import TechSkills from './TechSkills';
import { Stack, Typography } from '@mui/material';
import Navbar from '../Navbar';
import Footer from '../Footer';

const About = () => {
  return (
    <Stack>
      <Navbar />
      <Stack sx={{ flexDirection: 'column' }}>
        <Stack sx={{ flexDirection: 'row' }}>
          <Typography sx={{ textAlign: 'center', fontWeight: 500, fontSize: '2rem' }}>
            Know Who
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            I'M
          </Typography>
        </Stack>
        <Stack>Image Part</Stack>
      </Stack>
      <TechSkills />
      <Footer />
    </Stack>
  );
};

export default About;
