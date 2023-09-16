import React from 'react';
import TechSkills from './TechSkills';
import { Avatar, Stack, Typography } from '@mui/material';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { ImPointRight } from 'react-icons/im';
import laptopImage from '../../assets/about-laptop.png';

const About = () => {
  const lineStyle = {
    fontSize: '1.7rem',
    lineHeight: '1.8rem',
    margin: '1rem 1rem 1rem 0rem',
  };

  const avatarStyle = {
    width: '40%',
    height: 'auto',
    borderRadius: '0',
    margin: '0',
    padding: '0',
  };

  return (
    <Stack>
      <Navbar />
      <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', margin: '12rem' }}>
        <Stack>
          <Stack sx={{ flexDirection: 'row', marginLeft: '15rem' }}>
            <Typography sx={{ textAlign: 'center', fontWeight: 500, fontSize: '1.7rem' }}>
              Know Who &nbsp;
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              I'M
            </Typography>
          </Stack>
          <Stack>
            <Typography sx={lineStyle}>
              Hi Everyone, I am Aditya Kumar from Patna, Bihar.
            </Typography>
            <Typography sx={lineStyle}>Skilled Full Stack Developer.</Typography>
            <Typography sx={lineStyle}>
              Pursuing Bachelor in Information Science from Ramaiah Institute of Technology
            </Typography>
          </Stack>
          <Stack>
            <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
              <ImPointRight />
              <Typography sx={{ ...lineStyle, marginLeft: '1rem' }}>
                Watching some Scientific and Horror movies
              </Typography>
            </Stack>
            <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
              <ImPointRight />
              <Typography sx={{ ...lineStyle, marginLeft: '1rem' }}>
                Reading About new Tech Stuffs
              </Typography>
            </Stack>
            <Typography
              sx={{
                color: 'rgb(155 126 172)',
                textAlign: 'center',
                marginTop: '1rem',
                fontSize: '2.5rem',
              }}
              variant="h4"
              fontWeight="bold"
            >
              "Strive to build things that make a difference!"
            </Typography>
          </Stack>
        </Stack>

        <Avatar sx={avatarStyle} src={laptopImage} alt="about" />
      </Stack>
      <Stack sx={{ marginTop: '2rem' }}>
        <Typography
          sx={{ ...lineStyle, fontSize: '4rem' }}
          variant="h4"
          fontWeight="bold"
          textAlign="center"
        >
          Professional Skills
        </Typography>
        <TechSkills />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default About;
