import React from 'react';
import { Stack } from '@mui/material';
import {
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  const socialIconStyles = {
    color: '#000',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    border: 'none',
  };
  const handleEmailClick = () => {
    const email = 'adityakumar93340@gmail.com';
    window.location.href = `mailto:${email}`;
  };
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        width: '15rem',
        justifyContent: 'space-between',
      }}
    >
      <Link to="https://github.com/aditya-kumar-129/" target="_blank">
        <GitHubIcon style={socialIconStyles} />
      </Link>
      <Link to="https://www.instagram.com/aditya_kumar_129/" target="_blank">
        <InstagramIcon style={socialIconStyles} />
      </Link>
      <Link to="https://www.linkedin.com/in/aditya-kumar129/" target="_blank">
        <LinkedInIcon style={socialIconStyles} />
      </Link>
      <Link to="#" onClick={handleEmailClick}>
        <EmailIcon style={socialIconStyles} />
      </Link>
    </Stack>
  );
};

export default SocialMedia;
