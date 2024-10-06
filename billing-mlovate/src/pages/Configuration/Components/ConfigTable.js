import { useNavigate } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { alpha } from '@mui/material/styles';
import { config } from 'theme';

const TableButton = styled(Button)(props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '130px',
  width: '125px',
  position: 'relative',
  borderRadius: '10px',
  boxShadow: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  color: '#000000',
  border: `1px solid skyblue`,
  '&:hover': {
    boxShadow: config.boxShadow1,
  },
}));

const ConfigTable = ({ item, ...rest }) => {
  const navigate = useNavigate();
  return (
    <TableButton onClick={() => navigate(item.link)}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <item.IconName color="primary" />
        <Typography variant="body1" fontWeight={600}>
          {item.title}
        </Typography>
      </Box>
    </TableButton>
  );
};

export default ConfigTable;
