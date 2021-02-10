import blogList from '../blog'
import BlogListing from '../components/BlogListing'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import React from 'react'
import recipeList from '../recipes'
import RecipeListing from '../components/RecipeListing'
import Seo from '../Seo'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  blogGrid: {
    padding: theme.spacing(2),
  },
  titleGrid: {
    textAlign: 'center',
  },
  dungeon: {
    fontFamily: 'Dungeon',
  }
}))

const byUpdatedDate = (a, b) => moment(b.updated).valueOf() - moment(a.updated).valueOf()

export default () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Seo
        title='Thoughtful Brew'
        description='Thoughtful Brew Blog - Good Beer, Good Time, and the Good Life.'
        path='/'
      />
      <Grid container className={ classes.titleGrid }>
        <Grid item xs={12}>
          <Typography variant='h2' className={ classes.dungeon }>
            The Thoughtful Brew
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h5' className={ classes.dungeon }>
            Good Beer, Good Times, and the Good Life.
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={ classes.blogGrid }>
        <Grid item xs={12}>
          <Typography className={ classes.dungeon } variant='h4'>Recent Blog Entries</Typography>
          <BlogListing blogList={ [ ...blogList ].sort(byUpdatedDate).slice(0, 3) }/>
        </Grid>
        <Grid item xs={12}>
          <Typography className={ classes.dungeon } variant='h4'>Recent Recipes</Typography>
          <RecipeListing recipeList={ [ ...recipeList ].sort(byUpdatedDate).slice(0, 3) }/>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

