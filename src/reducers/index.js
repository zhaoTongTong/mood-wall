import { combineReducers } from 'redux'
import sayInfo from './init.js'

const todoApp = combineReducers({
  sayInfo: sayInfo
})

export default todoApp