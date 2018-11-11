import Avatar from '@material-ui/core/Avatar'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import {withRouter} from 'react-router'
import {withStyles} from '@material-ui/core/styles'

const styles = (theme) => {
  return {
    grid: {
      paddingTop: 64,
    },
    avatarDiv: {
      display: 'flex',
      justifyContent: 'center',
    },
    avatarHeadshot: {
      margin: 10,
      height: 100,
      width: 100
    },
  }
}

class LandingContainer extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Grid container justify='center' className={classes.grid}>
        <Grid item>
          <div className={classes.avatarDiv}>
            <Avatar
              alt='Dustin Headshot'
              src={`${this.props.publicPath}assets/images/dustin.png`}
              className={classes.avatarHeadshot}/>
          </div>
        </Grid>
      </Grid>
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
)(withStyles(styles)(LandingContainer)))
