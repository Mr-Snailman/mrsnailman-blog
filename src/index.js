import axios from 'axios'
import createHistory from 'history/createBrowserHistory'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDom from 'react-dom'
import ReactGA from 'react-ga'
import reducers from './reducers'
import RouteContainer from './containers/RouteContainer'
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'

axios.defaults.withCredentials = true

const configFilePath = 'config.json'

const defaultconfig = {
  publicPath: '/',
  googleAnalyticsId: 'UA-128993986-1',
}

const renderApplication = (overrideconfig) => {
  const config = {
    ...overrideconfig,
  }

  config.routes = {
    home: `${config.publicPath}`,
    blog: `${config.publicPath}blog`,
  }

  const history = createHistory()
  let middleware = [thunk, promise]
  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, createLogger()] 
  }
  const store = createStore(reducers, {config: config}, applyMiddleware(...middleware))
  
  ReactDom.render(
    <Provider store={store}>
      <RouteContainer history={history} store={store}/>
    </Provider>,
    document.getElementById('root'))

  ReactGA.initialize(config.googleAnalyticsId)
  ReactGA.pageview(window.location.pathname + window.location.search)
}

axios.get(configFilePath).then(
  (success) => {
    renderApplication(Object.assign(defaultconfig, success.data))
  },
  (failure) => {
    console.warn('[WARNING] Failed to load config file, falling back to default config.') // eslint-disable-line no-console
    renderApplication(defaultconfig)
  }
)

