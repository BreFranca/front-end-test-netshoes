import reduxThunk from "redux-thunk"
import reducers from "./reducers"
import { createStore, applyMiddleware, compose } from "redux"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)

export default store
