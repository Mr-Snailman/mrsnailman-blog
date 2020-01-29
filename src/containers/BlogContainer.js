import BlogArticle from '../components/BlogArticle'
import blogList from '../blogList'
import BlogListing from '../components/BlogListing'
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

export default () => {
  const routes = useSelector(state => state.config.routes)
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={ routes.blog }>
          <BlogListing/>
        </Route>
        { blogList.map(el => 
          <Route key={ el.route } exact path={ `${routes.blog}/${el.route}` } render={() => <BlogArticle blogItem={ el }/> } />
        )}
      </Switch>
    </React.Fragment>
  )
}

