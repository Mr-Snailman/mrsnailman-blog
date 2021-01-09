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
  recipesGrid: {
    paddingBottom: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
  },
}))

export default () => {
  const classes = useStyles()
  const recipesRoute = useSelector(state => state.config.routes.recipes)
  return (
    <Switch>
      <Route exact path={ recipesRoute }>
        <Helmet>
          <title>Thoughtful Brew - Recipes</title>
        </Helmet>
        <Grid container justify='center' className={ classes.recipesGrid }>
          <Grid item xs={12} className={ classes.title }>
            <Typography variant='h3' className={ classes.dungeon }>Recipes</Typography>
          </Grid>
          <Grid>
            <Typography>Coming Soon!</Typography>
          </Grid>
        </Grid>
        </Route>
      <Route path="*" component={ NoMatch }/>
    </Switch>
  )
}
