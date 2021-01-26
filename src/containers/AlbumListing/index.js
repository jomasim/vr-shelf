import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AlbumCard from '../../components/AlbumCard'
import AlbumModal from '../../components/AlbumModal'
import { fetchAlbums } from '../../actions/albums'

const AlbumListing = () => {
  const dispatch = useDispatch()
  const { data: albums, loading } = useSelector(state => state.albums)
  useEffect(() => {
    dispatch(fetchAlbums())
  }, [dispatch])
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <h3>Albums</h3>
        <AlbumModal />
      </div>
      {loading
        ? 'Loading data...'
        : albums.map(album => <AlbumCard key={album.id} data={album} />)}
    </div>
  )
}
export default AlbumListing
