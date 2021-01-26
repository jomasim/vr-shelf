import api from '../utils/api'
import notify from '../utils/notify'
import * as types from '../types/albums'
export const fetchAlbums = () => dispatch => {
  dispatch({ type: types.FETCH_ALBUMS, payload: {} })
  api
    .getAlbums()
    .then(res => {
      dispatch({ type: types.FETCH_ALBUMS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: types.FETCH_ALBUMS_ERROR, payload: err })
    })
}

export const addAlbum = payload => dispatch => {
  dispatch({ type: types.ADD_ALBUM, payload })
  api
    .addAlbum(payload)
    .then(res => {
      dispatch({ type: types.ADD_ALBUM_SUCCESS, payload: res.data })
      dispatch(fetchAlbums())
    })
    .catch(err => {
      dispatch({ type: types.ADD_ALBUM_ERROR, payload: err.response })
      const { message = 'error occured' } = err.response.data
      notify('error', message)
    })
}
