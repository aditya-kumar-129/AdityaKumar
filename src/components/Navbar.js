import React from 'react';
import {
  Stack,
  Button,
  Typography,
  AppBar,
  Toolbar,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HomeOutlined as HomeIcon,
  PersonOutlineOutlined as PersonIcon,
  DescriptionOutlined as DescriptionIcon,
  WorkOutlineOutlined as WorkIcon,
} from '@mui/icons-material';
import { FaFolderOpen } from 'react-icons/fa';
import PAGE_ROUTES from '../PAGEROUTES';

const Navbar = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const navbarButtonStyle = {
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

  const theme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#fff',
            boxShadow: 'rgba(9, 5, 29, 0.173) 0 10px 10px 0;',
            borderBottom: '1px solid #ccc',
            transition: 'all 0.35s ease-out 0s',
            zIndex: '10',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <Toolbar>
          <Stack
            sx={{ flexDirection: 'row', justifyContent: 'flex-end', position: 'fixed', right: '0' }}
          >
            <Stack sx={stackStyle}>
              <Button
                sx={{
                  ...navbarButtonStyle,
                  backgroundColor: path === PAGE_ROUTES.HOME ? '#CE5FF8' : 'transparent',
                }}
                onClick={() => navigate(PAGE_ROUTES.HOME)}
              >
                <HomeIcon
                  sx={{
                    marginRight: '0.3rem',
                    color: path === PAGE_ROUTES.HOME ? 'white' : 'inherit',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    color: path === PAGE_ROUTES.HOME ? 'white' : 'inherit',
                  }}
                >
                  Home
                </Typography>
              </Button>
            </Stack>

            <Stack sx={stackStyle}>
              <Button
                sx={{
                  ...navbarButtonStyle,
                  backgroundColor: path === PAGE_ROUTES.ABOUT ? '#CE5FF8' : 'transparent',
                }}
                onClick={() => navigate(PAGE_ROUTES.ABOUT)}
              >
                <PersonIcon
                  sx={{
                    marginRight: '0.3rem',
                    color: path === PAGE_ROUTES.ABOUT ? 'white' : 'inherit',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    color: path === PAGE_ROUTES.ABOUT ? 'white' : 'inherit',
                  }}
                >
                  About
                </Typography>
              </Button>
            </Stack>

            <Stack sx={stackStyle}>
              <Button
                sx={{
                  ...navbarButtonStyle,
                  backgroundColor: path === PAGE_ROUTES.EXPERIENCE ? '#CE5FF8' : 'transparent',
                }}
                onClick={() => navigate(PAGE_ROUTES.EXPERIENCE)}
              >
                <WorkIcon
                  sx={{
                    marginRight: '0.3rem',
                    color: path === PAGE_ROUTES.EXPERIENCE ? 'white' : 'inherit',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    color: path === PAGE_ROUTES.EXPERIENCE ? 'white' : 'inherit',
                  }}
                >
                  Experience
                </Typography>
              </Button>
            </Stack>

            {/* <Stack sx={stackStyle}>
              <Button
                sx={{
                  ...navbarButtonStyle,
                  backgroundColor: path === PAGE_ROUTES.PROJECT ? '#CE5FF8' : 'transparent',
                }}
                onClick={() => navigate(PAGE_ROUTES.PROJECT)}
              >
                <FaFolderOpen
                  style={{
                    marginRight: '0.3rem',
                    color: path === PAGE_ROUTES.PROJECT ? 'white' : 'inherit',
                    fontSize: '24px',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    color: path === PAGE_ROUTES.PROJECT ? 'white' : 'inherit',
                  }}
                >
                  Project
                </Typography>
              </Button>
            </Stack> */}

            <Stack sx={stackStyle}>
              <Button
                sx={{
                  ...navbarButtonStyle,
                  backgroundColor: path === PAGE_ROUTES.RESUME ? '#CE5FF8' : 'transparent',
                }}
                onClick={() => navigate(PAGE_ROUTES.RESUME)}
              >
                <DescriptionIcon
                  sx={{
                    marginRight: '0.3rem',
                    color: path === PAGE_ROUTES.RESUME ? 'white' : 'inherit',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    color: path === PAGE_ROUTES.RESUME ? 'white' : 'inherit',
                  }}
                >
                  Resume
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
