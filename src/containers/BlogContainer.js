import BlogArticle from '../components/BlogArticle'
import blogList from '../blogList'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
}))

export default () => {
  const classes = useStyles()
  const routes = useSelector(state => state.config.routes)
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={ routes.blog }>
          <Typography>Blog List goes here!</Typography>
        </Route>
        { blogList.map(el => 
          <Route key={ el.route } exact path={ `${routes.blog}/${el.route}` } render={() => <BlogArticle blogItem={ el }/> } />
        )}
      </Switch>
    </React.Fragment>
  )
}

