import React from 'react';
import { Stack, Button, Typography } from '@mui/material';
import {
  HomeOutlined as HomeIcon,
  PersonOutlineOutlined as PersonIcon,
  AssignmentIndOutlined as AssignmentIcon,
  DescriptionOutlined as DescriptionIcon,
  WorkOutlineOutlined as WorkIcon,
} from '@mui/icons-material';

const Navbar = () => {
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
    <Stack sx={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
      <Stack sx={stackStyle}>
        <Button sx={NavbarButtonStyle}>
          <HomeIcon sx={{ marginRight: '0.3rem' }} />
          <Typography sx={{ fontSize: '1.2rem' }}>Home</Typography>
        </Button>
      </Stack>
      <Stack sx={stackStyle}>
        <Button sx={NavbarButtonStyle}>
          <PersonIcon sx={{ marginRight: '0.3rem' }} />
          <Typography sx={{ fontSize: '1.2rem' }}>About</Typography>
        </Button>
      </Stack>
      <Stack sx={stackStyle}>
        <Button sx={NavbarButtonStyle}>
          <WorkIcon sx={{ marginRight: '0.3rem' }} />
          <Typography sx={{ fontSize: '1.2rem' }}>Experience</Typography>
        </Button>
      </Stack>
      <Stack sx={stackStyle}>
        <Button sx={NavbarButtonStyle}>
          <AssignmentIcon sx={{ marginRight: '0.3rem' }} />
          <Typography sx={{ fontSize: '1.2rem' }}>Project</Typography>
        </Button>
      </Stack>
      <Stack sx={stackStyle}>
        <Button sx={NavbarButtonStyle}>
          <DescriptionIcon sx={{ marginRight: '0.3rem' }} />
          <Typography sx={{ fontSize: '1.2rem' }}>Resume</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
