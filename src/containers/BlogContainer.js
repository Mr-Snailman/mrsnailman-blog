import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import {withRouter} from 'react-router'
import {withStyles} from '@material-ui/core/styles'

const styles = (theme) => {
  return {
    grid: {
      padding: 64,
      margin: theme.spacing.unit * 2,
    },
  }
}

class BlogContainer extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Grid container className={classes.grid}>
        <Grid item xs={12}>
          <Typography variant='title'>Blog</Typography>
        </Grid>
        <Grid item>
          <Typography>Coming Soon!</Typography>
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
)(withStyles(styles)(BlogContainer)))
