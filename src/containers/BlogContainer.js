import BlogArticle from '../components/BlogArticle'
import blogList from '../blogList'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

export default () => {
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

