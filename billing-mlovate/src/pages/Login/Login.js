import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Box, Typography } from '@mui/material';
import {
  EmailOutlined as EmailOutlinedIcon,
  VpnKeyOutlined as VpnKeyOutlinedIcon,
} from '@mui/icons-material';
import { NamedLogo } from 'components/logo';
import Form from './components/Form';
import Passcode from './components/Passcode';
import { useGetLoginToken } from 'hooks/useLoginToken';

const Login = () => {
  const [tab, setTab] = useState(true);
  const navigate = useNavigate();
  const { loggedIn } = useGetLoginToken();

  useEffect(() => {
    if (loggedIn) {
      navigate({ pathname: '/' }, { replace: true });
    }
  }, [loggedIn]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Card sx={{ width: '400px' }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box mb={1}>
            <NamedLogo width="150" />
          </Box>

          <Box mb={3}>
            <Typography component="h2" variant="h6" color="primary">
              Sign in to Billing MLovate
            </Typography>
          </Box>

          <Box mb={2} width="100%">
            {tab ? <Form /> : <Passcode />}
          </Box>

          <Box width="100%">
            <Button
              variant="outlined"
              onClick={() => setTab(old => !old)}
              endIcon={tab ? <VpnKeyOutlinedIcon /> : <EmailOutlinedIcon />}
              size="large"
              fullWidth
            >
              {tab ? 'LogIn with Passcode' : 'LogIn with Username'}
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Login;
