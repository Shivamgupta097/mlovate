import { useState } from 'react';
import {
  Box,
  InputAdornment,
  IconButton,
  InputLabel,
  TextField,
  Stack,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button } from 'components/Design';
import { useSetLoginToken } from 'hooks/useLoginToken';

const Form = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const [login, { loading }] = useSetLoginToken();

  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setState(old => ({ ...old, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    login({ username: state.username, password: state.password });
  };

  return (
    <Box width="100%">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="column">
          <Box>
            <InputLabel htmlFor="username">Username</InputLabel>
            <TextField
              id="username"
              name="username"
              value={state.username}
              onChange={handleChange}
              placeholder="Enter your username"
              fullWidth
              disabled={loading}
              required
            />
          </Box>
          <Box>
            <InputLabel htmlFor="password">Password</InputLabel>
            <TextField
              id="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Your password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(old => !old)}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
              disabled={loading}
              required
            />
          </Box>
          <Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              loading={loading}
              fullWidth
            >
              Log in
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};

export default Form;
