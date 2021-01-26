import api from '../utils/api'
import * as types from '../types/artists'
import notify from '../utils/notify'

export const fetchArtists = () => dispatch => {
  dispatch({ type: types.FETCH_ARTISTS, payload: {} })
  api
    .getArtists()
    .then(res => {
      dispatch({ type: types.FETCH_ARTISTS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: types.FETCH_ARTISTS_ERROR, payload: err })
      const {
        message = 'error occured while fetching data'
      } = err.response.data
      notify('error', message)
    })
}

export const addArtist = payload => dispatch => {
  dispatch({ type: types.ADD_ARTIST, payload })
  api
    .addArtist(payload)
    .then(res => {
      dispatch({ type: types.ADD_ARTIST_SUCCESS, payload: res.data })
      dispatch(fetchArtists())
    })
    .catch(err => {
      dispatch({ type: types.ADD_ARTIST_ERROR, payload: err.response })
      const {
        message = 'error occured'
      } = err.response.data
      notify('error', message)
    })
}
