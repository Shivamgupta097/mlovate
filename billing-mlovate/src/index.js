import { createRef } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import store from './setup/redux/store';
import App from './App';
import Theme from './theme';
import reportWebVitals from './reportWebVitals';
import './scss/index.scss';

const nsRef = createRef();
const closeSnackbar = key => () => nsRef.current.closeSnackbar(key);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Theme>
        <SnackbarProvider
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={3000}
          maxSnack={2}
          ref={nsRef}
          action={key => (
            <IconButton onClick={closeSnackbar(key)} sx={{ color: '#fff' }}>
              <CloseIcon />
            </IconButton>
          )}
        >
          <App />
        </SnackbarProvider>
      </Theme>
    </Provider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
