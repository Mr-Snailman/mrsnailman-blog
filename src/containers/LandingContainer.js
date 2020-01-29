import blogList from '../blogList'
import BlogListing from '../components/BlogListing'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  blogGrid: {
    padding: theme.spacing(2),
  },
  titleGrid: {
    textAlign: 'center',
  },
  landingTitle: {
    fontFamily: 'Dungeon',
  }
}))

export default () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid container className={ classes.titleGrid }>
        <Grid item xs={12}>
          <Typography variant='h2' className={ classes.landingTitle }>
            The Thoughtful Brew
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h5' className={ classes.landingTitle }>
            Good Beer, Good Times, and the Good Life.
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={ classes.blogGrid }>
        <Grid item xs={12}>
          <Typography>Recent Entries</Typography>
          <BlogListing blogList={ blogList.slice(0, 4) }/>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

