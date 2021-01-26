import server from './server'
const api = {
  getArtists: async (payload = {}) => server.get('/artists', payload),
  addArtist: async (payload = {}) => server.post('/artists', payload),
  getAlbums: async (payload = {}) => server.get('/albums', payload),
  addAlbum: async (payload = {}) => server.post('/albums', payload),
}

export default api
