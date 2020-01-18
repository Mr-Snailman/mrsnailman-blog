import BlogContainer from './BlogContainer'
import { ConnectedRouter } from 'connected-react-router'
import LandingContainer from './LandingContainer'
import LayoutContainer from './LayoutContainer'
import React from 'react'
import { Route, Switch } from 'react-router'

export default (props) => {
  const routes = props.store.getState().config.routes
  return (
    <ConnectedRouter history={props.history}>
      <LayoutContainer>
        <Switch>
          <Route exact path={routes.home} component={LandingContainer}/>
          <Route path={routes.blog} component={BlogContainer}/>
        </Switch>
      </LayoutContainer>
    </ConnectedRouter>
  )
}

