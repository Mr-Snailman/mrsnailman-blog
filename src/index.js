import axios from 'axios'
import createHistory from 'history/createBrowserHistory'
import {createLogger} from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import {Provider} from 'react-redux'
import React from 'react'
import ReactDom from 'react-dom'
import reducers from './reducers'
import RouteContainer from './containers/RouteContainer'
import {thunkMiddleware} from './middleware'
import {applyMiddleware, createStore} from 'redux'
import 'core-js/es6/map'
import 'core-js/es6/set'
import 'babel-polyfill'

axios.defaults.withCredentials = true

const configFilePath = 'config.json'
const defaultconfig = {
  restAPIUrl: 'http://localhost:8080',
  publicPath: '/'
}

const renderApplication = (overrideconfig) => {
  const config = {
    ...overrideconfig,
  }

  config.routes = {
    home: `${config.publicPath}`,
    articles: `${config.publicPath}articles`,
    article: `${config.publicPath}article/:id`
  }

  const history = createHistory()
  let middleware = [thunkMiddleware(config), promiseMiddleware()]
  if(process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, createLogger()] 
  }
  const store = createStore(reducers, {config: config}, applyMiddleware(...middleware))
  
  ReactDom.render(
    <Provider store={store}>
      <RouteContainer history={history} store={store}/>
    </Provider>,
    document.getElementById('app'))
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
