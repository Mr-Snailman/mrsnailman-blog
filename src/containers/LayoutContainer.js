import AppBar from '@material-ui/core/AppBar'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import classNames from 'classnames'
import {connect} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import indigo from '@material-ui/core/colors/indigo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {NavLink} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings'
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
      zIndex: classes.zIndex.drawer + 1,
    },
    content: {
      flexGrow: 1,
      backgroundColor: classes.palette.background.default,
    },
    drawer: {
      zIndex: 2
    },
    appLogo: {
      maxHeight: '30vh',
      maxWidth: '30vh'
    }
  }
}

class LayoutContainer extends React.Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline/>
          <AppBar
            position='absolute'
            className={classNames(this.props.classes.appBar)}>
            <Toolbar>
              <Typography
                variant='title'
                color='inherit'
                style={{flexGrow: 2}}
                noWrap>
                Title Typography Page
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={classNames(this.props.classes.drawer)}>

            <div className={this.props.classes.toolbar} />
          </Drawer>

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

