import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Artist from '../../components/Artist'
import { fetchArtists } from '../../actions/artists'

const ArtistListing = () => {
  const dispatch = useDispatch()
  const { data: artists } = useSelector(state => state.artists)
  useEffect(() => {
    dispatch(fetchArtists())
  }, [dispatch])
  return (
    <div>
      <h3>Artists</h3>
      {artists.map(artist => (
        <Artist key={artist.id} data={artist} />
      ))}
    </div>
  )
}
export default ArtistListing
