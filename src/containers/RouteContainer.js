import BlogContainer from './BlogContainer'
import LandingContainer from './LandingContainer'
import LayoutContainer from './LayoutContainer'
import React from 'react'
import {Route,Router,Switch} from 'react-router'


export default class RouteContainer extends React.Component {
  constructor(props) {
    super(props)
    this.routes = props.store.getState().config.routes
  }

  render() {
    return (
      <Router history={this.props.history}>
        <LayoutContainer>
          <Switch>
            <Route exact path={this.routes.home} component={LandingContainer}/>
            <Route path={this.routes.blog} component={BlogContainer}/>
          </Switch>
        </LayoutContainer>
      </Router>

    )
  }
}

