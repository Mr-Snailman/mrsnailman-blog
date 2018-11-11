import AppBar from '@material-ui/core/AppBar'
import {connect} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import indigo from '@material-ui/core/colors/indigo'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {withRouter} from 'react-router'
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#e7e7e7'
    },
    secondary: {
      main: indigo[400]
    }
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
    appBar: {
      zIndex: classes.zIndex.drawer + 1
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
          <AppBar
            position='absolute'
            className={classes.appBar}>
            <Toolbar>
              <IconButton><MenuIcon/></IconButton>
              <Typography
                variant='title'
                color='inherit'
                style={{flexGrow: 2}}>
                Dustin K. Saunders 
              </Typography>
            </Toolbar>
          </AppBar>
          {this.props.children}
        </MuiThemeProvider>
      </div>
    )
  }
}

export default withRouter(connect(
  (state, props) => {
    return {
      publicPath: state.config.publicPath
    }
  },
  (dispatch, props) => {
    return {
    }
  }
)(withStyles(styles)(LayoutContainer)))

