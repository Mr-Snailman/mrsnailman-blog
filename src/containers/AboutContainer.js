import Avatar from '@material-ui/core/Avatar'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import {withRouter} from 'react-router'
import {withStyles} from '@material-ui/core/styles'

const styles = (theme) => {
  return {
    avatarHeadshot: {
      margin: 10,
      height: 100,
      width: 100
    },
    gridItem: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing.unit,
    },
    columnGridItem: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing.unit,
    }
  }
}

class LandingContainer extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <Grid item xs={12} className={classes.gridItem}>
          <Avatar
            alt='Dustin Headshot'
            src={`${this.props.publicPath}assets/images/dustin.jpg`}
            className={classes.avatarHeadshot}/>
        </Grid>
        <Grid item xs={12} className={classes.columnGridItem}>
          <Typography>Software Engineer, Mentor, Leader</Typography>
          <Typography>Homebrewer, Entrepreneur</Typography>
        </Grid>
      </React.Fragment>
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
