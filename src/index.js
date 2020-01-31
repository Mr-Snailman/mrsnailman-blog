import axios from 'axios'
import configureStore from './configureStore'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDom from 'react-dom'
import ReactGA from 'react-ga'
import RouteContainer from './containers/RouteContainer'

axios.defaults.withCredentials = true

let configFilePath = 'config.json'
if (process.env.NODE_ENV !== 'production') {
  configFilePath = 'config-prod.json'
}

const defaultconfig = {
  publicPath: '/',
  googleAnalyticsId: 'UA-157445631-1',
}

const renderApplication = (overrideconfig) => {
  const config = {
    ...overrideconfig,
  }

  config.routes = {
    home: `${config.publicPath}`,
    blog: `${config.publicPath}blog`,
    about: `${config.publicPath}about`,
    contact: `${config.publicPath}contact`,
  }

  const history = createBrowserHistory()
  const store = configureStore(history, { config: config })

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

