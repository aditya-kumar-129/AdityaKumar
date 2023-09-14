import React from 'react';
import { Typography, Stack } from '@mui/material';
import SocialMedia from './SocialMedia';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '2rem',
        justifyContent: 'space-around',
        margin: '2rem',
      }}
    >
      <Typography>Designed and Developed by Aditya Kumar</Typography>
      <Typography sx={{ marginRight: '6rem' }}>Copyright © {year} Aditya Kumar</Typography>
      <SocialMedia />
    </Stack>
  );
};

export default Footer;
