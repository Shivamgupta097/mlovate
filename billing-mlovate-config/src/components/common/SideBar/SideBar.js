import { useState, useCallback, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  Box,
  Button,
  List,
  ListItem as MuiListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from '@mui/material';
import { ExpandLess } from '@mui/icons-material';
import { ExpandMore } from '@mui/icons-material';
import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone';
import { NamedLogo } from 'components/logo';
import { sidebarMenuItems } from './genrator';

const ListItem = ({ children, ...rest }) => {
  return (
    <MuiListItem disablePadding {...rest}>
      {children}
    </MuiListItem>
  );
};

const SubListItem = ({ title, ...rest }) => {
  return (
    <MuiListItem disablePadding {...rest}>
      <ListItemButton>
        <ListItemText inset primary={title} />
      </ListItemButton>
    </MuiListItem>
  );
};

export default function Sidebar() {
  const navigate = useNavigate();
  const [openSubitem, setOpenSubitem] = useState({});
  const [selected, setSelected] = useState(sidebarMenuItems[0].key);
  const state = useSelector(data => data.app);
  const dispatch = useDispatch();

  const navigateToPage = e => {
    if (e) dispatch({ type: 'TOGGLE_SIDEBAR' });
    return navigate(e);
  };

  const handleCollapse = useCallback(key => {
    return setOpenSubitem((old = {}) => ({ ...old, [key]: !old[key] }));
  }, []);

  useEffect(() => {
    !state.sideBarOpen && setOpenSubitem({});
  }, [state.sideBarOpen]);

  return (
    <Drawer
      anchor="left"
      open={state.sideBarOpen}
      onClose={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
    >
      <Box>
        <Box
          py={2}
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          role="presentation"
        >
          <NamedLogo />
        </Box>
        <Box display="flex" flexDirection="column" pb={2} role={'presentation'}>
          <List>
            {sidebarMenuItems.map(
              ({ title, icon: Icon, key, subitem, to = [] }) => (
                <Fragment key={key}>
                  <ListItem>
                    <ListItemButton
                      selected={selected === key}
                      onClick={() => {
                        setSelected(key);
                        !!subitem.length && handleCollapse(key);
                        navigateToPage(to);
                      }}
                    >
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      <ListItemText primary={title} />
                      {!!subitem.length &&
                        (openSubitem[key] ? <ExpandLess /> : <ExpandMore />)}
                    </ListItemButton>
                  </ListItem>

                  {!!subitem.length && (
                    <>
                      <Collapse
                        in={openSubitem[key]}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {subitem.map((sub, idx) => {
                            return <SubListItem title={sub.title} key={idx} />;
                          })}
                        </List>
                      </Collapse>
                      {openSubitem[key] && <Divider />}
                    </>
                  )}
                </Fragment>
              ),
            )}
          </List>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" mb={3} px={2}>
        <Button variant="outlined" fullWidth>
          <HelpOutlineTwoToneIcon sx={{ height: '20px', width: '20px' }} />{' '}
          &nbsp; Support
        </Button>
      </Box>
    </Drawer>
  );
}
