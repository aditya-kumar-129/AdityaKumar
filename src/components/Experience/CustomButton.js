import React from 'react';
import { Stack, Typography, Link } from '@mui/material';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const CustomButton = (props) => {
  const topHeadingStyle = {
    variant: 'h4',
    fontWeight: 'bold',
    fontSize: '2rem',
  };

  return (
    <Link href={props.redirectLink} target="_blank" rel="noopener noreferrer" underline="none">
      <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
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
      </Stack>
    </Link>
  );
};

export default CustomButton;
