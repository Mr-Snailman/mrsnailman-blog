import AboutContainer from './AboutContainer'
import BlogContainer from './BlogContainer'
import ContactUsContainer from './ContactUsContainer'
import LandingContainer from './LandingContainer'
import React from 'react'
import { Route, Switch } from 'react-router'
import { useSelector } from 'react-redux'

export default () => {
  const routes = useSelector(state => state.config.routes)
  return (
    <Switch>
      <Route exact path={ routes.home } component={ LandingContainer }/>
      <Route exact path={ routes.contact } component={ ContactUsContainer }/>
      <Route exact path={ routes.about } component={ AboutContainer }/>
      <Route path={ routes.blog } component={ BlogContainer }/>
    </Switch>
  )
}

