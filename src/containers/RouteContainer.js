import AboutContainer from './AboutContainer'
import BlogContainer from './BlogContainer'
import { ConnectedRouter } from 'connected-react-router'
import ContactUsContainer from './ContactUsContainer'
import LandingContainer from './LandingContainer'
import LayoutContainer from './LayoutContainer'
import React from 'react'
import { Route, Switch } from 'react-router'

export default (props) => {
  const routes = props.store.getState().config.routes
  return (
    <ConnectedRouter history={ props.history }>
      <LayoutContainer routes={ routes }>
        <Switch>
          <Route exact path={ routes.home } component={ LandingContainer }/>
          <Route exact path={ routes.contact } component={ ContactUsContainer }/>
          <Route exact path={ routes.about } component={ AboutContainer }/>
          <Route path={ routes.blog } component={ BlogContainer }/>
        </Switch>
      </LayoutContainer>
    </ConnectedRouter>
  )
}

