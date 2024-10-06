import * as React from 'react';
import { useDispatch } from 'react-redux';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Tooltip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ManageAccountsOutlined as ManageAccountsOutlinedIcon,
  GridViewOutlined as GridViewOutlinedIcon,
  FastfoodOutlined as FastfoodOutlinedIcon,
  DocumentScannerOutlined as DocumentScannerOutlinedIcon,
  StorefrontOutlined as StorefrontOutlinedIcon,
  PanToolOutlined as PanToolOutlinedIcon,
  Notifications as NotificationsIcon,
  PowerSettingsNewOutlined as PowerSettingsNewOutlinedIcon,
  More as MoreIcon,
} from '@mui/icons-material';
import { IconLogo } from 'components/logo';
import { logout } from 'hooks/useLoginToken';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  const menuId = 'account-settings-menu';
  const dispatch = useDispatch();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
        >
          <MenuIcon />
        </IconButton>

        <Box display="flex" justifyContent="center" alignItems="center">
          <IconLogo />
        </Box>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Bill No."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {/* Menu Setting Icon */}

          <Tooltip title="Online Menu" arrow>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <ManageAccountsOutlinedIcon />
            </IconButton>
          </Tooltip>
          {/* Store Icon */}

          <Tooltip title="Store Status" arrow>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <StorefrontOutlinedIcon />
            </IconButton>
          </Tooltip>

          {/* Gride Icons I */}

          <Tooltip title="Order View / KOT View" arrow>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color={'inherit'}
            >
              <GridViewOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Current Order /Online Order" arrow>
            <IconButton size="large" color="inherit">
              <FastfoodOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Recent" arrow>
            <IconButton size="large" color="inherit">
              <DocumentScannerOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Hold" arrow>
            <IconButton size="large" color="inherit">
              <PanToolOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Notifications" arrow>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Logout" arrow>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              onClick={e => logout()}
            >
              <PowerSettingsNewOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>

        {/* TODO: responsive mobile menu */}

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
