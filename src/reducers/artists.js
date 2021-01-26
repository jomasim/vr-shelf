import {
  FETCH_ARTISTS,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_ERROR
} from '../types/artists'

const INITIAL_STATE = {
  data: [],
  loading: false
}

const artistsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_ARTISTS:
      return {
        ...state,
        loading: true
      }
    case FETCH_ARTISTS_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false
      }
    case FETCH_ARTISTS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state
  }
}

export default artistsReducer
