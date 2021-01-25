import { artists, albums } from '../mockdata'
const api = {
  getArtists: async () => artists,
  getAlbums: async () => albums
}

export default api
