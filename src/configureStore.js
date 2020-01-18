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
  return createStore(createRootReducer(history), preloadedState, applyMiddleware(...middleware))
} 
