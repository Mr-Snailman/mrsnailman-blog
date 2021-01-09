import BlogArticle from '../components/BlogArticle'
import blogList from '../blog'
import BlogListing from '../components/BlogListing'
import Grid from '@material-ui/core/Grid'
import { Helmet } from 'react-helmet'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

const NoMatch = React.lazy(() => import('./404'))

const useStyles = makeStyles(theme => ({
  dungeon: {
    fontFamily: 'Dungeon',
  },
  title: {
    textAlign: 'center',
  },
}))
export default () => {
  const classes = useStyles()
  const blogRoute = useSelector(state => state.config.routes.blog)
  return (
    <Switch>
      <Route exact path={ blogRoute }>
        <Helmet>
          <title>Thoughtful Brew - Blog</title>
        </Helmet>
        <Grid container justify='center'>
          <Grid item xs={12} className={ classes.title }>
            <Typography variant='h3' className={ classes.dungeon }>Blog Entries</Typography>
          </Grid>
          <BlogListing/>
        </Grid>
      </Route>
      { blogList.map(el => 
        <Route key={ el.route } exact path={ `${blogRoute}/${el.route}` } render={() => <BlogArticle blogItem={ el }/> } />
      )}
      <Route path="*" component={ NoMatch }/>
    </Switch>
  )
}

