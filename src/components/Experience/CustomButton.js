import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const CustomButton = (props) => {
  const topHeadingStyle = {
    variant: 'h4',
    fontWeight: 'bold',
    fontSize: '2rem',
  };

  return (
    <Stack>
      <Button
        onClick={props.redirectLink}
        style={{
          padding: '0',
          justifyContent: 'flex-start',
          width: 'auto',
          '&:hover': { backgroundColor: 'inherit' },
        }}
      >
        <Typography
          sx={{
            ...topHeadingStyle,
            textTransform: 'none',
            color: 'black',
            textDecoration: 'underline',
          }}
        >
          {props.name}
        </Typography>
        <Stack sx={{ marginLeft: '1rem' }}>
          <BsBoxArrowUpRight fontSize={'2rem'} color="black" strokeWidth={'1'} />
        </Stack>
      </Button>
    </Stack>
  );
};

export default CustomButton;
