import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router'
import { useSelector } from 'react-redux'

const AboutContainer = React.lazy(() => import('./AboutContainer'))
const BlogContainer = React.lazy(() => import('./BlogContainer'))
const ContactUsContainer = React.lazy(() => import('./ContactUsContainer'))
const LandingContainer = React.lazy(() => import('./LandingContainer'))
const NoMatch = React.lazy(() => import('./404'))

export default () => {
  const routes = useSelector(state => state.config.routes)
  return (
    <Suspense fallback={ <div></div> }>
      <Switch>
        <Route exact path={ routes.home } component={ LandingContainer }/>
        <Route exact path={ routes.contact } component={ ContactUsContainer }/>
        <Route exact path={ routes.about } component={ AboutContainer }/>
        <Route path={ routes.blog } component={ BlogContainer }/>
        <Route path="*" component={ NoMatch }/>
      </Switch>
    </Suspense>
  )
}

