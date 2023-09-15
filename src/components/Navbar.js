import React from 'react';
import { Stack, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  HomeOutlined as HomeIcon,
  PersonOutlineOutlined as PersonIcon,
  AssignmentIndOutlined as AssignmentIcon,
  DescriptionOutlined as DescriptionIcon,
  WorkOutlineOutlined as WorkIcon,
} from '@mui/icons-material';

const Navbar = () => {
  const navigate = useNavigate();

  const NavbarButtonStyle = {
    color: '#000',
    '&:hover': {
      backgroundColor: '#CE5FF8',
      '& .MuiSvgIcon-root, & .MuiTypography-root': {
        color: 'white',
      },
    },
  };

  const stackStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '1rem',
  };

  return (
    <Stack sx={{ flexDirection: 'row', justifyContent: 'flex-end', position: 'fixed', right: '0' }}>
      <Stack sx={stackStyle}>
        <Button sx={NavbarButtonStyle} onClick={() => navigate('/')}>
          <HomeIcon sx={{ marginRight: '0.3rem' }} />
          <Typography sx={{ fontSize: '1.2rem' }}>Home</Typography>
        </Button>
      </Stack>

      <Stack sx={stackStyle}>
        <Button sx={NavbarButtonStyle} onClick={() => navigate('/about')}>
          <PersonIcon sx={{ marginRight: '0.3rem' }} />
          <Typography sx={{ fontSize: '1.2rem' }}>About</Typography>
        </Button>
      </Stack>

      <Stack sx={stackStyle}>
        <Button sx={NavbarButtonStyle} onClick={() => navigate('/experience')}>
          <WorkIcon sx={{ marginRight: '0.3rem' }} />
          <Typography sx={{ fontSize: '1.2rem' }}>Experience</Typography>
        </Button>
      </Stack>

      <Stack sx={stackStyle}>
        <Button sx={NavbarButtonStyle} onClick={() => navigate('/project')}>
          <AssignmentIcon sx={{ marginRight: '0.3rem' }} />
          <Typography sx={{ fontSize: '1.2rem' }}>Project</Typography>
        </Button>
      </Stack>

      <Stack sx={stackStyle}>
        <Button sx={NavbarButtonStyle} onClick={() => navigate('/resume')}>
          <DescriptionIcon sx={{ marginRight: '0.3rem' }} />
          <Typography sx={{ fontSize: '1.2rem' }}>Resume</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
