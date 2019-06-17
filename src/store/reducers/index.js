import { combineReducers } from 'redux'

import product from './product'
import cart from './cart'
import ui from './ui'

export default combineReducers({
  product,
  cart,
  ui,
})