import { combineReducers } from 'redux'
import artists from './artists'
import albums from './albums'

const rootReducer = combineReducers({
  artists,
  albums
})

export default rootReducer
