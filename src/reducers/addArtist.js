import {
  ADD_ARTIST,
  ADD_ARTIST_SUCCESS,
  ADD_ARTIST_ERROR
} from '../types/artists'

const INITIAL_STATE = {
  loading: false,
  name: '',
  success: false,
  error: undefined
}

const addArtistReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_ARTIST:
      return {
        ...state,
        loading: true,
        success: false
      }
    case ADD_ARTIST_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        success: true
      }
    case ADD_ARTIST_ERROR:
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

export default addArtistReducer
