import {
    FETCH_ALBUMS,
    FETCH_ALBUMS_SUCCESS,
    FETCH_ALBUMS_ERROR
  } from '../types/albums'
  const INITIAL_STATE = {
    data: [],
    loading: false
  }
  
  const albumsReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch (type) {
      case FETCH_ALBUMS:
        return {
          ...state,
          loading: true
        }
      case FETCH_ALBUMS_SUCCESS:
        return {
          ...state,
          data: payload,
          loading: false
        }
      case FETCH_ALBUMS_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        }
      default:
        return state
    }
  }
  
  export default albumsReducer
  