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
  console.log(menu);
  const [selected, setSelected] = useState(menu[0].id);

  return (
    <Card sx={{ height: '70vh' }}>
      <Box display="flex" flexDirection="column" pb={2} role={'presentation'}>
        <List>
          {menu.map(item => (
            <ListItem key={item.id}>
              <ListItemButton
                selected={selected === item.id}
                onClick={() => {
                  setSelected(item.id);
                  onAddData(item.id);
                }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Card>
  );
}
