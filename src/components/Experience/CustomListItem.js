import React from 'react';
import { Stack, Typography, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const CustomListItem = (props) => {
  return (
    <Stack>
      <ListItem style={{ paddingLeft: '8px' }}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography sx={{ fontSize: '1.4rem' }}>{props.bulletPoints}</Typography>
        </ListItemText>
      </ListItem>
    </Stack>
  );
};

export default CustomListItem;
