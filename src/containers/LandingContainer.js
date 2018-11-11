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
    grid: {
      paddingTop: 64,
    },
    gridItem: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing.unit,
    },
  }
}

class LandingContainer extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Grid container justify='center' className={classes.grid}>
        <Grid item xs={12} className={classes.gridItem}>
          <Avatar
            alt='Dustin Headshot'
            src={`${this.props.publicPath}assets/images/dustin.png`}
            className={classes.avatarHeadshot}/>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <Typography>Software Engineer, Mentor, Leader</Typography>
        </Grid>
        <Grid item className={classes.gridItem}>
          <a
            href='https://github.com/Mr-Snailman'
            target='_blank'
            rel='noopener noreferrer'>
            <Avatar
              alt='Github'
              src={`${this.props.publicPath}assets/images/github/GitHub-Mark-32px.png`}/>
          </a>
        </Grid>
        <Grid item className={classes.gridItem}>
          <a
            href='https://exerceo.org'
            target='_blank'
            rel='noopener noreferrer'>
            <Avatar
              alt='Exerceo'
              src={`${this.props.publicPath}assets/images/exerceo.png`}/>
          </a>
        </Grid>
        <Grid item className={classes.gridItem}>
          <a
            href='https://linkedin.com/in/dsaunders2414/'
            target='_blank'
            rel='noopener noreferrer'>
            <Avatar
              alt='LinkedIn'
              src={`${this.props.publicPath}assets/images/linkedin/In-2C-48px-R.png`}/>
          </a>
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
