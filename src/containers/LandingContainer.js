import blogList from '../blogList'
import BlogListing from '../components/BlogListing'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import React from 'react'
import SocialMediaIcons from '../components/SocialMediaIcons'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  blogGrid: {
    padding: theme.spacing(2),
  },
  contactGrid: {
    textAlign: 'center',
    paddingBottom: theme.spacing(2),
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
  const contactUsRoute = useSelector(state => state.config.routes.contact)
  const history = useHistory()
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
          <BlogListing blogList={ blogList.slice(0, 4) }/>
        </Grid>
      </Grid>
      <Grid container justify='center'>
        <Hidden implementation='css' mdUp>
          <Grid item xs={12} className={ classes.contactGrid }>
            <Typography>Connect on Social Media!</Typography>
          </Grid>
          <SocialMediaIcons classes={{ gridItem: classes.contactGrid }}/>
        </Hidden>
        <Grid item xs={12} className={ classes.contactGrid }>
          <Typography>Have a question or a comment?</Typography>
          <Button color='primary' variant='outlined' onClick={ () => history.push(contactUsRoute) }>Contact Us</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

