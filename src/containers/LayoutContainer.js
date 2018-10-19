import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import classNames from 'classnames'
import {connect} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import indigo from '@material-ui/core/colors/indigo'
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
    content: {
      flexGrow: 1,
      backgroundColor: classes.palette.background.default,
    },
    grid: {
      paddingTop: 50,
    },
    avatarDiv: {
      display: 'flex',
      justifyContent: 'center',
    },
    avatarHeadshot: {
      margin: 10,
      height: 100,
      width: 100
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
                align='center'
                noWrap>
                Dustin K. Saunders 
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={this.props.classes.toolbar} />
          <Grid container justify='center' className={this.props.classes.grid}>
            <Grid item xs={10}>
              <div className={this.props.classes.avatarDiv}>
                <Avatar
                  alt='Dustin Headshot'
                  src='assets/images/dustin.png'
                  className={this.props.classes.avatarHeadshot}/>
              </div>
            </Grid>
          </Grid>
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

