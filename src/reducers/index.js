import { combineReducers } from 'redux'
import messages from './messages'
import widgets from './widgets'

export default combineReducers({
  messages,
  widgets
})
