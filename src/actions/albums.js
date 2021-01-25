import api from '../utils/api'
import {
  FETCH_ALBUMS,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_ERROR
} from '../types/albums'
export const fetchAlbums= () => dispatch => {
  dispatch({ type: FETCH_ALBUMS, payload: {} })
  api
    .getAlbums()
    .then(res => {
      dispatch({ type: FETCH_ALBUMS_SUCCESS, payload: res })
    })
    .catch(err => {
      dispatch({ type: FETCH_ALBUMS_ERROR, payload: err })
    })
}
