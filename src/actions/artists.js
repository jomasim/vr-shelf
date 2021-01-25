import api from '../utils/api'
import {
  FETCH_ARTISTS,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_ERROR
} from '../types/artists'
export const fetchArtists = () => dispatch => {
  dispatch({ type: FETCH_ARTISTS, payload: {} })
  api
    .getArtists()
    .then(res => {
      dispatch({ type: FETCH_ARTISTS_SUCCESS, payload: res })
    })
    .catch(err => {
      dispatch({ type: FETCH_ARTISTS_ERROR, payload: err })
    })
}
