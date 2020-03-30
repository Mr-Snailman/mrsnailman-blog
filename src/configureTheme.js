import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import dungeon from './dungeon.woff2'

export default responsiveFontSizes(createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#97C073',
    },
    secondary: {
      main: '#555555',
    }
  },
  typography: {
    fontFamily: [
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  },
  overrides: {
    MuiAvatar: {
      colorDefault: {
        backgroundColor: '#97C073',
      },
    },
    MuiCssBaseline: {
      '@global': {
        '@font-face': [{
          fontFamily: 'Dungeon',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 'normal',
          src: `url(${dungeon})`,
            unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
        }],
      },
    },
  },
}))

