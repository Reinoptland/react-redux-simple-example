import { combineReducers } from 'redux'
import appStatus from './appStatus'
import quotes from './quotes'

export default combineReducers({
    appStatus,
    quotes
})