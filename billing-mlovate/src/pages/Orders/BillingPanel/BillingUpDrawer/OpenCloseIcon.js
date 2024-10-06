import { Box, useTheme } from '@mui/material';
import { KeyboardArrowUpRounded as UpIcon } from '@mui/icons-material';

const OpenCloseIcon = ({ sx, open, onClick, rest }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        height: '20px',
        width: '70px',
        display: 'flex',
        justifyContent: 'center',
        color: '#fff',
        position: 'absolute',
        marginTop: '-20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderTopLeftRadius: theme.spacing(2),
        borderTopRightRadius: theme.spacing(2),
        ...sx,
      }}
      {...rest}
      component="a"
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick && onClick();
      }}
    >
      <UpIcon sx={{ transform: `rotate(${open ? '180deg' : '0'})` }} />
    </Box>
  );
};

export default OpenCloseIcon;
