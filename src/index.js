import App from './App'
import axios from 'axios'
import configureStore from './configureStore'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDom from 'react-dom'
import ReactGA from 'react-ga'
import theme from './configureTheme'
import { ThemeProvider, } from '@material-ui/core/styles'

import { JssProvider } from 'react-jss'
import { create } from 'jss'
import preset from 'jss-preset-default'

axios.defaults.withCredentials = true

const config = {
  publicPath: '/',
}

config.routes = {
  home: `${config.publicPath}`,
  blog: `${config.publicPath}blog`,
  about: `${config.publicPath}about`,
  contact: `${config.publicPath}contact`,
}

const history = createBrowserHistory()
const store = configureStore(history, { config: config })

const rootElement = document.getElementById('root')

// See this Issue in react-snap: https://github.com/stereobooster/react-snap/issues/99
const createGenerateClassName = () => {
  let counter = 0
  return (rule, sheet) => `c${Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4)}-${rule.key}-${counter++}`
}
const jss = create(preset())
jss.options.createGenerateClassName = createGenerateClassName

ReactDom.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <JssProvider jss={ jss }>
        <ThemeProvider theme={ theme }>
          <CssBaseline/>
          <App/>
        </ThemeProvider>
      </JssProvider>
    </ConnectedRouter>
  </Provider>, rootElement)

if (navigator.userAgent !== 'ReactSnap' && process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-157445631-1')
  ReactGA.pageview(window.location.pathname + window.location.search)
}

