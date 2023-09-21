import React from 'react';
import { Chip, Typography, Stack } from '@mui/material';

const CustomChip = (props) => {
  return (
    <Stack sx={{ margin: '0.4rem' }}>
      <Chip
        label={<Typography fontSize={'1.5rem'}>{props.name}</Typography>}
        style={{
          backgroundColor: '#be6adf',
          color: 'white',
          marginBottom: '8px',
          width: 'auto',
          height: 'auto',
        }}
      />
    </Stack>
  );
};

export default CustomChip;
