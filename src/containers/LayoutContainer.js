import { connect } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import NavBar from '../components/NavBar'
import React from 'react'
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#97C073',
    },
    secondary: {
      main: '#99CC66',
    }
  },
  typography: {
    fontFamily: 'Dungeon, Arial',
    fontSize: 24,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [{
          fontFamily: 'Dungeon',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 'normal',
          src: 'url(./assets/fonts/dungeon.ttf)',
            unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
        }],
      },
    },
  },
})

const styles = (classes) => {
  return {
    toolbar: theme.mixins.toolbar,
    root: {
      zIndex: 1,
      overflow: 'hidden',
      height: '100vh'
    },
    error: {
      background: 'red'
    },
    success: {
      background: 'green'
    },
  }
}

class LayoutContainer extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline/>
          <NavBar/>
          {this.props.children}
        </MuiThemeProvider>
      </div>
    )
  }
}

export default connect(
  (state, props) => ({
    publicPath: state.config.publicPath
  }),
)(withStyles(styles)(LayoutContainer))

