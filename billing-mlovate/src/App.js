import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Header, SideBar } from 'components/common';
import { InitLoader } from 'components/loader';
import Router from './router';
import { useGetLoginToken } from 'hooks/useLoginToken';

const Main = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const App = props => {
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();
  const { loggedIn } = useGetLoginToken();

  useEffect(() => {
    if (loggedIn === false) {
      navigate({ pathname: '/login' });
    }
    if (loggedIn !== null) {
      setReady(true);
    }
  }, [loggedIn]);

  return (
    <>
      {!ready && <InitLoader />}
      {loggedIn && <SideBar />}
      <Main>
        {loggedIn && <Header />}
        <Box p={3} height="100%">
          <Router {...props} />
        </Box>
      </Main>
    </>
  );
};

export default App;
