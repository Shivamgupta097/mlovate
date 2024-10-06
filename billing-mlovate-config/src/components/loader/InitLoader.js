import { Box, CircularProgress } from '@mui/material';
import { IconLogo } from 'components/logo';

const InitLoader = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        height: '100%',
        width: '100%',
        display: 'flex',
        background: '#fff',
        zIndex: 9999999,
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress
            sx={{ position: 'absolute', color: '#EF315E' }}
            size={90}
          />
          <IconLogo size={70} />
        </Box>
      </Box>
    </Box>
  );
};

export default InitLoader;
