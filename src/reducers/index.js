import { combineReducers } from 'redux'
import artists from './artists'
import albums from './albums'
import addArtist from './addArtist'
import addAlbum from './addAlbum'

const rootReducer = combineReducers({
  artists,
  albums,
  addArtist,
  addAlbum
})

export default rootReducer
