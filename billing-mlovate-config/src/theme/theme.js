import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

export const config = {
  border: '1px solid #DAE1E7',
  boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)',
  boxShadow1: '0px 4px 16px rgb(43 52 69 / 10%)',
  boxShadow2: '0px 8px 45px rgb(3 0 71 / 9%)',
};

const typographyConfig = () => {
  const style = (
    fontSize = 'inherit',
    fontWeight = '400',
    lineHeight = '1.1',
  ) => ({
    fontSize,
    fontWeight,
    lineHeight,
  });

  return {
    h1: style('2.5rem', '500'),
    h2: style('2rem', '500'),
    h3: style('1.75rem', '500'),
    h4: style('1.5rem', '500'),
    h5: style('1.25rem', '500'),
    h6: style('1rem', '500'),
    body1: style('0.875rem', '400'),
    body2: style('1rem', '400'),
    subtitle1: style('1.75', '400'),
    subtitle2: style('0.875rem', '500'),
    caption: style('0.75rem', '400'),
  };
};

let theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Poppins',
      '"color-emoji"',
    ].join(','),
    ...typographyConfig(),
  },
  palette: {
    background: {
      default: '#f6f9fc',
    },
    primary: {
      light: '#3d8bfd',
      main: '#0d6efd',
      dark: '#094db1',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#fff',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          width: 'var(--drawerWidth)',
        },
        paper: ({ theme }) => ({
          width: 'var(--drawerWidth)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '.MuiListItemButton-root': {
            '.MuiListItemIcon-root': {
              color: '#9899ac',
              '.MuiSvgIcon-root': {
                height: '20px',
                width: '20px',
              },
            },
            '&.Mui-selected': {
              color: '#fff !important',
              background: `${theme.palette.primary.main} !important`,
              '.MuiListItemIcon-root': {
                color: '#fff !important',
              },
            },
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          height: '40px',
        },
        sizeMedium: {
          height: '42px',
        },
        sizeLarge: {
          height: '48px',
        },
        root: {
          textTransform: 'none',
          wordBreak: 'break-word',
          boxShadow: config.boxShadow,
          ':hover': {
            boxShadow: config.boxShadow,
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          '& .MuiInputBase-root': {
            ...(!ownerState.noBg && { backgroundColor: '#fff' }),
          },
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        multiline: {
          height: 'auto',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          '& legend': {
            width: '0px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '5px',
          padding: theme.spacing(2),
          boxShadow: config.boxShadow,
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: config.boxShadow,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td, &:last-child th': { border: 0 },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: config.boxShadow,
          '&:before': {
            display: 'none',
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

const Provider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
