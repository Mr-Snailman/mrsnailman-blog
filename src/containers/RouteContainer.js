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
            <Route exact path={this.routes.home} render={() => {
              return (
                <div></div>
              )
            }}/>
          </Switch>
        </LayoutContainer>
      </Router>

    )
  }
}

