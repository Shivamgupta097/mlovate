import { useCallback, useState } from 'react';
import { useSnackbar } from 'notistack';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const mock = {
  pin: '1234',
  username: 'biller',
  password: 'biller',
};

const useSetLoginToken = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({ loading: false });

  const login = useCallback(({ username, password, pin } = {}) => {
    setState({ loading: true });
    setTimeout(() => {
      if (
        !(
          (pin && pin === mock.pin) ||
          (username === mock.username && password === mock.password)
        )
      ) {
        if (pin) {
          enqueueSnackbar('Invalid pin', { variant: 'error' });
        } else {
          enqueueSnackbar('Invalid username/password', { variant: 'error' });
        }
        setState({ loading: false });
        return;
      }
      cookies.set('at', 'some-token-value', {
        maxAge: 2147483647,
      });
      window.location.href = '/';
      setState({ loading: false });
    }, 2000);
  }, []);

  return [login, state];
};

export default useSetLoginToken;
