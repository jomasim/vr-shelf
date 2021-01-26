import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArtistCard from '../../components/ArtistCard'
import ArtistModal from '../../components/ArtistModal'
import Empty from '../../components/Empty'
import { fetchArtists } from '../../actions/artists'

const ArtistListing = () => {
  const dispatch = useDispatch()
  const { data: artists } = useSelector(state => state.artists)
  useEffect(() => {
    dispatch(fetchArtists())
  }, [dispatch])
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <h3>Artists</h3>
        <ArtistModal />
      </div>

      {artists.length ? (
        artists.map(artist => <ArtistCard key={artist.id} data={artist} />)
      ) : (
        <Empty />
      )}
    </div>
  )
}
export default ArtistListing
