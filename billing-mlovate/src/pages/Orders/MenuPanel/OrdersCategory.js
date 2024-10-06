import { useState } from 'react';
import {
  Box,
  Card,
  List,
  ListItem as MuiListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

const ListItem = ({ children, ...rest }) => {
  return (
    <MuiListItem disablePadding {...rest}>
      {children}
    </MuiListItem>
  );
};

export default function OrdersCategory({ menu, onAddData }) {
  const [selected, setSelected] = useState(menu[0].id);

  return (
    <Card sx={{ padding: 0, height: '70vh' }}>
      <Box display="flex" flexDirection="column" pb={2} role={'presentation'}>
        <List>
          {menu.map(({ item, key, id = [] }) => (
            <ListItem key={key}>
              <ListItemButton
                selected={selected === id}
                onClick={() => {
                  setSelected(id);
                  onAddData(id);
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Card>
  );
}
