import React, { useEffect, useState } from 'react'
import { Modal, Button, Input, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { addAlbum } from '../../actions/albums'
import { fetchArtists } from '../../actions/artists'

const { Option } = Select

const AlbumModal = () => {
  const dispatch = useDispatch()

  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [artistId, setArtist] = useState('')

  const { loading, success } = useSelector(state => state.addAlbum)
  const { loading: loadingArtists, data } = useSelector(state => state.artists)

  const clear = () => {
    setVisible(false)
    setName('')
  }

  useEffect(() => {
    dispatch(fetchArtists())
  }, [dispatch])

  useEffect(() => {
    if (success) {
      clear()
    }
  }, [success])

  const handleCancel = () => {
    clear()
  }
  const handleSubmit = () => {
    dispatch(addAlbum({ name, artistId }))
  }

  const handleNameChange = ({ target }) => {
    const { value } = target
    setName(value)
  }

  const handleArtistChange = val => {
    setArtist(val)
  }

  return (
    <div style={{ marginLeft: 'auto', marginRight: '13.5%' }}>
      <Button type='primary' onClick={() => setVisible(true)}>
        add Album
      </Button>
      <Modal
        visible={visible}
        title='Add album'
        onOk={handleSubmit}
        onCancel={() => handleCancel()}
        footer={[
          <Button key='back' onClick={() => handleCancel()}>
            Cancel
          </Button>,
          <Button
            key='submit'
            type='primary'
            loading={loading}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        ]}
      >
        <Input
          placeholder='name'
          name='name'
          value={name}
          onChange={evt => handleNameChange(evt)}
        />
        <Select
          defaultValue='Choose artist'
          style={{ width: '100%', marginTop: 20 }}
          onChange={val => handleArtistChange(val)}
          loading={loadingArtists}
          name='artist'
        >
          {data.length &&
            data.map(artist => (
              <Option key={artist.id} value={artist.id}>
                {artist.name}
              </Option>
            ))}
        </Select>
      </Modal>
    </div>
  )
}

export default AlbumModal
