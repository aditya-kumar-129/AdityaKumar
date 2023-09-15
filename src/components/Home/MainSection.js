import React from 'react';
import { Stack, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import homeMainIcon from '../../assets/home-main.svg';
import Tilt from 'react-parallax-tilt';
import avatar from '../../assets/avatar.svg';
import SocialMedia from './SocialMedia';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MainSection = () => {
  const lineStyle = { fontSize: '1.7rem', lineHeight: '1.8rem', margin: '1rem 1rem 1rem 0rem' };
  return (
    <Stack>
      <Navbar />
      <Stack
        sx={{
          flexDirection: 'row',
          padding: '9rem 5rem 3rem',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Stack>
          <Typography sx={{ padding: '1rem 1rem 1rem 0rem ', fontSize: '2.4rem' }}>
            Hi There! 👋🏻
          </Typography>
          <Stack direction="row">
            <Typography variant="h4">I'M</Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ marginLeft: '0.8rem' }}>
              ADITYA KUMAR
            </Typography>
          </Stack>
          <Stack sx={{ marginTop: '2rem', fontSize: '2.2em', color: '#be6adf', fontWeight: '600' }}>
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'Currently Learning DotNet and AngularJS',
                  'Curious to discuss around System Design Concepts',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </Stack>
        </Stack>
        <Stack>
          <LazyLoadImage
            alt="Person Sitting on a Chair working on his/her Laptop"
            effect="blur"
            src={homeMainIcon}
            style={{ width: '30rem', height: 'auto' }}
          />
        </Stack>
      </Stack>
      {/* Middle Part of the Main Screen */}
      <Stack sx={{ flexDirection: 'row', justifyContent: 'center', marginTop: '18rem' }}>
        <Stack>
          <Typography variant="h6" sx={{ textAlign: 'center', fontSize: '2.6rem' }}>
            LET ME INTRODUCE MYSELF
          </Typography>
          <Typography sx={lineStyle}>
            I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
          </Typography>

          <Stack sx={{ flexDirection: 'row' }}>
            <Typography sx={lineStyle}>
              My field of Interest are building products involving
            </Typography>
            <Typography variant="inherit" fontWeight="bold" sx={lineStyle}>
              Web Development
            </Typography>
          </Stack>

          <Typography sx={lineStyle}>A passionate Full Stack Software Developer 🚀</Typography>
          <Typography sx={lineStyle}>
            I have an experience of building Web applications with
          </Typography>

          <Stack sx={{ flexDirection: 'row' }}>
            <Typography variant="inherit" fontWeight="bold" sx={lineStyle}>
              TypeScript, JavaScript, ReactJs, AngularJs
            </Typography>
            <Typography variant="inherit" sx={lineStyle}>
              for the frontend
            </Typography>
          </Stack>

          <Stack sx={{ flexDirection: 'row' }}>
            <Typography variant="inherit" fontWeight="bold" sx={lineStyle}>
              Java, Kotlin , Spring Boot, Dotnet, Nodejs, Expressjs, etc.
            </Typography>
            <Typography sx={lineStyle}>and for backend</Typography>
          </Stack>
        </Stack>
        <Stack>
          <Tilt trackOnWindow={true}>
            <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
          </Tilt>
        </Stack>
      </Stack>
      {/* Bottom part of the Main Screen */}
      <Stack sx={{ alignItems: 'center', marginTop: '5rem' }}>
        <Typography variant="h3">FIND ME ON</Typography>
        <Typography
          variant="h6"
          fontWeight={300}
          sx={{ marginTop: '0.5rem', marginBottom: '1rem' }}
        >
          Feel free to connect with me
        </Typography>
        <SocialMedia />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default MainSection;
