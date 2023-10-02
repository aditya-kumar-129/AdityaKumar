import React from 'react';
import { Stack, Avatar, Typography, Link } from '@mui/material';
import laptopImage from '../../assets/GFGIcon.jpeg';

const GFGArticle = (props) => {
  const experienceProjectStyle = {
    width: '90%',
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    margin: '2rem',
    '&:hover': {
      transform: 'scale(1.05)',
      overflow: 'hidden',
      border: '2.2px solid rgba(197, 115, 230, 0.883)',
    },
  };

  return (
    <Link href={props.link} target="_blank" rel="noopener noreferrer" underline="none">
      <Stack sx={{ flexDirection: 'row', ...experienceProjectStyle }}>
        <Avatar
          alt="Geeks For Geeks ICON"
          src={laptopImage}
          sx={{
            borderRadius: '0',
            margin: '0',
            padding: '0',
            width: '9rem',
            height: '9rem',
          }}
        />
        <Stack sx={{ justifyContent: 'center', marginLeft: '1rem' }}>
          <Typography variant="h5" color={'#000'}>
            {props.description}
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
};

export default GFGArticle;
