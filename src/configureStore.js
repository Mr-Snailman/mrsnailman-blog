import { createLogger } from 'redux-logger'
import createRootReducer from './ducks'
import promise from 'redux-promise-middleware'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'

export default (history, preloadedState = {}) => {
  let middleware = [routerMiddleware(history), thunk, promise]
  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, createLogger()] 
  }

  const store = createStore(createRootReducer(history), {
    ...preloadedState,
    // Load state from server-generated HTML
    ...window.__PRELOADED_STATE__,
  }, applyMiddleware(...middleware))

  // Delete the variable
  delete window.__PRELOADED_STATE__

  // Tell react-snap how to save state
  window.snapSaveState = () => ({
    __PRELOADED_STATE__: store.getState()
  })

  return store
} 
