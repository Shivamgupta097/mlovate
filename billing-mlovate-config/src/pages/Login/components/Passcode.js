import { useState } from 'react';
import {
  BackspaceOutlined as BackSpaceIcon,
  CheckOutlined as CheckIcon,
} from '@mui/icons-material';
import { Grid, Radio, Box } from '@mui/material';
import { Button } from 'components/Design';
import { useSetLoginToken } from 'hooks/useLoginToken';

const PinButton = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
      sx={{ height: '50px', width: '50px', minWidth: 0, ...rest.sx }}
    >
      {children}
    </Button>
  );
};

const Passcode = () => {
  const [selectedPin, setSelectedPin] = useState([null, null, null, null]);
  const [login, { loading }] = useSetLoginToken();

  const handlePin = item => {
    setSelectedPin(prev => {
      let idx = prev.findIndex(item => item === null);
      prev[idx] = item;
      return [...prev];
    });
  };

  const handleAction = mode => {
    if (mode !== 'ok') {
      setSelectedPin(prev => {
        const i = prev.findIndex(item => item === null);
        if (i === 0) return prev;
        prev[i === -1 ? 3 : i - 1] = null;
        return [...prev];
      });
    } else {
      const pin = selectedPin.join('');
      if (pin.length !== 4) return;
      return login({ pin });
    }
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box mb={3}>
          {selectedPin.map((value, i) => {
            return <Radio key={i} checked={value !== null} />;
          })}
        </Box>

        <Grid container px={4}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'clear', 0, 'ok'].map((item, index) => (
            <Grid item key={item} xs={4}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 2,
                }}
              >
                {!isNaN(item) ? (
                  <PinButton
                    onClick={() => handlePin(item)}
                    variant="outlined"
                    disabled={loading}
                  >
                    {item}
                  </PinButton>
                ) : (
                  <PinButton
                    variant="outlined"
                    onClick={() => handleAction(item)}
                    disabled={loading}
                    loading={item === 'ok' && loading ? true : undefined}
                  >
                    {item === 'ok' ? <CheckIcon /> : <BackSpaceIcon />}
                  </PinButton>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Passcode;
