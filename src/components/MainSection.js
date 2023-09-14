import React from 'react';
import { Stack, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import homeMainIcon from '../assets/home-main.svg';

const MainSection = () => {
  return (
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
          style={{ width: '19rem', height: 'auto' }}
        />
      </Stack>
    </Stack>
  );
};

export default MainSection;
