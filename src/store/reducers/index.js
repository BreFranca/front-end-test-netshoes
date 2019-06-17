import { combineReducers } from 'redux'

import global from './global'
import ui from './ui'

export default combineReducers({
  ui,
  global,
})