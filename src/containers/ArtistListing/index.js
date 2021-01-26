import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArtistCard from '../../components/ArtistCard'
import ArtistModal from '../../components/ArtistModal'
import { fetchArtists } from '../../actions/artists'

const ArtistListing = () => {
  const dispatch = useDispatch()
  const { data: artists, loading } = useSelector(state => state.artists)
  useEffect(() => {
    dispatch(fetchArtists())
  }, [dispatch])
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <h3>Artists</h3>
        <ArtistModal />
      </div>

      {loading
        ? 'Loading'
        : artists.map(artist => <ArtistCard key={artist.id} data={artist} />)}
    </div>
  )
}
export default ArtistListing
