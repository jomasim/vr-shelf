import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Album from '../../components/Album'
import { fetchAlbums } from '../../actions/albums'

const AlbumListing = () => {
  const dispatch = useDispatch()
  const { data: albums } = useSelector(state => state.albums)
  useEffect(() => {
    dispatch(fetchAlbums())
  }, [dispatch])
  return (
    <div>
      <h3>Albums</h3>
      {albums.map(album => (
        <Album key={album.id} data={album} />
      ))}
    </div>
  )
}
export default AlbumListing
