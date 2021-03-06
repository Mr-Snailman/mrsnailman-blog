import App from './App'
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

const config = {
  publicPath: '/',
}

config.routes = {
  home: `${config.publicPath}`,
  blog: `${config.publicPath}blog`,
  about: `${config.publicPath}about`,
  contact: `${config.publicPath}contact`,
  recipes: `${config.publicPath}recipes`,
}

const history = createBrowserHistory()

ReactGA.initialize('UA-157445631-1')

const store = configureStore(history, { config: config })

const rootElement = document.getElementById('root')

ReactDom.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <ThemeProvider theme={ theme }>
        <CssBaseline/>
        <App/>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>, rootElement)

