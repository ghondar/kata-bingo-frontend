import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'

import createRootReducer, { rootSaga } from 'reducers'

export const history = createBrowserHistory()

const initialState = {}
const sagaMiddleware = createSagaMiddleware()
const middleware = [ sagaMiddleware, routerMiddleware(history) ]

const finalCreateStore = compose(
  applyMiddleware(...middleware)
)

const store = createStore(createRootReducer(history), initialState, finalCreateStore)

sagaMiddleware.run(rootSaga)

export default store
