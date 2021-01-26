import { ADD_ALBUM, ADD_ALBUM_SUCCESS, ADD_ALBUM_ERROR } from '../types/albums'

const INITIAL_STATE = {
  loading: false,
  name: '',
  artist: '',
  success: false,
  error: undefined
}

const addAlbumReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_ALBUM:
      return {
        ...state,
        loading: true,
        success: false
      }
    case ADD_ALBUM_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        success: true
      }
    case ADD_ALBUM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        success: false
      }
    default:
      return state
  }
}

export default addAlbumReducer
