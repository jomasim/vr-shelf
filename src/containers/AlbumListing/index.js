import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AlbumCard from '../../components/AlbumCard'
import AlbumModal from '../../components/AlbumModal'
import Empty from '../../components/Empty'
import { fetchAlbums } from '../../actions/albums'

const AlbumListing = () => {
  const dispatch = useDispatch()
  const { data: albums } = useSelector(state => state.albums)
  useEffect(() => {
    dispatch(fetchAlbums())
  }, [dispatch])
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <h3>Albums</h3>
        <AlbumModal />
      </div>
      {albums.length ? (
        albums.map(album => <AlbumCard key={album.id} data={album} />)
      ) : (
        <Empty />
      )}
    </div>
  )
}
export default AlbumListing
